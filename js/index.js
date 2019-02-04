function message() 
{
	alert("This is a test")
}

function insertImg()
{
	//var imgTag = document.createElement("img");

	/*
	imgTag.src = "bike.png";
	var myImg = document.getElementById("myImg");
	myImg.height = 100;
	myImg.width = 100;

	myImg.appendChild(imgTag);
	*/
	var img = new Image();
	//img.src = "bike.png";               
	//document.body.appendChild(img);
        img.src = "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p240x240/46348359_2464482560235162_7874914256242606080_n.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=9bf39e71359b383b5d677ea0d0a4aa72&oe=5CBD3D0B";
	document.body.appendChild(img);
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
/*
window.onclick = function(crsr)
{
	if(!crsr.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if(myDropdown.classList.contains("show")) {
			myDropdown.classList.remove("show");
		}
	}
}
*/
