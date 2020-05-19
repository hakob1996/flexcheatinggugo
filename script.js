var clickZoom = document.getElementById("prof-image");
var zoom = document.getElementById("zoomedIn");
var menu = document.getElementById("menu");
var scan = document.getElementById("scan");
var ready = document.getElementById("readyP");
var current = document.getElementById("current");
var zoomToScan = document.getElementById("orangePart");
var toMenu = document.getElementById("toMain");
var many = document.getElementById("many"); 
var manyBtn = document.getElementById("manybtn"); 
var firstPage = document.getElementById("firstPage");
var value = document.getElementById("fname");
var click = document.getElementById("scan");

var openApp = function() {
    window.location.replace('amazon://');
  };


manyBtn.addEventListener('click', function(){
    menu.style.display = "block";
    firstPage.style.display = "none";
    many.innerHTML = "SCAN " + value.value + " PACKAGES";
});




clickZoom.addEventListener('click', function(){
    zoom.style.display = "block";
    menu.style.display = "none";
});

zoomToScan.addEventListener('click', function(){
    menu.style.display = "block";
    zoom.style.display = "none";
});

current.addEventListener('click', function(){
    menu.style.display = "none";
    ready.style.display = "block";
});

toMenu.addEventListener('click', function(){
    menu.style.display = "block";
    ready.style.display = "none";
});

click.addEventListener("click", function(){
    openApp();
})


