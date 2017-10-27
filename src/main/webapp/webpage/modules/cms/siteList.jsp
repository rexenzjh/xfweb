<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp" %>
<html>
<head>
    <title>站点管理管理</title>
    <meta name="decorator" content="default"/>
    <script type="text/javascript">
        $(document).ready(function () {
        });
    </script>
</head>
<body class="gray-bg">
<div class="wrapper wrapper-content">
    <div class="ibox">
        <div class="ibox-title">
            <h5>站点列表 </h5>
            <div class="ibox-tools">
                <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                </a>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-wrench"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li><a href="#">选项1</a>
                    </li>
                    <li><a href="#">选项2</a>
                    </li>
                </ul>
                <a class="close-link">
                    <i class="fa fa-times"></i>
                </a>
            </div>
        </div>

        <div class="ibox-content">
            <sys:message content="${message}"/>

            <!--查询条件-->
            <div class="row">
                <div class="col-sm-12">
                    <form:form id="searchForm" modelAttribute="site" action="${ctx}/cms/site/" method="post"
                               class="form-inline">
                        <input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
                        <input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
                        <table:sortColumn id="orderBy" name="orderBy" value="${page.orderBy}"
                                          callback="sortOrRefresh();"/><!-- 支持排序 -->
                        <div class="form-group">
                            <span>站点名称：</span>
                            <form:input path="name" htmlEscape="false" maxlength="100" class=" form-control input-sm"/>
                            <span>删除标记：</span>
                            <form:radiobuttons class="i-checks" path="delFlag" items="${fns:getDictList('del_flag')}"
                                               itemLabel="label" itemValue="value" htmlEscape="false"/>
                        </div>
                    </form:form>
                    <br/>
                </div>
            </div>

            <!-- 工具栏 -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="pull-left">
                        <shiro:hasPermission name="cms:site:add">
                            <table:addRow url="${ctx}/cms/site/form" title="站点管理"></table:addRow><!-- 增加按钮 -->
                        </shiro:hasPermission>
                        <shiro:hasPermission name="cms:site:edit">
                            <table:editRow url="${ctx}/cms/site/form" title="站点管理"
                                           id="contentTable"></table:editRow><!-- 编辑按钮 -->
                        </shiro:hasPermission>
                        <shiro:hasPermission name="cms:site:del">
                            <table:delRow url="${ctx}/cms/site/deleteAll" id="contentTable"></table:delRow><!-- 删除按钮 -->
                        </shiro:hasPermission>
                        <shiro:hasPermission name="cms:site:import">
                            <table:importExcel url="${ctx}/cms/site/import"></table:importExcel><!-- 导入按钮 -->
                        </shiro:hasPermission>
                        <shiro:hasPermission name="cms:site:export">
                            <table:exportExcel url="${ctx}/cms/site/export"></table:exportExcel><!-- 导出按钮 -->
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
                    <th class="sort-column name">站点名称</th>
                    <th class="sort-column title">站点标题</th>
                    <th class="sort-column description">描述</th>
                    <th class="sort-column keywords">关键字</th>
                    <th class="sort-column theme">主题</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${page.list}" var="site">
                    <tr>
                        <td><input type="checkbox" id="${site.id}" class="i-checks"></td>
                        <td><a href="#"
                               onclick="openDialogView('查看站点管理', '${ctx}/cms/site/form?id=${site.id}','800px', '500px')">
                                ${site.name}
                        </a></td>
                        <td>
                                ${site.title}
                        </td>
                        <td>
                                ${site.description}
                        </td>
                        <td>
                                ${site.keywords}
                        </td>
                        <td>
                                ${site.theme}
                        </td>
                        <td>
                            <%--<shiro:hasPermission name="cms:site:view">
                                <a href="#"
                                   onclick="openDialogView('查看站点管理', '${ctx}/cms/site/form?id=${site.id}','800px', '500px')"
                                   class="btn btn-info btn-xs"><i class="fa fa-search-plus"></i> 查看</a>
                            </shiro:hasPermission>--%>
                            <shiro:hasPermission name="cms:site:edit">
                                <a href="#"
                                   onclick="openDialog('修改站点管理', '${ctx}/cms/site/form?id=${site.id}','800px', '500px')"
                                   class="btn btn-success btn-xs"><i class="fa fa-edit"></i> 修改</a>
                            </shiro:hasPermission>
                            <shiro:hasPermission name="cms:site:del">
                                <a href="${ctx}/cms/site/delete?id=${site.id}"
                                   onclick="return confirmx('确认要删除该站点管理吗？', this.href)" class="btn btn-danger btn-xs"><i
                                        class="fa fa-trash"></i> 删除</a>
                            </shiro:hasPermission>
                        </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>

            <!-- 分页代码 -->
            <table:page page="${page}"></table:page>
            <br/>
            <br/>
        </div>
    </div>
</div>
</body>
</html>