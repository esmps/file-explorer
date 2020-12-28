var x, y, z, color;

document.getElementById("button").onclick = function() {
    
    x = Math.round(Math.random() * 256);
    y = Math.round(Math.random() * 256);
    z = Math.round(Math.random() * 256);
    
    color = 'RGB(' + x + ', ' + y + ', ' + z + ')';
    
    document.body.style.backgroundColor = color;
    document.getElementById("content").innerHTML = '<p>' + color + '</p>';
}