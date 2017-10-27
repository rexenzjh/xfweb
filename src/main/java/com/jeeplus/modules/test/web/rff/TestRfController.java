/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.test.web.rff;

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
import com.jeeplus.modules.test.entity.rff.TestRf;
import com.jeeplus.modules.test.service.rff.TestRfService;

/**
 * rffController
 * @author rff
 * @version 2017-08-23
 */
@Controller
@RequestMapping(value = "${adminPath}/test/rff/testRf")
public class TestRfController extends BaseController {

	@Autowired
	private TestRfService testRfService;
	
	@ModelAttribute
	public TestRf get(@RequestParam(required=false) String id) {
		TestRf entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = testRfService.get(id);
		}
		if (entity == null){
			entity = new TestRf();
		}
		return entity;
	}
	
	/**
	 * rff列表页面
	 */
	@RequiresPermissions("test:rff:testRf:list")
	@RequestMapping(value = {"list", ""})
	public String list(TestRf testRf, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<TestRf> page = testRfService.findPage(new Page<TestRf>(request, response), testRf); 
		model.addAttribute("page", page);
		return "modules/test/rff/testRfList";
	}

	/**
	 * 查看，增加，编辑rff表单页面
	 */
	@RequiresPermissions(value={"test:rff:testRf:view","test:rff:testRf:add","test:rff:testRf:edit"},logical=Logical.OR)
	@RequestMapping(value = "form")
	public String form(TestRf testRf, Model model) {
		model.addAttribute("testRf", testRf);
		return "modules/test/rff/testRfForm";
	}

	/**
	 * 保存rff
	 */
	@RequiresPermissions(value={"test:rff:testRf:add","test:rff:testRf:edit"},logical=Logical.OR)
	@RequestMapping(value = "save")
	public String save(TestRf testRf, Model model, RedirectAttributes redirectAttributes) throws Exception{
		if (!beanValidator(model, testRf)){
			return form(testRf, model);
		}
		if(!testRf.getIsNewRecord()){//编辑表单保存
			TestRf t = testRfService.get(testRf.getId());//从数据库取出记录的值
			MyBeanUtils.copyBeanNotNull2Bean(testRf, t);//将编辑表单中的非NULL值覆盖数据库记录中的值
			testRfService.save(t);//保存
		}else{//新增表单保存
			testRfService.save(testRf);//保存
		}
		addMessage(redirectAttributes, "保存rff成功");
		return "redirect:"+Global.getAdminPath()+"/test/rff/testRf/?repage";
	}
	
	/**
	 * 删除rff
	 */
	@RequiresPermissions("test:rff:testRf:del")
	@RequestMapping(value = "delete")
	public String delete(TestRf testRf, RedirectAttributes redirectAttributes) {
		testRfService.delete(testRf);
		addMessage(redirectAttributes, "删除rff成功");
		return "redirect:"+Global.getAdminPath()+"/test/rff/testRf/?repage";
	}
	
	/**
	 * 批量删除rff
	 */
	@RequiresPermissions("test:rff:testRf:del")
	@RequestMapping(value = "deleteAll")
	public String deleteAll(String ids, RedirectAttributes redirectAttributes) {
		String idArray[] =ids.split(",");
		for(String id : idArray){
			testRfService.delete(testRfService.get(id));
		}
		addMessage(redirectAttributes, "删除rff成功");
		return "redirect:"+Global.getAdminPath()+"/test/rff/testRf/?repage";
	}
	
	/**
	 * 导出excel文件
	 */
	@RequiresPermissions("test:rff:testRf:export")
    @RequestMapping(value = "export", method=RequestMethod.POST)
    public String exportFile(TestRf testRf, HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes) {
		try {
            String fileName = "rff"+DateUtils.getDate("yyyyMMddHHmmss")+".xlsx";
            Page<TestRf> page = testRfService.findPage(new Page<TestRf>(request, response, -1), testRf);
    		new ExportExcel("rff", TestRf.class).setDataList(page.getList()).write(response, fileName).dispose();
    		return null;
		} catch (Exception e) {
			addMessage(redirectAttributes, "导出rff记录失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/rff/testRf/?repage";
    }

	/**
	 * 导入Excel数据

	 */
	@RequiresPermissions("test:rff:testRf:import")
    @RequestMapping(value = "import", method=RequestMethod.POST)
    public String importFile(MultipartFile file, RedirectAttributes redirectAttributes) {
		try {
			int successNum = 0;
			int failureNum = 0;
			StringBuilder failureMsg = new StringBuilder();
			ImportExcel ei = new ImportExcel(file, 1, 0);
			List<TestRf> list = ei.getDataList(TestRf.class);
			for (TestRf testRf : list){
				try{
					testRfService.save(testRf);
					successNum++;
				}catch(ConstraintViolationException ex){
					failureNum++;
				}catch (Exception ex) {
					failureNum++;
				}
			}
			if (failureNum>0){
				failureMsg.insert(0, "，失败 "+failureNum+" 条rff记录。");
			}
			addMessage(redirectAttributes, "已成功导入 "+successNum+" 条rff记录"+failureMsg);
		} catch (Exception e) {
			addMessage(redirectAttributes, "导入rff失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/rff/testRf/?repage";
    }
	
	/**
	 * 下载导入rff数据模板
	 */
	@RequiresPermissions("test:rff:testRf:import")
    @RequestMapping(value = "import/template")
    public String importFileTemplate(HttpServletResponse response, RedirectAttributes redirectAttributes) {
		try {
            String fileName = "rff数据导入模板.xlsx";
    		List<TestRf> list = Lists.newArrayList(); 
    		new ExportExcel("rff数据", TestRf.class, 1).setDataList(list).write(response, fileName).dispose();
    		return null;
		} catch (Exception e) {
			addMessage(redirectAttributes, "导入模板下载失败！失败信息："+e.getMessage());
		}
		return "redirect:"+Global.getAdminPath()+"/test/rff/testRf/?repage";
    }
	
	
	

}