/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.service.leave;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jeeplus.common.persistence.Page;
import com.jeeplus.common.service.CrudService;
import com.jeeplus.modules.test.entity.leave.Leave;
import com.jeeplus.modules.test.dao.leave.LeaveDao;

/**
 * 请假Service
 * @author jiangwenjie
 * @version 2017-08-21
 */
@Service
@Transactional(readOnly = true)
public class LeaveService extends CrudService<LeaveDao, Leave> {

	public Leave get(String id) {
		return super.get(id);
	}
	
	public List<Leave> findList(Leave leave) {
		return super.findList(leave);
	}
	
	public Page<Leave> findPage(Page<Leave> page, Leave leave) {
		return super.findPage(page, leave);
	}
	
	@Transactional(readOnly = false)
	public void save(Leave leave) {
		super.save(leave);
	}
	
	@Transactional(readOnly = false)
	public void delete(Leave leave) {
		super.delete(leave);
	}
	
	
	
	
}