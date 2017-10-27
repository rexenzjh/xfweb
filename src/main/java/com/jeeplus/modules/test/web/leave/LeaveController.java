/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.web.leave;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolationException;

import org.apache.shiro.authz.annotation.Logical;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.google.common.collect.Lists;
import com.jeeplus.common.utils.DateUtils;
import com.jeeplus.common.utils.MyBeanUtils;
import com.jeeplus.common.config.Global;
import com.jeeplus.common.persistence.Page;
import com.jeeplus.common.web.BaseController;
import com.jeeplus.common.utils.StringUtils;
import com.jeeplus.common.utils.excel.ExportExcel;
import com.jeeplus.common.utils.excel.ImportExcel;
import com.jeeplus.modules.test.entity.leave.Leave;
import com.jeeplus.modules.test.service.leave.LeaveService;

/**
 * 请假Controller
 * @author jiangwenjie
 * @version 2017-08-21
 */
@Controller
@RequestMapping(value = "${adminPath}/test/leave/leave")
public class LeaveController extends BaseController {

	@Autowired
	private LeaveService leaveService;
	
	@ModelAttribute
	public Leave get(@RequestParam(required=false) String id) {
		Leave entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = leaveService.get(id);
		}
		if (entity == null){
			entity = new Leave();
		}
		return entity;
	}
	
	/**
	 * 请假单列表页面
	 */
	@RequiresPermissions("test:leave:leave:list")
	@RequestMapping(value = {"list", ""})
	public String list(Leave leave, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<Leave> page = leaveService.findPage(new Page<Leave>(request, response), leave); 
		model.addAttribute("page", page);
		return "modules/test/leave/leaveList";
	}

	/**
	 * 查看，增加，编辑请假单表单页面
	 */
	@RequiresPermissions(value={"test:leave:leave:view","test:leave:leave:add","test:leave:leave:edit"},logical=Logical.OR)
	@RequestMapping(value = "form")
	public String form(Leave leave, Model model) {
		model.addAttribute("leave", leave);
		return "modules/test/leave/leaveForm";
	}

	/**
	 * 保存请假单
	 */
	@RequiresPermissions(value={"test:leave:leave:add","test:leave:leave:edit"},logical=Logical.OR)
	@RequestMapping(value = "save")
	public String save(Leave leave, Model model, RedirectAttributes redirectAttributes) throws Exception{
		if (!beanValidator(model, leave)){
			return form(leave, model);
		}
		if(!leave.getIsNewRecord()){//编辑表单保存
			Leave t = leaveService.get(leave.getId());//从数据库取出记录的值
			MyBeanUtils.copyBeanNotNull2Bean(leave, t);//将编辑表单中的非NULL值覆盖数据库记录中的值
			leaveService.save(t);//保存
		}else{//新增表单保存
			leaveService.save(leave);//保存
		}
		addMessage(redirectAttributes, "保存请假单成功");
		return "redirect:"+Global.getAdminPath()+"/test/leave/leave/?repage";
	}
	
	/**
	 * 删除请假单
	 */
	@RequiresPermissions("test:leave:leave:del")
	@RequestMapping(value = "delete")
	public String delete(Leave leave, RedirectAttributes redirectAttributes) {
		leaveService.delete(leave);
		addMessage(redirectAttributes, "删除请假单成功");
		return "redirect:"+Global.getAdminPath()+"/test/leave/leave/?repage";
	}
	
	/**
	 * 批量删除请假单
	 */
	@RequiresPermissions("test:leave:leave:del")
	@RequestMapping(value = "deleteAll")
	public String deleteAll(String ids, RedirectAttributes redirectAttributes) {
		String idArray[] =ids.split(",");
		for(String id : idArray){
			leaveService.delete(leaveService.get(id));
		}
		addMessage(redirectAttributes, "删除请假单成功");
		return "redirect:"+Global.getAdminPath()+"/test/leave/leave/?repage";
	}
	
	/**
	 * 导出excel文件
	 */
	@RequiresPermissions("test:leave:leave:export")
    @RequestMapping(value = "export", method=RequestMethod.POST)
    public String exportFile(Leave leave, HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes) {
		try {
            String fileName = "请假单"+DateUtils.getDate("yyyyMMddHHmmss")+".xlsx";
            Page<Leave> page = leaveService.findPage(new Page<Leave>(request, response, -1), leave);
    		new ExportExcel("请假单", Leave.class).setDataList(page.getList()).write(response, fileName).dispose();
    		return null;
		} catch (Exception e) {
			addMessage(redirectAttributes, "导出请假单记录失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/leave/leave/?repage";
    }

	/**
	 * 导入Excel数据

	 */
	@RequiresPermissions("test:leave:leave:import")
    @RequestMapping(value = "import", method=RequestMethod.POST)
    public String importFile(MultipartFile file, RedirectAttributes redirectAttributes) {
		try {
			int successNum = 0;
			int failureNum = 0;
			StringBuilder failureMsg = new StringBuilder();
			ImportExcel ei = new ImportExcel(file, 1, 0);
			List<Leave> list = ei.getDataList(Leave.class);
			for (Leave leave : list){
				try{
					leaveService.save(leave);
					successNum++;
				}catch(ConstraintViolationException ex){
					failureNum++;
				}catch (Exception ex) {
					failureNum++;
				}
			}
			if (failureNum>0){
				failureMsg.insert(0, "，失败 "+failureNum+" 条请假单记录。");
			}
			addMessage(redirectAttributes, "已成功导入 "+successNum+" 条请假单记录"+failureMsg);
		} catch (Exception e) {
			addMessage(redirectAttributes, "导入请假单失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/leave/leave/?repage";
    }
	
	/**
	 * 下载导入请假单数据模板
	 */
	@RequiresPermissions("test:leave:leave:import")
    @RequestMapping(value = "import/template")
    public String importFileTemplate(HttpServletResponse response, RedirectAttributes redirectAttributes) {
		try {
            String fileName = "请假单数据导入模板.xlsx";
    		List<Leave> list = Lists.newArrayList(); 
    		new ExportExcel("请假单数据", Leave.class, 1).setDataList(list).write(response, fileName).dispose();
    		return null;
		} catch (Exception e) {
			addMessage(redirectAttributes, "导入模板下载失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/leave/leave/?repage";
    }
	
	
	

}