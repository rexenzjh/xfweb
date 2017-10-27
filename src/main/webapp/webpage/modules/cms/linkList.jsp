<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp" %>
<html>
<head>
    <title>链接管理</title>
    <meta name="decorator" content="default"/>
    <script type="text/javascript">
        function page(n, s) {
            $("#pageNo").val(n);
            $("#pageSize").val(s);
            $("#searchForm").submit();
            return false;
        }
    </script>
</head>
<body>
<div class="wrapper wrapper-content">
    <sys:message content="${message}"/>
    <!--查询条件-->
    <div class="row">
        <div class="col-sm-12">
            <form:form id="searchForm" modelAttribute="link" action="${ctx}/cms/link/" method="post"
                       class="form-inline">
                <input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
                <input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
                <table:sortColumn id="orderBy" name="orderBy" value="${page.orderBy}"
                                  callback="sortOrRefresh();"/><!-- 支持排序 -->
                <div class="form-group">
                    <span>栏目：</span>
                    <sys:treeselect id="category" name="category.id" value="${link.category.id}"
                                    labelName="category.name" labelValue="${link.category.name}"
                                    title="栏目" url="/cms/category/treeData" module="link"
                                    notAllowSelectRoot="false" cssClass="form-control input-sm"/>
                    <span>名称：</span>
                    <form:input path="title" htmlEscape="false" maxlength="50" class=" form-control input-sm"/>
                    &nbsp;&nbsp;
                    <span>状态：</span><form:radiobuttons class="i-checks" onclick="$('#searchForm').submit();"
                                                       path="delFlag"
                                                       items="${fns:getDictList('cms_del_flag')}"
                                                       itemLabel="label"
                                                       itemValue="value"
                                                       htmlEscape="false"/>
                </div>
            </form:form>
            <br/>
        </div>
    </div>

    <!-- 工具栏 -->
    <div class="row">
        <div class="col-sm-12">
            <div class="pull-left">
                <shiro:hasPermission name="cms:link:add">
                    <table:addRow
                            url="${ctx}/cms/link/form?id=${link.id}&category.id=${link.category.id}"
                            title="文章" target="cmsMainFrame"></table:addRow><!-- 增加按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:link:edit">
                    <table:editRow url="${ctx}/cms/link/form" title="文章"
                                   id="contentTable" target="cmsMainFrame"></table:editRow><!-- 编辑按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:link:del">
                    <table:delRow url="${ctx}/cms/link/deleteAll"
                                  id="contentTable"></table:delRow><!-- 删除按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:link:import">
                    <table:importExcel url="${ctx}/cms/link/import"></table:importExcel><!-- 导入按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:link:export">
                    <table:exportExcel url="${ctx}/cms/link/export"></table:exportExcel><!-- 导出按钮 -->
                </shiro:hasPermission>
                <button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="left"
                        onclick="sortOrRefresh()" title="刷新"><i class="glyphicon glyphicon-repeat"></i> 刷新
                </button>

            </div>
            <div class="pull-right">
                <button class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="search()"><i
                        class="fa fa-search"></i> 查询
                </button>
                <button class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="reset()"><i
                        class="fa fa-refresh"></i> 重置
                </button>
            </div>
        </div>
    </div>

    <!-- 表格 -->
    <table id="contentTable"
           class="table table-striped table-bordered table-hover table-condensed dataTables-example dataTable">
        <thead>
        <tr>
            <th><input type="checkbox" class="i-checks"></th>
            <th>栏目</th>
            <th class="sort-column title">标题</th>
            <th class="sort-column weight">权重</th>
            <th class="sort-column u.name">发布者</th>
            <th class="sort-column updateDate">更新时间</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${page.list}" var="link">
            <tr>
                <td><input type="checkbox" id="${link.id}" class="i-checks"></td>
                <td><a href="#"
                       onclick="openDialogView('查看文章', '${ctx}/cms/link/form?id=${link.id}','800px', '500px')">
                        ${link.category.name}
                </a></td>
                <td>
                        ${link.title}
                </td>
                <td>
                        ${link.weight}
                </td>
                <td>
                        ${link.user.name}
                </td>
                <td>
                    <fmt:formatDate value="${link.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
                </td>
                <td>
                    <shiro:hasPermission name="cms:link:edit">
                        <a href="#"
                           onclick="openDialog('修改链接', '${ctx}/cms/link/form?id=${link.id}','800px', '700px','cmsMainFrame')"
                           class="btn btn-success btn-xs"><i class="fa fa-edit"></i> 修改</a>
                        <a href="${ctx}/cms/link/delete?id=${link.id}${link.delFlag ne 0?'&isRe=true':''}&categoryId=${link.category.id}"
                           onclick="return confirmx('确认要${link.delFlag ne 0?'发布':'删除'}该文章吗？', this.href)"
                           class="btn btn-danger btn-xs"><i
                                class="fa ${link.delFlag ne 0?'fa-edit':'fa-trash'}"></i> ${link.delFlag ne 0?'发布':'删除'}
                        </a>
                    </shiro:hasPermission>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

    <!-- 分页代码 -->
    <table:page page="${page}"></table:page>
</div>
</body>
</html>