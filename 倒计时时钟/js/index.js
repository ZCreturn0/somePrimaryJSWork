window.onload = function(){
	var btn = document.getElementsByName("btn")[0];
	var timeSeed;
	btn.onclick = function(){
		btn.className = btn.className ? "" : "cancel";
		if(btn.className)								//倒计时进行
		{
			timeSeed = setInterval(updateTime,1000);
		}
		else
		{
			clearInterval(timeSeed);
		}
	}
	function updateTime(){
		var min_span = document.getElementsByTagName("span")[0];
		var sec_span = document.getElementsByTagName("span")[1];
		var min = parseInt(min_span.innerHTML);
		var sec = parseInt(sec_span.innerHTML);
		if(sec > 0 )
		{
			sec --;
			sec_span.innerHTML = sec;
		}
		else if(sec == 0)
		{
			if(min > 0)
			{
				min -- ;
				sec = 59;
				min_span.innerHTML = min;
				sec_span.innerHTML = sec;
			}
			else if(min == 0)
			{
				min_span.innerHTML = 0;
				sec_span.innerHTML = 0;
			}
		}
	}
}