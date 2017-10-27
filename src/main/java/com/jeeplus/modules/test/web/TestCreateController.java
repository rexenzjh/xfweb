/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.web;

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
import com.jeeplus.modules.test.entity.TestCreate;
import com.jeeplus.modules.test.service.TestCreateService;

/**
 * aController
 * @author a
 * @version 2017-08-21
 */
@Controller
@RequestMapping(value = "${adminPath}/test/testCreate")
public class TestCreateController extends BaseController {

	@Autowired
	private TestCreateService testCreateService;
	
	@ModelAttribute
	public TestCreate get(@RequestParam(required=false) String id) {
		TestCreate entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = testCreateService.get(id);
		}
		if (entity == null){
			entity = new TestCreate();
		}
		return entity;
	}
	
	/**
	 * a列表页面
	 */
	@RequiresPermissions("test:testCreate:list")
	@RequestMapping(value = {"list", ""})
	public String list(TestCreate testCreate, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<TestCreate> page = testCreateService.findPage(new Page<TestCreate>(request, response), testCreate); 
		model.addAttribute("page", page);
		return "modules/test/testCreateList";
	}

	/**
	 * 查看，增加，编辑a表单页面
	 */
	@RequiresPermissions(value={"test:testCreate:view","test:testCreate:add","test:testCreate:edit"},logical=Logical.OR)
	@RequestMapping(value = "form")
	public String form(TestCreate testCreate, Model model) {
		model.addAttribute("testCreate", testCreate);
		return "modules/test/testCreateForm";
	}

	/**
	 * 保存a
	 */
	@RequiresPermissions(value={"test:testCreate:add","test:testCreate:edit"},logical=Logical.OR)
	@RequestMapping(value = "save")
	public String save(TestCreate testCreate, Model model, RedirectAttributes redirectAttributes) throws Exception{
		if (!beanValidator(model, testCreate)){
			return form(testCreate, model);
		}
		if(!testCreate.getIsNewRecord()){//编辑表单保存
			TestCreate t = testCreateService.get(testCreate.getId());//从数据库取出记录的值
			MyBeanUtils.copyBeanNotNull2Bean(testCreate, t);//将编辑表单中的非NULL值覆盖数据库记录中的值
			testCreateService.save(t);//保存
		}else{//新增表单保存
			testCreateService.save(testCreate);//保存
		}
		addMessage(redirectAttributes, "保存a成功");
		return "redirect:"+Global.getAdminPath()+"/test/testCreate/?repage";
	}
	
	/**
	 * 删除a
	 */
	@RequiresPermissions("test:testCreate:del")
	@RequestMapping(value = "delete")
	public String delete(TestCreate testCreate, RedirectAttributes redirectAttributes) {
		testCreateService.delete(testCreate);
		addMessage(redirectAttributes, "删除a成功");
		return "redirect:"+Global.getAdminPath()+"/test/testCreate/?repage";
	}
	
	/**
	 * 批量删除a
	 */
	@RequiresPermissions("test:testCreate:del")
	@RequestMapping(value = "deleteAll")
	public String deleteAll(String ids, RedirectAttributes redirectAttributes) {
		String idArray[] =ids.split(",");
		for(String id : idArray){
			testCreateService.delete(testCreateService.get(id));
		}
		addMessage(redirectAttributes, "删除a成功");
		return "redirect:"+Global.getAdminPath()+"/test/testCreate/?repage";
	}
	
	/**
	 * 导出excel文件
	 */
	@RequiresPermissions("test:testCreate:export")
    @RequestMapping(value = "export", method=RequestMethod.POST)
    public String exportFile(TestCreate testCreate, HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes) {
		try {
            String fileName = "a"+DateUtils.getDate("yyyyMMddHHmmss")+".xlsx";
            Page<TestCreate> page = testCreateService.findPage(new Page<TestCreate>(request, response, -1), testCreate);
    		new ExportExcel("a", TestCreate.class).setDataList(page.getList()).write(response, fileName).dispose();
    		return null;
		} catch (Exception e) {
			addMessage(redirectAttributes, "导出a记录失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/testCreate/?repage";
    }

	/**
	 * 导入Excel数据

	 */
	@RequiresPermissions("test:testCreate:import")
    @RequestMapping(value = "import", method=RequestMethod.POST)
    public String importFile(MultipartFile file, RedirectAttributes redirectAttributes) {
		try {
			int successNum = 0;
			int failureNum = 0;
			StringBuilder failureMsg = new StringBuilder();
			ImportExcel ei = new ImportExcel(file, 1, 0);
			List<TestCreate> list = ei.getDataList(TestCreate.class);
			for (TestCreate testCreate : list){
				try{
					testCreateService.save(testCreate);
					successNum++;
				}catch(ConstraintViolationException ex){
					failureNum++;
				}catch (Exception ex) {
					failureNum++;
				}
			}
			if (failureNum>0){
				failureMsg.insert(0, "，失败 "+failureNum+" 条a记录。");
			}
			addMessage(redirectAttributes, "已成功导入 "+successNum+" 条a记录"+failureMsg);
		} catch (Exception e) {
			addMessage(redirectAttributes, "导入a失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/testCreate/?repage";
    }
	
	/**
	 * 下载导入a数据模板
	 */
	@RequiresPermissions("test:testCreate:import")
    @RequestMapping(value = "import/template")
    public String importFileTemplate(HttpServletResponse response, RedirectAttributes redirectAttributes) {
		try {
            String fileName = "a数据导入模板.xlsx";
    		List<TestCreate> list = Lists.newArrayList(); 
    		new ExportExcel("a数据", TestCreate.class, 1).setDataList(list).write(response, fileName).dispose();
    		return null;
		} catch (Exception e) {
			addMessage(redirectAttributes, "导入模板下载失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/testCreate/?repage";
    }
	
	
	

}