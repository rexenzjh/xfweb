
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/webpage/include/taglib.jsp"%>

<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta name="decorator" content="default"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9,IE=10" />
    <meta http-equiv="Expires" content="0"><meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-store">
    <title>划分区域</title>
</head>
<body>
<div class="background" style="background-image: url(${ctxStatic}/echarts3/timg.jpg);border: 1px solid #000;  width:800px;height:400px;">
<canvas id="canvas"  width="800" height="400">
</canvas>
</div>

<p id="message"></p>
<script type="text/javascript"  src="${ctxStatic}/echarts3/jcanvas-20.1.2.js"></script>
<script>

	window.onload=function(){
		<%--var c=document.getElementById("canvas");--%>
		<%--var cxt=c.getContext("2d");--%>
		<%--var img=new Image()--%>
		<%--img.src="${ctxStatic}/echarts3/timg.jpg"--%>
		<%--img.onload = function() {--%>
            <%--cxt.drawImage(img, 0, 0);--%>
        <%--}--%>
	}
    function getLocation(x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x: (x - bbox.left) * (canvas.width / bbox.width),
            y: (y - bbox.top) * (canvas.height / bbox.height)

            /*
             * 此处不用下面两行是为了防止使用CSS和JS改变了canvas的高宽之后是表面积拉大而实际
             * 显示像素不变而造成的坐标获取不准的情况
             x: (x - bbox.left),
             y: (y - bbox.top)
             */
        };
    }

    var layer=0;
    CanvasExt = {
        drawRect:function(canvasId,penColor,strokeWidth){
            var that=this;
            that.penColor=penColor;
            that.penWidth=strokeWidth;

            var canvas=document.getElementById(canvasId);
            //canvas 的矩形框
            var canvasRect = canvas.getBoundingClientRect();
            //矩形框的左上角坐标
            var canvasLeft=canvasRect.left;
            var canvasTop=canvasRect.top;

            var layerIndex=layer;
            var layerName="layer";
            var x=0;
            var y=0;

            //鼠标点击按下事件，画图准备
            canvas.onmousedown=function(e){

                //设置画笔颜色和宽度
                var color=that.penColor;
                var penWidth=that.penWidth;

                layerIndex++;
                layer++;
                layerName+=layerIndex;
                x = e.clientX-canvasLeft;
                y = e.clientY-canvasTop;

                $("#"+canvasId).addLayer({
                    type: 'rectangle',
                    strokeStyle: color,
                    strokeWidth: penWidth,
                    name:layerName,
                    fromCenter: false,
                    x: x, y: y,
                    width: 1,
                    height: 1
                });

                $("#"+canvasId).drawLayers();
                $("#"+canvasId).saveCanvas();
                //鼠标移动事件，画图
                canvas.onmousemove=function(e){
                    var location = getLocation(e.clientX, e.clientY);
                    var message = document.getElementById("message");
                    message.innerHTML = "x=" + location.x + " ,y=" + location.y;

                    width = e.clientX-canvasLeft-x;
                    height = e.clientY-canvasTop-y;

                    $("#"+canvasId).removeLayer(layerName);

                    $("#"+canvasId).addLayer({
                        type: 'rectangle',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerName,
                        fromCenter: false,
                        x: x, y: y,
                        width: width,
                        height: height
                    });

                    $("#"+canvasId).drawLayers();
                }
            };

            canvas.ondblclick=function(e){
                var color=that.penColor;
                var penWidth=that.penWidth;

                canvas.onmousemove=null;

                width = e.clientX-canvasLeft-x;
                height = e.clientY-canvasTop-y;

                $("#"+canvasId).removeLayer(layerName);

                $("#"+canvasId).addLayer({
                    type: 'rectangle',
                    strokeStyle: color,
                    strokeWidth: penWidth,
                    name:layerName,
                    fromCenter: false,
                    x: x, y: y,
                    width: width,
                    height: height
                });

                $("#"+canvasId).drawLayers();
                $("#"+canvasId).saveCanvas();
            }

            canvas.onmouseup=function(e){
            }
        }
    };

    drawPen();
    function drawPen(){
        var color = "red";
        var width = 2;
        CanvasExt.drawRect("canvas",color,width);
    }
</script>
</body>
</html>


