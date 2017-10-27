/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.entity.leave;

import javax.validation.constraints.NotNull;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

import com.jeeplus.common.persistence.DataEntity;
import com.jeeplus.common.utils.excel.annotation.ExcelField;

/**
 * 请假Entity
 * @author jiangwenjie
 * @version 2017-08-21
 */
public class Leave extends DataEntity<Leave> {
	
	private static final long serialVersionUID = 1L;
	private String procInsId;		// 流程实例ID
	private String leaveType;		// 假期类型
	private Integer leaveDay;		// 时间大小
	private String dayType;		// 时间类型，0天，1小时
	private Date beginDate;		// 假期开始时间
	
	public Leave() {
		super();
	}

	public Leave(String id){
		super(id);
	}

	@ExcelField(title="流程实例ID", align=2, sort=1)
	public String getProcInsId() {
		return procInsId;
	}

	public void setProcInsId(String procInsId) {
		this.procInsId = procInsId;
	}
	
	@ExcelField(title="假期类型", align=2, sort=8)
	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}
	
	@NotNull(message="时间大小不能为空")
	@ExcelField(title="时间大小", align=2, sort=9)
	public Integer getLeaveDay() {
		return leaveDay;
	}

	public void setLeaveDay(Integer leaveDay) {
		this.leaveDay = leaveDay;
	}
	
	@ExcelField(title="时间类型，0天，1小时", align=2, sort=10)
	public String getDayType() {
		return dayType;
	}

	public void setDayType(String dayType) {
		this.dayType = dayType;
	}
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@ExcelField(title="假期开始时间", align=2, sort=11)
	public Date getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}
	
}