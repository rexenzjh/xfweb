<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>rff管理</title>
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
		<h5>rff列表 </h5>
	</div>
    
    <div class="ibox-content">
	<sys:message content="${message}"/>
	
	<!--查询条件-->
	<div class="row" style="background-color: #f0f0f0; margin-right: -1px !important;
    margin-left: -1px !important;">
	<div class="col-sm-12">
	<form:form style="margin-top:8px;margin-bottom: -8px;" id="searchForm" modelAttribute="testRf" action="${ctx}/test/rff/testRf/" method="post" class="form-inline">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<table:sortColumn id="orderBy" name="orderBy" value="${page.orderBy}" callback="sortOrRefresh();"/><!-- 支持排序 -->
			<div class="form-group" style="padding-right:10px;">
			<span>备注信息：</span>
				<form:input path="remarks" htmlEscape="false" maxlength="255"  class=" form-control input-sm"/>
			</div>

	</form:form>
	<br/>
	</div>
	</div>
	
	<!-- 工具栏 -->
	<div class="row" style="margin-left: -15px;margin-top:15px;">
	<div class="col-sm-12">
		<div class="pull-left">
			<shiro:hasPermission name="test:rff:testRf:add">
				<table:addRow url="${ctx}/test/rff/testRf/form" title="rff"></table:addRow><!-- 增加按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:rff:testRf:edit">
			    <table:editRow url="${ctx}/test/rff/testRf/form" title="rff" id="contentTable"></table:editRow><!-- 编辑按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:rff:testRf:del">
				<table:delRow url="${ctx}/test/rff/testRf/deleteAll" id="contentTable"></table:delRow><!-- 删除按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:rff:testRf:import">
				<table:importExcel url="${ctx}/test/rff/testRf/import"></table:importExcel><!-- 导入按钮 -->
			</shiro:hasPermission>
			<shiro:hasPermission name="test:rff:testRf:export">
	       		<table:exportExcel url="${ctx}/test/rff/testRf/export"></table:exportExcel><!-- 导出按钮 -->
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
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="testRf">
			<tr>
				<td> <input type="checkbox" id="${testRf.id}" class="i-checks"></td>
				<td><a  href="#" onclick="openDialogView('查看rff', '${ctx}/test/rff/testRf/form?id=${testRf.id}','800px', '500px')">
					${testRf.createBy.id}
				</a></td>
				<td>
					<fmt:formatDate value="${testRf.createDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					${testRf.remarks}
				</td>
				<td>
					<shiro:hasPermission name="test:rff:testRf:view">
						<a href="#" onclick="openDialogView('查看rff', '${ctx}/test/rff/testRf/form?id=${testRf.id}','800px', '500px')" class="btn btn-info btn-xs" ><i class="fa fa-search-plus"></i> 查看</a>
					</shiro:hasPermission>
					<shiro:hasPermission name="test:rff:testRf:edit">
    					<a href="#" onclick="openDialog('修改rff', '${ctx}/test/rff/testRf/form?id=${testRf.id}','800px', '500px')" class="btn btn-success btn-xs" ><i class="fa fa-edit"></i> 修改</a>
    				</shiro:hasPermission>
    				<shiro:hasPermission name="test:rff:testRf:del">
						<a href="${ctx}/test/rff/testRf/delete?id=${testRf.id}" onclick="return confirmx('确认要删除该rff吗？', this.href)"   class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> 删除</a>
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