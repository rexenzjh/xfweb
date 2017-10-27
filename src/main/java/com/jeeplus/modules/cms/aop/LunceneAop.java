package com.jeeplus.modules.cms.aop;

/**
 * Created by jinhui1 on 2017/7/5.
 */

import java.lang.annotation.*;

@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface LunceneAop {
    String name();
}
