document.getElementById("inputfield").onkeyup = function(a){if(a.keyCode == "32" ) document.counter++; set(Array.prototype.slice.call(document.getElementById("row1").childNodes).map((x,i)=>x.classList).filter(x=>x!=undefined).map(x=>x.length).lastIndexOf(1)*2,document.getElementById("inputfield").value)}

function set(n, t) { document.getElementById("row1").childNodes[n].innerHTML = document.getElementById("row1").childNodes[n].innerHTML.split("<")[0]+"<span style=\"position: absolute; left: "+(document.getElementById("row1").childNodes[n].getBoundingClientRect().left-document.getElementById("row1").getBoundingClientRect().left)+"px;top: "+(document.getElementById("row1").childNodes[n].getBoundingClientRect().top-document.getElementById("row1").getBoundingClientRect().top-8)+"px; \" >"+t+"</span>"}
