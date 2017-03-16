//1.<script>function writeMessage() {	alert("i have been click");}</script>
//	<button onclick="writeMessage()">Click Me</button>

//2.<button id="myButton">Click Me</button><script>var myElement = document.getElementById("myButton");myElement.onclick = function() 
//{alert(i have been clicked );}</script><button id="myButton">Click Me</button>


//3.
//<button id="myButton">Click Me</button>myButton.addEventListener("click", writeMessage, false);function writeMessage()
//{	alert("i have been clicked");}myButton.addEventListener("click", function() {	alert("i have been clicked");}, false);


//4
//<script>	document.addEventListener("DOMContentLoaded", init, false);	
// or window.addEventListener("load", init, false);	function init() 
//{		myButton.addEventListener("click", writeMessage, false);	}function writeMessage() {alert("i have been clicked");	}</script>
//	<input id="myButton" type="button" value="Click Me">



5.
//<head>	<input id="myButton" type="button" value="Click Me"> </head>
//<script>	document.addEventListener("DOMContentLoaded", init, false);	
// or window.addEventListener("load", init, false);	function init() 
//{		myButton.addEventListener("click", writeMessage, false);	}function writeMessage() {alert("i have been clicked");	}</script>
//	

//6.
//var links = document.getElementsByTagName("a");alert("google " + www.google.com.href);
//
//7.
//var btnPlay = document.getElementById("btnPlay");btnPlay.disabled = true;
8.































//$(document).ready(function(){
//	var testNumLength = function(number) {
//        if (number.length > 9) {
//            totaldiv.text(number.substr(number.length-9,9));
//            if (number.length > 15) {
//                number = "";
//                totaldiv.text("Err");
//            }
//        } 
//    };
//	var number = "";
//    var newnumber = "";
//    var operator = "";
//    var totaldiv = $("#total");
//    totaldiv.text("0");
//    $("#numbers a").not("#clear,#clearall").click(function(){
//		number += $(this).text();
//		totaldiv.text(number);
//		testNumLength(number);
//    });
//    $("#operators a").not("#equals").click(function(){
//		operator = $(this).text();
//		newnumber = number;
//		number = "";
//		totaldiv.text("0");
//    });
//    $("#clear,#clearall").click(function(){
//		number = "";
//		totaldiv.text("0");
//		if ($(this).attr("id") === "clearall") {
//			newnumber = "";
//		}
//    });
//    //Add your last .click() here!
//    $("#equals").click(function(){
//    	if (operator === "+"){
//    		number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
//    	} else if (operator === "-"){
//    		number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
//    	} else if (operator === "÷"){
//    		number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
//    	} else if (operator === "×"){
//    		number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
//    	}
//    	totaldiv.text(number);
//    	testNumLength(number);
//    	number = "";
//    	newnumber = "";
//    });
//});