package com.jeeplus.modules.cms.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
 * Created by jinhui1 on 2017/7/5.
 */
@Component
@Aspect
public class LunceneAspect {
    @Pointcut("execution(* com.jeeplus.modules.cms.web..*.*(..))")
    public void ArticlePointCut() {}

    @After("ArticlePointCut()")
    public void ArticleAfter(JoinPoint joinPoint)
            throws Throwable {
        System.out.println("===========");

    }
}
