/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.dao.rff;

import com.jeeplus.common.persistence.CrudDao;
import com.jeeplus.common.persistence.annotation.MyBatisDao;
import com.jeeplus.modules.test.entity.rff.TestRf;

/**
 * rffDAO接口
 * @author rff
 * @version 2017-08-23
 */
@MyBatisDao
public interface TestRfDao extends CrudDao<TestRf> {

	
}