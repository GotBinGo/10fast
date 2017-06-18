//document.getElementById("inputfield").onkeyup = function(a){if(a.keyCode == "32" ) document.counter++; set(Array.prototype.slice.call(document.getElementById("row1").childNodes).map((x,i)=>x.classList).filter(x=>x!=undefined).map(x=>x.length).lastIndexOf(1)*2,document.getElementById("inputfield").value)}

//document.getElementById("inputfield").onkeydown = function(a){if(a.keyCode == "32" ) document.counter++; set(Array.prototype.slice.call(document.getElementById("row1").childNodes).map((x,i)=>x.classList).filter(x=>x!=undefined).map(x=>x.length).lastIndexOf(1)*2,document.getElementById("inputfield").value+a.key)}

//function set(n, t) { document.getElementById("row1").childNodes[n].innerHTML = document.getElementById("row1").childNodes[n].innerHTML.split("<")[0]+"<span style=\"position: absolute; left: "+(document.getElementById("row1").childNodes[n].getBoundingClientRect().left-document.getElementById("row1").getBoundingClientRect().left)+"px;top: "+(document.getElementById("row1").childNodes[n].getBoundingClientRect().top-document.getElementById("row1").getBoundingClientRect().top-8)+"px; \" >"+t+"</span>"}

window.actWord = "";
document.getElementById("inputfield").onkeydown = 
function(a){
	console.log(a);
	if(a.keyCode == 32) 
		window.actWord = "";
	else if(a.keyCode == 8)
		window.actWord = window.actWord.slice(0,-1);
	else 
		window.actWord += a.key.substring(0,1);
	var el = document.querySelectorAll(".highlight")[0];
	if(typeof el == "undefined")
		el = document.querySelectorAll(".highlight-wrong")[0];
	var word = el.textContent;
	var text = "";
	for(var i=0; i < word.length; i++){
		if(i < actWord.length){
			if(word.charAt(i) == actWord.charAt(i))
				text += "<x style='color:green'>"+word.charAt(i)+"</x>";
			else
				text += "<x style='color:red'>"+word.charAt(i)+"</x>";
		}
		else{
			text += word.charAt(i);
		}
	}
	el.innerHTML=text;
}
