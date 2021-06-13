var canvas = document.getElementById("My_canvas")
var ctx = canvas.getContext("2d")
var mousEvent = "empty"
var last_position_of_x, last_position_of_y
var color = "aqua"
var width_of_line = "3"
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value

mouseEvent = "mouseDown"

}

canvas.addEventListener("mousemove" , my_mousemove);
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft
current_position_of_mouse_y = e.clienty - canvas.offsetTop

if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokesstyle = color
ctx.linewidth = width_of_line;


}
function mouse_down(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clienty - canvas.offsetTop  
    if (mouseEvent == "mouseDown") {
        console.log("current_position_of_mouse_x and y cordinates")
        console.log("X =" + current_position_of_mouse_x +"y = " current_position_of_mouse_y);
        ctx.beginPath();
ctx.strokesstyle = color
ctx.linewidth = width_of_line;
ctx arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0,  2*getMatchedCSSRules.PI)
ctx.strokes();
    }
    canvas.addEventListener("mousemove" , my_mousemove);
    function my_mousedown(e)

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

}