/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.service.rff;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jeeplus.common.persistence.Page;
import com.jeeplus.common.service.CrudService;
import com.jeeplus.modules.test.entity.rff.TestRf;
import com.jeeplus.modules.test.dao.rff.TestRfDao;

/**
 * rffService
 * @author rff
 * @version 2017-08-23
 */
@Service
@Transactional(readOnly = true)
public class TestRfService extends CrudService<TestRfDao, TestRf> {

	public TestRf get(String id) {
		return super.get(id);
	}
	
	public List<TestRf> findList(TestRf testRf) {
		return super.findList(testRf);
	}
	
	public Page<TestRf> findPage(Page<TestRf> page, TestRf testRf) {
		return super.findPage(page, testRf);
	}
	
	@Transactional(readOnly = false)
	public void save(TestRf testRf) {
		super.save(testRf);
	}
	
	@Transactional(readOnly = false)
	public void delete(TestRf testRf) {
		super.delete(testRf);
	}
	
	
	
	
}