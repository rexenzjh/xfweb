/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.sys.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jeeplus.common.service.TreeService;
import com.jeeplus.common.utils.StringUtils;
import com.jeeplus.modules.sys.entity.MachineTree;
import com.jeeplus.modules.sys.dao.MachineTreeDao;

/**
 * 建筑物设备Service
 * @author 张金辉
 * @version 2017-08-19
 */
@Service
@Transactional(readOnly = true)
public class MachineTreeService extends TreeService<MachineTreeDao, MachineTree> {

	public MachineTree get(String id) {
		return super.get(id);
	}
	
	public List<MachineTree> findList(MachineTree machineTree) {
		if (StringUtils.isNotBlank(machineTree.getParentIds())){
			machineTree.setParentIds(","+machineTree.getParentIds()+",");
		}
		return super.findList(machineTree);
	}
	
	@Transactional(readOnly = false)
	public void save(MachineTree machineTree) {
		super.save(machineTree);
	}
	
	@Transactional(readOnly = false)
	public void delete(MachineTree machineTree) {
		super.delete(machineTree);
	}
	
}