/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jeeplus.common.persistence.Page;
import com.jeeplus.common.service.CrudService;
import com.jeeplus.modules.test.entity.TestCreate;
import com.jeeplus.modules.test.dao.TestCreateDao;

/**
 * aService
 * @author a
 * @version 2017-08-21
 */
@Service
@Transactional(readOnly = true)
public class TestCreateService extends CrudService<TestCreateDao, TestCreate> {

	public TestCreate get(String id) {
		return super.get(id);
	}
	
	public List<TestCreate> findList(TestCreate testCreate) {
		return super.findList(testCreate);
	}
	
	public Page<TestCreate> findPage(Page<TestCreate> page, TestCreate testCreate) {
		return super.findPage(page, testCreate);
	}
	
	@Transactional(readOnly = false)
	public void save(TestCreate testCreate) {
		super.save(testCreate);
	}
	
	@Transactional(readOnly = false)
	public void delete(TestCreate testCreate) {
		super.delete(testCreate);
	}
	
	
	
	
}