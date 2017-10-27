/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.entity.rff;


import com.jeeplus.common.persistence.DataEntity;
import com.jeeplus.common.utils.excel.annotation.ExcelField;

/**
 * rffEntity
 * @author rff
 * @version 2017-08-23
 */
public class TestRf extends DataEntity<TestRf> {
	
	private static final long serialVersionUID = 1L;
	private String uploadFileTest;		// 上传文件
	
	public TestRf() {
		super();
	}

	public TestRf(String id){
		super(id);
	}

	@ExcelField(title="上传文件", align=2, sort=7)
	public String getUploadFileTest() {
		return uploadFileTest;
	}

	public void setUploadFileTest(String uploadFileTest) {
		this.uploadFileTest = uploadFileTest;
	}
	
}