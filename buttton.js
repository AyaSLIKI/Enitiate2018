function myfunction(){

	document.getElementById("bu").innerHTML = "HELLO";
	color = document.getElementById("bu").style.color;
	if(color =="red")
		{
			document.getElementById("bu").style.color = "blue";
		}
	else{
		document.getElementById("bu").style.color = "red";

	}
}