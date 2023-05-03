/*
I did not change anyting with my javascript. I added a custom functin to change the logo. 
*/

document.getElementById("themeChange").addEventListener("click", function() {

  toggleStylesheet("candy.css");
});

function toggleStylesheet(href, onoff) {
  var existingNode = 0;
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(href) > -1) {
      existingNode = document.styleSheets[i].ownerNode;
    }
  }
  if (onoff == undefined) onoff = !existingNode; 
  if (onoff) { 
    if (existingNode) return onoff; 
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    document.getElementById('logo').src = 'pictures/candylogo.gif'; 
  } else { 
    if (existingNode) existingNode.parentNode.removeChild(existingNode);
    document.getElementById('logo').src = 'pictures/eye.gif'; 
  }
  return onoff;
}

document.addEventListener("DOMContentLoaded", function(event) {    
  initValidation("#myform");
});