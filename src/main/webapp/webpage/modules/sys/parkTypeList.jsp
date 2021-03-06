<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>园区类型管理</title>
	<meta name="decorator" content="default"/>
	<%@include file="/webpage/include/treetable.jsp" %>
	<script type="text/javascript">
		$(document).ready(function() {
			var tpl = $("#treeTableTpl").html().replace(/(\/\/\<!\-\-)|(\/\/\-\->)/g,"");
			var data = ${fns:toJson(list)}, ids = [], rootIds = [];
			for (var i=0; i<data.length; i++){
				ids.push(data[i].id);
			}
			ids = ',' + ids.join(',') + ',';
			for (var i=0; i<data.length; i++){
				if (ids.indexOf(','+data[i].parentId+',') == -1){
					if ((','+rootIds.join(',')+',').indexOf(','+data[i].parentId+',') == -1){
						rootIds.push(data[i].parentId);
					}
				}
			}
			for (var i=0; i<rootIds.length; i++){
				addRow("#treeTableList", tpl, data, rootIds[i], true);
			}
			$("#treeTable").treeTable({expandLevel : 1});
		});
		function addRow(list, tpl, data, pid, root){
			for (var i=0; i<data.length; i++){
				var row = data[i];
				if ((${fns:jsGetVal('row.parentId')}) == pid){
					$(list).append(Mustache.render(tpl, {
						dict: {
						blank123:0}, pid: (root?0:pid), row: row
					}));
					addRow(list, tpl, data, row.id);
				}
			}
		}
		
		function refresh(){//刷新
			
			window.location="${ctx}/sys/parkType/";
		}
	</script>
</head>
<body class="gray-bg">
	<div class="wrapper wrapper-content">
	<div class="ibox">
	<div class="ibox-title">
			<h5>园区类型列表 </h5>

	</div>
    
    <div class="ibox-content">
	<sys:message content="${message}"/>

	<!--查询条件-->
	<div class="row" style="background-color: #f0f0f0; margin-right: -1px !important;
    margin-left: -1px !important;">
	<div class="col-sm-12">
	<form:form style="margin-top:17px;" id="searchForm" modelAttribute="parkType" action="${ctx}/sys/parkType/" method="post" class="form-inline">
		<div class="form-group">
				<label>名称：</label>
				<form:input path="name" htmlEscape="false" maxlength="100" class="form-control input-sm"/>
				<label>代码：</label>
				<form:input path="code" htmlEscape="false" maxlength="16" class="form-control input-sm"/>
		</div>
	</form:form>
	<br/>
	</div>
	</div>
	
	<!-- 工具栏 -->
	<div class="row" style="margin-left: -15px;margin-top:15px;">
	<div class="col-sm-12">
		<div class="pull-left">
			<shiro:hasPermission name="sys:parkType:add">
				<table:addRow url="${ctx}/sys/parkType/form" title="园区类型"></table:addRow><!-- 增加按钮 -->
			</shiro:hasPermission>
	       <button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="left" onclick="refresh()" title="刷新"><i class="glyphicon glyphicon-repeat"></i> 刷新</button>
		</div>
		<div class="pull-right">
			<button  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="search()" ><i class="fa fa-search"></i> 查询</button>
			<button  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="reset()" ><i class="fa fa-refresh"></i> 重置</button>
		</div>
	</div>
	</div>
	
	<table id="treeTable" class="table table-striped table-bordered table-hover table-condensed dataTables-example dataTable">
		<thead>
			<tr>
				<th>名称</th>
				<th>代码</th>
				<th>排序</th>
				<th>备注信息</th>
				<shiro:hasPermission name="sys:parkType:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody id="treeTableList"></tbody>
	</table>
	<script type="text/template" id="treeTableTpl">
		<tr id="{{row.id}}" pId="{{pid}}">
			<td><a  href="#" onclick="openDialogView('查看园区类型', '${ctx}/sys/parkType/form?id={{row.id}}','800px', '500px')">
				{{row.name}}
			</a></td>
			<td>
				{{row.code}}
			</td>
			<td>
				{{row.sort}}
			</td>
			<td>
				{{row.remarks}}
			</td>
			<td>
			<shiro:hasPermission name="sys:parkType:view">
				<a href="#" onclick="openDialogView('查看园区类型', '${ctx}/sys/parkType/form?id={{row.id}}','800px', '500px')" class="btn btn-info btn-xs" ><i class="fa fa-search-plus"></i>  查看</a>
				</shiro:hasPermission>
			<shiro:hasPermission name="sys:parkType:edit">
   				<a href="#" onclick="openDialog('修改园区类型', '${ctx}/sys/parkType/form?id={{row.id}}','800px', '500px')" class="btn btn-success btn-xs" ><i class="fa fa-edit"></i> 修改</a>
   			</shiro:hasPermission>
   			<shiro:hasPermission name="sys:parkType:del">
				<a href="${ctx}/sys/parkType/delete?id={{row.id}}" onclick="return confirmx('确认要删除该园区类型及所有子园区类型吗？', this.href)" class="btn btn-danger btn-xs" ><i class="fa fa-trash"></i> 删除</a>
			</shiro:hasPermission>
   			<shiro:hasPermission name="sys:parkType:add">
				<a href="#" onclick="openDialog('添加下级园区类型', '${ctx}/sys/parkType/form?parent.id={{row.id}}','800px', '500px')" class="btn btn-primary btn-xs" ><i class="fa fa-plus"></i> 添加下级园区类型</a>
			</shiro:hasPermission>
			</td>
		</tr>
	</script>
</body>
</html>