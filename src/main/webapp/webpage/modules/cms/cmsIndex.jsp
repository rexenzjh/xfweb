<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp" %>
<html>
<head>
    <title>内容管理</title>
    <meta name="decorator" content="default"/>
    <%@include file="/webpage/include/treeview.jsp" %>
    <style type="text/css">
        .ztree {
            overflow: auto;
            margin: 0;
            _margin-top: 10px;
            padding: 10px 0 0 10px;
        }
    </style>
    <script type="text/javascript">
        function refresh() {//刷新

            window.location = "${ctx}/cms/";
        }
    </script>
</head>
<body class="gray-bg">

<div class="wrapper wrapper-content">
    <div class="ibox">
        <div class="ibox-content">
            <sys:message content="${message}"/>
            <div id="content" class="row">
                <div id="left" style="background-color:#e7eaec" class="leftBox col-sm-1">
                    <a onclick="refresh()" class="pull-right">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <div id="ztree" class="ztree leftBox-content"></div>
                </div>
                <div id="right" class="col-sm-11  animated fadeInRight">
                    <iframe id="cmsMainFrame" name="cmsMainFrame" src="${ctx}/cms/none" width="100%" height="91%"
                            frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    var setting = {
        data: {simpleData: {enable: true, idKey: "id", pIdKey: "pId", rootPId: '0'}},
        callback: {
            onClick: function (event, treeId, treeNode) {
                var id = treeNode.id == '0' ? '' : treeNode.id;
                var module = treeNode.module;
                if ("article" == module) {
                    $('#cmsMainFrame').attr("src", "${ctx}/cms/article/?category.id=" + id);
                } else if ("link" == module) {
                    $('#cmsMainFrame').attr("src", "${ctx}/cms/link/?category.id=" + id);
                } else {
                    $('#cmsMainFrame').attr("src", "${ctx}/cms/none");
                }
            }
        }
    };

    function refreshTree() {
        $.getJSON("${ctx}/cms/treeData", function (data) {
            $.fn.zTree.init($("#ztree"), setting, data).expandAll(true);
        });
    }
    refreshTree();

    var leftWidth = 160; // 左侧窗口大小
    var htmlObj = $("html"), mainObj = $("#main");
    var frameObj = $("#left, #openClose, #right, #right iframe");
    function wSize() {
        var strs = getWindowSize().toString().split(",");
        htmlObj.css({"overflow-x": "hidden", "overflow-y": "hidden"});
        mainObj.css("width", "auto");
        frameObj.height(strs[0] - 120);
        var leftWidth = ($("#left").width() < 0 ? 0 : $("#left").width());
        $("#right").width($("#content").width() - leftWidth - $("#openClose").width() - 60);
        $(".ztree").width(leftWidth - 10).height(frameObj.height() - 46);
    }
</script>
<script src="${ctxStatic}/common/wsize.min.js" type="text/javascript"></script>
</body>
</html>