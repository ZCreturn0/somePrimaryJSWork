window.onload = function(){
	var ul = document.getElementById("img-list");
	for(var i=1;i<=10;i++)
	{
		var li = document.createElement("li");
		var img = document.createElement("img");
		img.src = "images/" + i + ".jpg";
		li.appendChild(img);
		ul.appendChild(li);
	}
	var li = document.createElement("li");
	var div = document.createElement("div");
	div.className = "cb";
	li.appendChild(div);
	ul.appendChild(li);
	var imgs = document.getElementsByTagName("img");
	for(var i=0;i<imgs.length;i++)
	{
		imgs[i].onmouseover = function(){
			this.className = "current";
		};
		imgs[i].onmouseout = function(){
			this.className = "";
		};
	}
}