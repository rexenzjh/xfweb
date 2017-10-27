<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp" %>
<html>
<head>
    <title>文章管理</title>
    <meta name="decorator" content="default"/>
    <script type="text/javascript">
        function viewComment(href) {
            top.$.jBox.open('iframe:' + href, '查看评论', $(top.document).width() - 220, $(top.document).height() - 120, {
                buttons: {"关闭": true},
                loaded: function (h) {
                    $(".jbox-content", top.document).css("overflow-y", "hidden");
                    $(".nav,.form-actions,[class=btn]", h.find("iframe").contents()).hide();
                    $("body", h.find("iframe").contents()).css("margin", "10px");
                }
            });
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
            <form:form id="searchForm" modelAttribute="article" action="${ctx}/cms/article/" method="post"
                       class="form-inline">
                <input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
                <input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
                <table:sortColumn id="orderBy" name="orderBy" value="${page.orderBy}"
                                  callback="sortOrRefresh();"/><!-- 支持排序 -->
                <div class="form-group">
                    <span>栏目：</span>
                    <sys:treeselect id="category" name="category.id" value="${article.category.id}"
                                    labelName="category.name" labelValue="${article.category.name}"
                                    title="栏目" url="/cms/category/treeData" module="article"
                                    notAllowSelectRoot="false" cssClass="form-control input-sm"/>
                    <span>标题：</span>
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
                <shiro:hasPermission name="cms:article:add">
                    <table:addRow
                            url="${ctx}/cms/article/form?id=${article.id}&category.id=${article.category.id}"
                            title="文章" target="cmsMainFrame"></table:addRow><!-- 增加按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:article:edit">
                    <table:editRow url="${ctx}/cms/article/form" title="文章"
                                   id="contentTable" target="cmsMainFrame"></table:editRow><!-- 编辑按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:article:del">
                    <table:delRow url="${ctx}/cms/article/deleteAll"
                                  id="contentTable"></table:delRow><!-- 删除按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:article:import">
                    <table:importExcel url="${ctx}/cms/article/import"></table:importExcel><!-- 导入按钮 -->
                </shiro:hasPermission>
                <shiro:hasPermission name="cms:article:export">
                    <table:exportExcel url="${ctx}/cms/article/export"></table:exportExcel><!-- 导出按钮 -->
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
            <th class="sort-column hits">点击数</th>
            <th class="sort-column u.name">发布者</th>
            <th class="sort-column updateDate">更新时间</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${page.list}" var="article">
            <tr>
                <td><input type="checkbox" id="${article.id}" class="i-checks"></td>
                <td><a href="#"
                       onclick="openDialogView('查看文章', '${ctx}/cms/article/form?id=${article.id}','800px', '500px')">
                        ${article.category.name}
                </a></td>
                <td>
                        ${article.title}
                </td>
                <td>
                        ${article.weight}
                </td>
                <td>
                        ${article.hits}
                </td>
                <td>
                        ${article.user.name}
                </td>
                <td>
                    <fmt:formatDate value="${article.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
                </td>
                <td>
                    <a href="${pageContext.request.contextPath}${fns:getFrontPath()}/view-${article.category.id}-${article.id}${fns:getUrlSuffix()}"
                       target="_blank" class="btn btn-info btn-xs"><i class="fa fa-search-plus"></i> 访问</a>
                    <shiro:hasPermission name="cms:article:edit">
                        <c:if test="${article.category.allowComment eq '1'}"><shiro:hasPermission
                                name="cms:comment:view">
                            <a href="${ctx}/cms/comment/?module=article&contentId=${article.id}&delFlag=2"
                               onclick="return viewComment(this.href);">评论</a>
                        </shiro:hasPermission></c:if>
                        <a href="#"
                           onclick="openDialog('修改文章', '${ctx}/cms/article/form?id=${article.id}','800px', '700px','cmsMainFrame')"
                           class="btn btn-success btn-xs"><i class="fa fa-edit"></i> 修改</a>
                        <shiro:hasPermission name="cms:article:audit">
                            <a href="${ctx}/cms/article/delete?id=${article.id}${article.delFlag ne 0?'&isRe=true':''}&categoryId=${article.category.id}"
                               onclick="return confirmx('确认要${article.delFlag ne 0?'发布':'删除'}该文章吗？', this.href)"
                               class="btn btn-danger btn-xs"><i
                                    class="fa ${article.delFlag ne 0?'fa-edit':'fa-trash'}"></i> ${article.delFlag ne 0?'发布':'删除'}
                            </a>
                        </shiro:hasPermission>
                    </shiro:hasPermission>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

    <!-- 分页代码 -->
    <table:page page="${page}"></table:page>
</div>

<%--<table id="contentTable"
       class="table table-striped table-bordered table-hover table-condensed dataTables-example dataTable">
    <thead>
    <tr>
        <th class="sort-column category.name">栏目</th>
        <th class="sort-column title">标题</th>
        <th class="sort-column weight">权重</th>
        <th class="sort-column hits">点击数</th>
        <th class="sort-column createBy.name">发布者</th>
        <th class="sort-column createDate">更新时间</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach items="${page.list}" var="article">
        <tr>
            <td><a href="javascript:"
                   onclick="$('#categoryId').val('${article.category.id}');$('#categoryName').val('${article.category.name}');$('#searchForm').submit();return false;">${article.category.name}</a>
            </td>
            <td><a href="${ctx}/cms/article/form?id=${article.id}"
                   title="${article.title}">${fns:abbr(article.title,40)}</a></td>
            <td>${article.weight}</td>
            <td>${article.hits}</td>
            <td>${article.user.name}</td>
            <td><fmt:formatDate value="${article.updateDate}" type="both"/></td>
            <td>
                <a href="${pageContext.request.contextPath}${fns:getFrontPath()}/view-${article.category.id}-${article.id}${fns:getUrlSuffix()}"
                   target="_blank">访问</a>
                <shiro:hasPermission name="cms:article:edit">
                    <c:if test="${article.category.allowComment eq '1'}"><shiro:hasPermission name="cms:comment:view">
                        <a href="${ctx}/cms/comment/?module=article&contentId=${article.id}&delFlag=2"
                           onclick="return viewComment(this.href);">评论</a>
                    </shiro:hasPermission></c:if>
                    <a href="${ctx}/cms/article/form?id=${article.id}">修改</a>
                    <shiro:hasPermission name="cms:article:audit">
                        <a href="${ctx}/cms/article/delete?id=${article.id}${article.delFlag ne 0?'&isRe=true':''}&categoryId=${article.category.id}"
                           onclick="return confirmx('确认要${article.delFlag ne 0?'发布':'删除'}该文章吗？', this.href)">${article.delFlag ne 0?'发布':'删除'}</a>
                    </shiro:hasPermission>
                </shiro:hasPermission>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>--%>
</body>
</html>