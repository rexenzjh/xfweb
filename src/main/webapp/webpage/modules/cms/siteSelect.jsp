<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp" %>
<html>
<head>
    <title>站点切换</title>
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
<body class="gray-bg">
<%--<ul class="nav nav-tabs">
    <li class="active"><a href="${ctx}/cms/site/select">站点切换</a></li>
</ul>--%>
<div class="wrapper wrapper-content">
    <div class="ibox">
        <div class="ibox-title">
            <h5>站点切换 </h5>
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

            <!-- 表格 -->
            <table id="contentTable"
                   class="table table-striped table-bordered table-hover table-condensed dataTables-example dataTable">
                <thead>
                <tr>
                    <th>名称</th>
                    <shiro:hasPermission name="cms:view">
                        <th>操作</th>
                    </shiro:hasPermission>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${fnc:getSiteList()}" var="site">
                    <tr>
                        <td>
                            <a href="${ctx}/cms/site/select?id=${site.id}">${site.name}</a> ${fnc:getCurrentSiteId() eq site.id ? ' <font color="red">[当前站点]</font>' : ''}
                        </td>
                        <shiro:hasPermission name="cms:view">
                            <td>
                                <a href="${ctx}/cms/site/select?id=${site.id}">切换</a>
                            </td>
                        </shiro:hasPermission>
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

<br/>
<br/>
</body>
</html>