package com.wcy.rhapsody.admin.modules.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 话题-标签中间表
 *
 * @author Yeeep
 */
@Data
@TableName("topic_tag")
@Accessors(chain = true)
public class TopicTag implements Serializable {
    private static final long serialVersionUID = -5028599844989220715L;

    @TableField("tag_id")
    private String tagId;

    @TableField("topic_id")
    private String topicId;
}
