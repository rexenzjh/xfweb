/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.dao.leave;

import com.jeeplus.common.persistence.CrudDao;
import com.jeeplus.common.persistence.annotation.MyBatisDao;
import com.jeeplus.modules.test.entity.leave.Leave;

/**
 * 请假DAO接口
 * @author jiangwenjie
 * @version 2017-08-21
 */
@MyBatisDao
public interface LeaveDao extends CrudDao<Leave> {

	
}