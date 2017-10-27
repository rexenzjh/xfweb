/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.jeeplus.modules.sys.web;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.jeeplus.common.config.Global;
import com.jeeplus.common.utils.MyBeanUtils;
import com.jeeplus.common.utils.StringUtils;
import com.jeeplus.common.web.BaseController;
import com.jeeplus.modules.sys.entity.MachineTree;
import com.jeeplus.modules.sys.service.MachineTreeService;
import org.apache.shiro.authz.annotation.Logical;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/**
 * 建筑物设备Controller
 * @author 张金辉
 * @version 2017-08-19
 */
@Controller
@RequestMapping(value = "${adminPath}/sys/machineTree")
public class MachineTreeController extends BaseController {

	@Autowired
	private MachineTreeService machineTreeService;
	
	@ModelAttribute
	public MachineTree get(@RequestParam(required=false) String id) {
		MachineTree entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = machineTreeService.get(id);
		}
		if (entity == null){
			entity = new MachineTree();
		}
		return entity;
	}
	
	/**
	 * 信息列表页面
	 */
	@RequiresPermissions("sys:machineTree:list")
	@RequestMapping(value = {"list", ""})
	public String list(MachineTree machineTree, HttpServletRequest request, HttpServletResponse response, Model model) {
		List<MachineTree> list = machineTreeService.findList(machineTree); 
		model.addAttribute("list", list);
		return "modules/sys/machineTreeList";
	}

	@RequiresPermissions("sys:machineTree:add")
	@RequestMapping(value = {"addAreaRect"})
	public String addAreaRect(HttpServletRequest request, HttpServletResponse response, Model model) {

		return "modules/echarts/rect";
	}

	/**
	 * 查看，增加，编辑信息表单页面
	 */
	@RequiresPermissions(value={"sys:machineTree:view","sys:machineTree:add","sys:machineTree:edit"},logical=Logical.OR)
	@RequestMapping(value = "form")
	public String form(MachineTree machineTree, Model model) {
		if (machineTree.getParent()!=null && StringUtils.isNotBlank(machineTree.getParent().getId())){
			machineTree.setParent(machineTreeService.get(machineTree.getParent().getId()));
			// 获取排序号，最末节点排序号+30
			if (StringUtils.isBlank(machineTree.getId())){
				MachineTree machineTreeChild = new MachineTree();
				machineTreeChild.setParent(new MachineTree(machineTree.getParent().getId()));
				List<MachineTree> list = machineTreeService.findList(machineTree); 
				if (list.size() > 0){
					machineTree.setSort(list.get(list.size()-1).getSort());
					if (machineTree.getSort() != null){
						machineTree.setSort(machineTree.getSort() + 30);
					}
				}
			}
		}
		if (machineTree.getSort() == null){
			machineTree.setSort(30);
		}
		model.addAttribute("machineTree", machineTree);
		return "modules/sys/machineTreeForm";
	}

	/**
	 * 保存信息
	 */
	@RequiresPermissions(value={"sys:machineTree:add","sys:machineTree:edit"},logical=Logical.OR)
	@RequestMapping(value = "save")
	public String save(MachineTree machineTree, Model model, RedirectAttributes redirectAttributes) throws Exception{
		if (!beanValidator(model, machineTree)){
			return form(machineTree, model);
		}
		if(!machineTree.getIsNewRecord()){//编辑表单保存
			MachineTree t = machineTreeService.get(machineTree.getId());//从数据库取出记录的值
			MyBeanUtils.copyBeanNotNull2Bean(machineTree, t);//将编辑表单中的非NULL值覆盖数据库记录中的值
			machineTreeService.save(t);//保存
		}else{//新增表单保存
			machineTreeService.save(machineTree);//保存
		}
		addMessage(redirectAttributes, "保存信息成功");
		return "redirect:"+Global.getAdminPath()+"/sys/machineTree/?repage";
	}
	
	/**
	 * 删除信息
	 */
	@RequiresPermissions("sys:machineTree:del")
	@RequestMapping(value = "delete")
	public String delete(MachineTree machineTree, RedirectAttributes redirectAttributes) {
		machineTreeService.delete(machineTree);
		addMessage(redirectAttributes, "删除信息成功");
		return "redirect:"+Global.getAdminPath()+"/sys/machineTree/?repage";
	}

	@RequiresPermissions("user")
	@ResponseBody
	@RequestMapping(value = "treeData")
	public List<Map<String, Object>> treeData(@RequestParam(required=false) String extId, HttpServletResponse response) {
		List<Map<String, Object>> mapList = Lists.newArrayList();
		List<MachineTree> list = machineTreeService.findList(new MachineTree());
		for (int i=0; i<list.size(); i++){
			MachineTree e = list.get(i);
			if (StringUtils.isBlank(extId) || (extId!=null && !extId.equals(e.getId()) && e.getParentIds().indexOf(","+extId+",")==-1)){
				Map<String, Object> map = Maps.newHashMap();
				map.put("id", e.getId());
				map.put("pId", e.getParentId());
				map.put("name", e.getName());
				mapList.add(map);
			}
		}
		return mapList;
	}
	
}