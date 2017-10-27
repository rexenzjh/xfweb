/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.dao;

import com.jeeplus.common.persistence.CrudDao;
import com.jeeplus.common.persistence.annotation.MyBatisDao;
import com.jeeplus.modules.test.entity.TestCreate;

/**
 * aDAO接口
 * @author a
 * @version 2017-08-21
 */
@MyBatisDao
public interface TestCreateDao extends CrudDao<TestCreate> {

	
}