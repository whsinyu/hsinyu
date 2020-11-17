package com.wcy.rhapsody.admin.modules.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 系统配置
 *
 * @author Yeeep
 */
@Data
@TableName("system_config")
@Accessors(chain = true)
public class SystemConfig implements Serializable {

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 配置键
     * <p>
     * 反引号，解决mysql关键字问题
     */
    @TableField("`key`")
    private String key;

    /**
     * 配置值
     */
    @TableField("`value`")
    private String value;

    /**
     * 配置描述
     */
    @TableField("remark")
    private String remark;

    /**
     * 父级ID
     */
    @TableField("pid")
    private Integer pid;

    /**
     * 配置类型，常见的有 select, input[type=text,url,number,radio,password,email]
     */
    @TableField("`type`")
    private String type;

    /**
     * 特殊类型里的值，比如 radio，select 的option
     */
    @TableField("`option`")
    private String option;

    /**
     * 修改后是否需要重启
     */
    @TableField("`reboot`")
    private String reboot;
}
