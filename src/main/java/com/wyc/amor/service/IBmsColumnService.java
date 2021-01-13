package com.wyc.amor.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wyc.amor.model.entity.BmsColumn;
import com.wyc.amor.model.vo.BmsColumnVO;

/**
 * 用户专栏
 *
 * @author Knox
 * @date 2020/11/28
 */
public interface IBmsColumnService extends IService<BmsColumn> {

    /**
     * 查询专栏列表
     *
     * @param columnVOPage
     * @return
     */
    Page<BmsColumnVO> getList(Page<BmsColumnVO> columnVOPage);
}
