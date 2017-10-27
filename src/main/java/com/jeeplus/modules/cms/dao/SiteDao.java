/**
 * Copyright &copy; 2016  <a href="http://www.rexen.com.cn">rexen</a>
 */
package com.jeeplus.modules.cms.dao;

import com.jeeplus.common.persistence.CrudDao;
import com.jeeplus.common.persistence.annotation.MyBatisDao;
import com.jeeplus.modules.cms.entity.Site;

/**
 * 站点DAO接口
 * @author ThinkGem
 * @version 2013-8-23
 */
@MyBatisDao
public interface SiteDao extends CrudDao<Site> {

    @Override
    int delete(Site entity);
}
