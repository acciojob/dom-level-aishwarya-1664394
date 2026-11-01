//your JS code here. If required.
let count=0;
let levelele=document.getElementById("level");
while(levelele.parentElement!=null){
	count++;
	levelele=levelele.parentElement
}
alert("The level of the element is: ",count)