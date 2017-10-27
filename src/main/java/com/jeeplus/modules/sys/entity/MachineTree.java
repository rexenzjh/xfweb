/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.sys.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.validation.constraints.NotNull;

import com.jeeplus.common.persistence.TreeEntity;

/**
 * 建筑物设备Entity
 * @author 张金辉
 * @version 2017-08-19
 */
public class MachineTree extends TreeEntity<MachineTree> {
	
	private static final long serialVersionUID = 1L;
	private MachineTree parent;		// 父级编号
	private String parentIds;		// 所有父级编号
	private String name;		// 名称
	private String code;		// 编码
	private String address;		// 地址
	private String onlineFlag;		// 在线标识
	private Integer sort;		// 排序
	
	public MachineTree() {
		super();
	}

	public MachineTree(String id){
		super(id);
	}

	@JsonBackReference
	@NotNull(message="父级编号不能为空")
	public MachineTree getParent() {
		return parent;
	}

	public void setParent(MachineTree parent) {
		this.parent = parent;
	}
	
	public String getParentIds() {
		return parentIds;
	}

	public void setParentIds(String parentIds) {
		this.parentIds = parentIds;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getOnlineFlag() {
		return onlineFlag;
	}

	public void setOnlineFlag(String onlineFlag) {
		this.onlineFlag = onlineFlag;
	}
	
	@NotNull(message="排序不能为空")
	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}
	
	public String getParentId() {
		return parent != null && parent.getId() != null ? parent.getId() : "0";
	}
}