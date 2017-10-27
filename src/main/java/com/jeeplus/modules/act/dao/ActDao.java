/**
 * Copyright &copy; 2016  <a href="http://www.rexen.com.cn">rexen</a>
 */
package com.jeeplus.modules.act.dao;

import com.jeeplus.common.persistence.CrudDao;
import com.jeeplus.common.persistence.annotation.MyBatisDao;
import com.jeeplus.modules.act.entity.Act;

/**
 * 审批DAO接口
 * @author thinkgem
 * @version 2014-05-16
 */
@MyBatisDao
public interface ActDao extends CrudDao<Act> {

	public int updateProcInsIdByBusinessId(Act act);
	
}
