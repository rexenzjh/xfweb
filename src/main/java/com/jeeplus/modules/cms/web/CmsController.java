/**
 * Copyright &copy; 2016  <a href="http://www.rexen.com.cn">rexen</a>
 */
package com.jeeplus.modules.cms.web;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.jeeplus.common.web.BaseController;
import com.jeeplus.modules.cms.entity.Category;
import com.jeeplus.modules.cms.service.CategoryService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * 内容管理Controller
 *
 * @author ThinkGem
 * @version 2013-4-21
 */
@Controller
@RequestMapping(value = "${adminPath}/cms")
public class CmsController extends BaseController {

    @Autowired
    private CategoryService categoryService;

    @RequiresPermissions("cms:view")
    @RequestMapping(value = "")
    public String index() {
        return "modules/cms/cmsIndex";
    }

    @RequiresPermissions("cms:view")
    @RequestMapping(value = "tree")
    public String tree(Model model) {
        model.addAttribute("categoryList", categoryService.findByUser(true, null));
        return "modules/cms/cmsTree";
    }

    @RequiresPermissions("cms:view")
    @RequestMapping(value = "none")
    public String none() {
        return "modules/cms/cmsNone";
    }

    /**
     * 获取栏目JSON数据。
     *
     * @param extId 排除的ID
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "treeData")
    public List<Map<String, Object>> treeData(@RequestParam(required = false) String extId) {
        List<Map<String, Object>> mapList = Lists.newArrayList();
        List<Category> list = categoryService.findByUser(true, null);
        for (int i = 0; i < list.size(); i++) {
            Category c = list.get(i);
            /*if ((StringUtils.isBlank(extId) || (extId != null && !extId.equals(c.getId())
                    && c.getParentIds().indexOf("," + extId + ",") == -1))) {
                Map<String, Object> map = Maps.newHashMap();
                map.put("id", c.getId());
                map.put("pId", c.getParentId());
                map.put("pIds", c.getParentIds());
                map.put("name", c.getName());
                map.put("module", c.getModule());
                mapList.add(map);
            }*/
            Map<String, Object> map = Maps.newHashMap();
            map.put("id", c.getId());
            map.put("pId", c.getParentId());
            map.put("pIds", c.getParentIds());
            map.put("name", c.getName());
            map.put("module", c.getModule());
            mapList.add(map);
        }
        return mapList;
    }
}
