package com.wyc.rhapsody.backend.utils;

import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.RandomUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Objects;

/**
 * 文件上传
 *
 * @author knox
 */
@Component
public class FileUtil {

    private final Logger log = LoggerFactory.getLogger(FileUtil.class);

    /**
     * 自定义上传路径
     */
    public static final String UPLOAD_PATH = "D:\\";

    /**
     * 上传文件
     *
     * @param file       要上传的文件对象
     * @param fileName   文件名，可以为空，为空的话，就生成一串uuid代替文件名
     * @param customPath 自定义存放路径，这个地址是跟在数据库里配置的路径后面的，
     *                   格式类似 avatar/admin 前后没有 / 前面表示头像，后面是用户的昵称，举例，如果将用户头像全都放在一个文件夹里，这里可以直接传个 avatar
     * @return
     */
    public String upload(MultipartFile file, String fileName, String customPath) {
        try {
            if (file == null || file.isEmpty()) {
                log.warn("文件上传失败，数据为空");
                return null;
            }

            if (StringUtils.isEmpty(fileName)) {
                fileName = IdUtil.fastSimpleUUID();
            }
            String suffix = "." + Objects.requireNonNull(file.getContentType()).split("/")[1];
            // 如果存放目录不存在，则创建
            File savePath = new File(UPLOAD_PATH + customPath);
            if (!savePath.exists()) {
                savePath.mkdirs();
            }

            // 给上传的路径拼上文件名与后缀
            String localPath = UPLOAD_PATH + customPath + "/" + fileName + suffix;

            // 上传文件
            // 下面 BufferedOutputStream的构造参数是直接在参数里通过 new FileOutputStream() 的方式传入的，所以它没有对象接收
            // 但下面只关闭了 stream 的流，这个FileOutputStream有没有关闭呢？
            // 答案是关了，跟踪 stream.close() 源码就会发现，这货关闭的就是 OutputStream , 也就是传入的这个输出流
            // 另外实现了AutoCloseable这个接口的流当声明流被放在 try(){} 的()里时，流用完了，程序会自动的调用这个流的close()方法
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(localPath)));
            stream.write(file.getBytes());
            stream.close();

            // 上传成功后返回访问路径
            return UPLOAD_PATH + customPath + "/" + fileName + suffix + "?v=" + RandomUtil.randomNumbers(1);
        } catch (IOException e) {
            log.error(e.getMessage());
            return null;
        }
    }
}
