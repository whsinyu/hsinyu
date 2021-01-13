package com.wyc.amor.config.security.config;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wyc.amor.model.entity.UmsUser;
import com.wyc.amor.service.IUmsUserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * @author knox
 * @since 2021-01-13
 */
@Component
public class UserDetailsServiceImpl implements UserDetailsService {
    @Resource
    private IUmsUserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 获取登录用户信息
        UmsUser admin = userService.getOne(new LambdaQueryWrapper<UmsUser>().eq(UmsUser::getUsername, username));
        if (admin != null) {
            // 获取用户可访问资源
            // List<UmsResource> resourceList = iUmsResourceService.getResourceList();
            return new AdminUserDetails(admin);
        }
        throw new UsernameNotFoundException("用户名或密码错误");
    }
}
