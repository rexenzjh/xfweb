/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.entity;


import com.jeeplus.common.persistence.DataEntity;
import com.jeeplus.common.utils.excel.annotation.ExcelField;

/**
 * aEntity
 * @author a
 * @version 2017-08-21
 */
public class TestCreate extends DataEntity<TestCreate> {
	
	private static final long serialVersionUID = 1L;
	private String name;		// 名字
	
	public TestCreate() {
		super();
	}

	public TestCreate(String id){
		super(id);
	}

	@ExcelField(title="名字", align=2, sort=7)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}