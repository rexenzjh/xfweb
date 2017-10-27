<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>请假单管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
		});
	</script>
</head>
<body class="gray-bg">
	<div class="wrapper wrapper-content">
	<div class="ibox">
	<div class="ibox-title">
		<h5>请假单列表 </h5>
	</div>
    
    <div class="ibox-content">
	<sys:message content="${message}"/>
	
	<!--查询条件-->
	<div class="row" style="background-color: #f0f0f0; margin-right: -1px !important;
    margin-left: -1px !important;">
	<div class="col-sm-12">
	<form:form style="margin-top:8px;margin-bottom: -8px;" id="searchForm" modelAttribute="leave" action="${ctx}/test/leave/leave/" method="post" class="form-inline">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<table:sortColumn id="orderBy" name="orderBy" value="${page.orderBy}" callback="sortOrRefresh();"/><!-- 支持排序 -->

	</form:form>
	<br/>
	</div>
	</div>
	
	<!-- 工具栏 -->
	<div class="row" style="margin-left: -15px;margin-top:15px;">
	<div class="col-sm-12">
		<div class="pull-left">
			<shiro:hasPermission name="test:leave:leave:add">
				<table:addRow url="${ctx}/test/leave/leave/form" title="请假单"></table:addRow><!-- 增加按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:leave:leave:edit">
			    <table:editRow url="${ctx}/test/leave/leave/form" title="请假单" id="contentTable"></table:editRow><!-- 编辑按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:leave:leave:del">
				<table:delRow url="${ctx}/test/leave/leave/deleteAll" id="contentTable"></table:delRow><!-- 删除按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:leave:leave:import">
				<table:importExcel url="${ctx}/test/leave/leave/import"></table:importExcel><!-- 导入按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:leave:leave:export">
	       		<table:exportExcel url="${ctx}/test/leave/leave/export"></table:exportExcel><!-- 导出按钮 -->
	       	</shiro:hasPermission>
	       <button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="left" onclick="sortOrRefresh()" title="刷新"><i class="glyphicon glyphicon-repeat"></i> 刷新</button>
		
			</div>
		<div class="pull-right">
			<button  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="search()" ><i class="fa fa-search"></i> 查询</button>
			<button  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="reset()" ><i class="fa fa-refresh"></i> 重置</button>
		</div>
	</div>
	</div>
	
	<!-- 表格 -->
	<table id="contentTable" class="table table-striped table-bordered table-hover table-condensed dataTables-example dataTable">
		<thead>
			<tr>
				<th> <input type="checkbox" class="i-checks"></th>
				<th  class="sort-column createBy.id">创建者</th>
				<th  class="sort-column createDate">创建时间</th>
				<th  class="sort-column remarks">备注信息</th>
				<th  class="sort-column leaveType">假期类型</th>
				<th  class="sort-column leaveDay">时间大小</th>
				<th  class="sort-column dayType">时间类型，0天，1小时</th>
				<th  class="sort-column beginDate">假期开始时间</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="leave">
			<tr>
				<td> <input type="checkbox" id="${leave.id}" class="i-checks"></td>
				<td><a  href="#" onclick="openDialogView('查看请假单', '${ctx}/test/leave/leave/form?id=${leave.id}','800px', '500px')">
					${leave.createBy.id}
				</a></td>
				<td>
					<fmt:formatDate value="${leave.createDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					${leave.remarks}
				</td>
				<td>
					${leave.leaveType}
				</td>
				<td>
					${leave.leaveDay}
				</td>
				<td>
					${leave.dayType}
				</td>
				<td>
					<fmt:formatDate value="${leave.beginDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					<shiro:hasPermission name="test:leave:leave:view">
						<a href="#" onclick="openDialogView('查看请假单', '${ctx}/test/leave/leave/form?id=${leave.id}','800px', '500px')" class="btn btn-info btn-xs" ><i class="fa fa-search-plus"></i> 查看</a>
					</shiro:hasPermission>
					<shiro:hasPermission name="test:leave:leave:edit">
    					<a href="#" onclick="openDialog('修改请假单', '${ctx}/test/leave/leave/form?id=${leave.id}','800px', '500px')" class="btn btn-success btn-xs" ><i class="fa fa-edit"></i> 修改</a>
    				</shiro:hasPermission>
    				<shiro:hasPermission name="test:leave:leave:del">
						<a href="${ctx}/test/leave/leave/delete?id=${leave.id}" onclick="return confirmx('确认要删除该请假单吗？', this.href)"   class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> 删除</a>
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