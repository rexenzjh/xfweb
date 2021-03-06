<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>请假表单管理</title>
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
		<h5>请假表单列表 </h5>
	</div>
    
    <div class="ibox-content">
	<sys:message content="${message}"/>
	
	<!--查询条件-->
	<div class="row" style="background-color: #f0f0f0; margin-right: -1px !important;
    margin-left: -1px !important;">
	<div class="col-sm-12">
	<form:form style="margin-top:8px;margin-bottom: -8px;" id="searchForm" modelAttribute="formLeave" action="${ctx}/test/one/formLeave/" method="post" class="form-inline">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<table:sortColumn id="orderBy" name="orderBy" value="${page.orderBy}" callback="sortOrRefresh();"/><!-- 支持排序 -->
			<div class="form-group" style="padding-right:10px;">
			<span>员工：</span>
				<sys:treeselect id="tuser" name="tuser.id" value="${formLeave.tuser.id}" labelName="tuser.name" labelValue="${formLeave.tuser.name}"
					title="用户" url="/sys/office/treeData?type=3" cssClass="form-control input-sm" allowClear="true" notAllowSelectParent="true"/>
			</div>
			<div class="form-group" style="padding-right:10px;">
			<span>归属部门：</span>
				<sys:treeselect id="office" name="office.id" value="${formLeave.office.id}" labelName="office.name" labelValue="${formLeave.office.name}"
					title="部门" url="/sys/office/treeData?type=2" cssClass="form-control input-sm" allowClear="true" notAllowSelectParent="true"/>
			</div>

	</form:form>
	<br/>
	</div>
	</div>
	
	<!-- 工具栏 -->
	<div class="row" style="margin-left: -15px;margin-top:15px;">
	<div class="col-sm-12">
		<div class="pull-left">
			<shiro:hasPermission name="test:one:formLeave:add">
				<table:addRow url="${ctx}/test/one/formLeave/form" title="请假表单"></table:addRow><!-- 增加按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:one:formLeave:edit">
			    <table:editRow url="${ctx}/test/one/formLeave/form" title="请假表单" id="contentTable"></table:editRow><!-- 编辑按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:one:formLeave:del">
				<table:delRow url="${ctx}/test/one/formLeave/deleteAll" id="contentTable"></table:delRow><!-- 删除按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:one:formLeave:import">
				<table:importExcel url="${ctx}/test/one/formLeave/import"></table:importExcel><!-- 导入按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:one:formLeave:export">
	       		<table:exportExcel url="${ctx}/test/one/formLeave/export"></table:exportExcel><!-- 导出按钮 -->
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
				<th  class="sort-column tuser.name">员工</th>
				<th  class="sort-column office.name">归属部门</th>
				<th  class="sort-column area.name">归属区域</th>
				<th  class="sort-column beginDate">请假开始日期</th>
				<th  class="sort-column endDate">请假结束日期</th>
				<th  class="sort-column remarks">备注信息</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="formLeave">
			<tr>
				<td> <input type="checkbox" id="${formLeave.id}" class="i-checks"></td>
				<td><a  href="#" onclick="openDialogView('查看请假表单', '${ctx}/test/one/formLeave/form?id=${formLeave.id}','800px', '500px')">
					${formLeave.tuser.name}
				</a></td>
				<td>
					${formLeave.office.name}
				</td>
				<td>
					${formLeave.area.name}
				</td>
				<td>
					<fmt:formatDate value="${formLeave.beginDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					<fmt:formatDate value="${formLeave.endDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					${formLeave.remarks}
				</td>
				<td>
					<shiro:hasPermission name="test:one:formLeave:view">
						<a href="#" onclick="openDialogView('查看请假表单', '${ctx}/test/one/formLeave/form?id=${formLeave.id}','800px', '500px')" class="btn btn-info btn-xs" ><i class="fa fa-search-plus"></i> 查看</a>
					</shiro:hasPermission>
					<shiro:hasPermission name="test:one:formLeave:edit">
    					<a href="#" onclick="openDialog('修改请假表单', '${ctx}/test/one/formLeave/form?id=${formLeave.id}','800px', '500px')" class="btn btn-success btn-xs" ><i class="fa fa-edit"></i> 修改</a>
    				</shiro:hasPermission>
    				<shiro:hasPermission name="test:one:formLeave:del">
						<a href="${ctx}/test/one/formLeave/delete?id=${formLeave.id}" onclick="return confirmx('确认要删除该请假表单吗？', this.href)"   class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> 删除</a>
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