<%--
  Created by IntelliJ IDEA.
  User: jinhui1
  Date: 2017/8/18
  Time: 10:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/webpage/include/taglib.jsp"%>

<html>
<head>
    <title>Title</title>
    <%@include file="/webpage/include/treeview.jsp" %>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta name="decorator" content="default"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9,IE=10" />
    <meta http-equiv="Expires" content="0"><meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-store">
    <script src="${ctxStatic}/echarts3/echart.js"></script>
    <script src="${ctxStatic}/echarts3/changchun.js"></script>
    <script src="${ctxStatic}/scrollbar/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <!-- scroll -->
    <link rel="stylesheet" type="text/css" href="${ctxStatic}/echarts3/Scrollbar/css/jquery.mCustomScrollbar.css">

    <link rel="stylesheet" type="text/css" href="${ctxStatic}/echarts3/style.css"/>
    <link rel="stylesheet" type="text/css" href="${ctxStatic}/echarts3/dist/zTree/css/zTreeStyle.css">
</head>
<body>


<script type="text/javascript">
    $(document).ready(function() {
        openDialog("修改",
            "${ctx}/watchIndex","${width==null?'800px':width}", "${height==null?'500px':height}","${target}");
    });
</script>

</body>
</html>
