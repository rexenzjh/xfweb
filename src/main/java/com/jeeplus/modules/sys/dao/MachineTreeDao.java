/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.sys.dao;

import com.jeeplus.common.persistence.TreeDao;
import com.jeeplus.common.persistence.annotation.MyBatisDao;
import com.jeeplus.modules.sys.entity.MachineTree;

/**
 * 建筑物设备DAO接口
 * @author 张金辉
 * @version 2017-08-19
 */
@MyBatisDao
public interface MachineTreeDao extends TreeDao<MachineTree> {
	
}