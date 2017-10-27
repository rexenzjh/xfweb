<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp" %>
<html>
<head>
    <title>信息量统计</title>
    <meta name="decorator" content="default"/>
    <script type="text/javascript">
        function autoRowSpan(tb, row, col) {
            var lastValue = "", value = "", pos = 1;
            for (var i = row; i < tb.rows.length; i++) {
                value = tb.rows[i].cells[col].innerText;
                if (lastValue == value) {
                    tb.rows[i].deleteCell(col);
                    tb.rows[i - pos].cells[col].rowSpan = tb.rows[i - pos].cells[col].rowSpan + 1;
                    pos++;
                } else {
                    lastValue = value;
                    pos = 1;
                }
            }
        }
        $(document).ready(function () {
            autoRowSpan(contentTable, 0, 0);
            $("td,th").css({"text-align": "center", "vertical-align": "middle"});
            laydate({
                elem: '#beginDate', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
                event: 'focus' //响应事件。如果没有传入event，则按照默认的click
            });
            laydate({
                elem: '#endDate', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
                event: 'focus' //响应事件。如果没有传入event，则按照默认的click
            });
        });
    </script>
</head>
<body class="gray-bg">
<%--<ul class="nav nav-tabs">
    <li class="active"><a href="${ctx}/cms/stats/article">信息量统计</a></li>
</ul>--%>
<div class="wrapper wrapper-content">
    <div class="ibox">
        <div class="ibox-title">
            <h5>信息量统计 </h5>
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
                    <form:form id="searchForm" modelAttribute="article" action="${ctx}/cms/stats/article"
                               method="post" class="form-inline">
                        <input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
                        <input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
                        <div class="form-group">
                            <span>归属栏目：</span><sys:treeselect id="category" name="categoryId" value="${paramMap.id}"
                                                              labelName="categoryName" labelValue="${paramMap.name}"
                                                              title="栏目" url="/cms/category/treeData" module="article"
                                                              cssClass="form-control input-sm" allowClear="true"/>
                            <span>归属机构：</span><sys:treeselect id="office" name="officeId" value="${paramMap.office.id}"
                                                              labelName="officeName"
                                                              labelValue="${paramMap.office.name}"
                                                              title="机构" url="/sys/office/treeData"
                                                              cssClass="form-control input-sm"
                                                              allowClear="true"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>开始日期：</span><input id="beginDate" name="beginDate" type="text"
                                                     maxlength="20"
                                                     class="laydate-icon form-control layer-date input-sm"
                                                     value="${paramMap.beginDate}"/>
                            <span>结束日期：</span><input id="endDate" name="endDate" type="text"
                                                     maxlength="20"
                                                     class="laydate-icon form-control layer-date input-sm"
                                                     value="${paramMap.endDate}"/>&nbsp;&nbsp;
                        </div>
                        <div class="pull-right">
                            <button class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="search()"><i
                                    class="fa fa-search"></i> 查询
                            </button>
                            <button class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="reset()"><i
                                    class="fa fa-refresh"></i> 重置
                            </button>
                        </div>
                    </form:form>
                    <br/>
                </div>
            </div>

            <!-- 表格 -->
            <table id="contentTable"
                   class="table table-striped table-bordered table-hover table-condensed dataTables-example dataTable">
                <thead>
                <tr>
                    <th>父级栏目</th>
                    <th>栏目名称</th>
                    <th>信息量</th>
                    <th>点击量</th>
                    <th>最后更新时间</th>
                    <th>归属机构</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${list}" var="stats">
                    <tr>
                        <td><a href="javascript:"
                               onclick="$('#categoryId').val('${stats.parent.id}');$('#categoryName').val('${stats.parent.name}');$('#searchForm').submit();return false;">${stats.parent.name}</a>
                        </td>
                        <td><a href="javascript:"
                               onclick="$('#categoryId').val('${stats.id}');$('#categoryName').val('${stats.name}');$('#searchForm').submit();return false;">${stats.name}</a>
                        </td>
                        <td>${stats.cnt}</td>
                        <td>${stats.hits}</td>
                        <td><fmt:formatDate value="${stats.updateDate}" type="both"/></td>
                        <td><a href="javascript:"
                               onclick="$('#officeId').val('${stats.office.id}');$('#officeName').val('${stats.office.name}');$('#searchForm').submit();return false;">${stats.office.name}</a>
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
<%--<form:form id="searchForm" modelAttribute="article" action="${ctx}/cms/stats/article" method="post"
           class="breadcrumb form-search">
    <div>
        <label>归属栏目：</label><sys:treeselect id="category" name="categoryId" value="${paramMap.id}"
                                            labelName="categoryName" labelValue="${paramMap.name}"
                                            title="栏目" url="/cms/category/treeData" module="article"
                                            cssClass="input-small" allowClear="true"/>
        <label>归属机构：</label><sys:treeselect id="office" name="officeId" value="${paramMap.office.id}"
                                            labelName="officeName" labelValue="${paramMap.office.name}"
                                            title="机构" url="/sys/office/treeData" cssClass="input-small"
                                            allowClear="true"/>
        <label>开始日期：</label><input id="beginDate" name="beginDate" type="text" readonly="readonly" maxlength="20"
                                   class="input-small Wdate"
                                   value="${paramMap.beginDate}"
                                   onclick="WdatePicker({dateFmt:'yyyy-MM-dd',isShowClear:false});"/>
        <label>结束日期：</label><input id="endDate" name="endDate" type="text" readonly="readonly" maxlength="20"
                                   class="input-small Wdate"
                                   value="${paramMap.endDate}"
                                   onclick="WdatePicker({dateFmt:'yyyy-MM-dd',isShowClear:false});"/>&nbsp;&nbsp;
        <input id="btnSubmit" class="btn btn-primary" type="submit" value="查询"/>
    </div>
</form:form>
<sys:message content="${message}"/>
<table id="contentTable" class="table table-striped table-bordered table-condensed">
    <thead>
    <tr>
        <th>父级栏目</th>
        <th>栏目名称</th>
        <th>信息量</th>
        <th>点击量</th>
        <th>最后更新时间</th>
        <th>归属机构</th>
    <tbody>
    <c:forEach items="${list}" var="stats">
        <tr>
            <td><a href="javascript:"
                   onclick="$('#categoryId').val('${stats.parent.id}');$('#categoryName').val('${stats.parent.name}');$('#searchForm').submit();return false;">${stats.parent.name}</a>
            </td>
            <td><a href="javascript:"
                   onclick="$('#categoryId').val('${stats.id}');$('#categoryName').val('${stats.name}');$('#searchForm').submit();return false;">${stats.name}</a>
            </td>
            <td>${stats.cnt}</td>
            <td>${stats.hits}</td>
            <td><fmt:formatDate value="${stats.updateDate}" type="both"/></td>
            <td><a href="javascript:"
                   onclick="$('#officeId').val('${stats.office.id}');$('#officeName').val('${stats.office.name}');$('#searchForm').submit();return false;">${stats.office.name}</a>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>
<div class="pagination">${page}</div>--%>
</body>
</html>