function myFunction1() {

	var i =0;
	var Sum =0;
	var x1 = parseFloat(document.getElementById("Grade1").value);
	var x2 = parseFloat(document.getElementById("Grade2").value);
	if ( (isNaN(x1)!=true)&& (isNaN(x2))!=true ) {
		Sum = Sum + parseFloat(x1)

		var n1 =((x1/x2)*100).toFixed(2)
		document.getElementById("percentage1").innerHTML = ((x1/x2)*100).toFixed(2) + "%";
		i = i + parseFloat(x2)
		
	}

	else{
		alert ("Input for Activity 1 is invalid")
	}

	var x3 = parseFloat(document.getElementById("Grade3").value);
	var x4 = parseFloat(document.getElementById("Grade4").value);
	if ( (isNaN(x3)!=true)&& (isNaN(x4))!=true ) {
		Sum = Sum + parseFloat(x3)		

		var n2 =((x3/x4)*100).toFixed(2)
		i = i + parseFloat(x4)
		document.getElementById("percentage2").innerHTML = ((x3/x4)*100).toFixed(2) + "%";
	}

	else{
		alert ("Input for Activity 2 is invalid")
	}

	
	var x5 = parseFloat(document.getElementById("Grade5").value);
	var x6 = parseFloat(document.getElementById("Grade6").value);
	if ( (isNaN(x5)!=true)&& (isNaN(x6))!=true ) {
		Sum = Sum + parseFloat(x5)

		var n3 =((x5/x6)*100).toFixed(2)
		i = i + parseFloat(x6)
		document.getElementById("percentage3").innerHTML = ((x5/x6)*100).toFixed(2) + "%";

	}
	
	else{
		alert ("Input for Activity 3 is invalid")
	}

	var x7 = parseFloat(document.getElementById("Grade7").value);
	var x8 = parseFloat(document.getElementById("Grade8").value);
	if ( (isNaN(x7)!=true)&& (isNaN(x8))!=true ) {
		Sum = Sum + parseFloat(x7)
		var n4 =((x7/x8)*100).toFixed(2)
		i = i + parseFloat(x8)
		document.getElementById("percentage4").innerHTML = ((x7/x8)*100).toFixed(2) + "%";

	}

	else{
		alert ("Input for Activity 4 is invalid")
	}
	
	
	
var average = (Sum / i).toFixed(3); 
document.getElementById("Total_percentage").innerHTML = average ;
	
	
	
}



function myFunction() {

	var i =0;
	var Sum =0;
	var x1 = parseFloat(document.getElementById("Grade1").value);
	var x2 = parseFloat(document.getElementById("Grade2").value);
	if ( (isNaN(x1)!=true)&& (isNaN(x2))!=true ) {
		i=i+1;

		var n1 =((x1/x2)).toFixed(2)
		document.getElementById("percentage1").innerHTML = ((x1/x2)*100).toFixed(2) + "%";
		Sum = Sum + parseFloat(n1)
		
	}

	else{
		alert ("Input for Activity 1 is invalid")
	}

	var x3 = parseFloat(document.getElementById("Grade3").value);
	var x4 = parseFloat(document.getElementById("Grade4").value);
	if ( (isNaN(x3)!=true)&& (isNaN(x4))!=true ) {
		i=i+1;
		

	var n2 =((x3/x4)).toFixed(2)
	Sum = Sum + parseFloat(n2)
	document.getElementById("percentage2").innerHTML = ((x3/x4)*100).toFixed(2) + "%";
	}

	else{
		alert ("Input for Activity 2 is invalid")
	}

	
	var x5 = parseFloat(document.getElementById("Grade5").value);
	var x6 = parseFloat(document.getElementById("Grade6").value);
	if ( (isNaN(x5)!=true)&& (isNaN(x6))!=true ) {
		i=i+1;

		var n3 =((x5/x6)).toFixed(2)
		Sum = Sum + parseFloat(n3)
		document.getElementById("percentage3").innerHTML = ((x5/x6)*100).toFixed(2) + "%";

	}

	else{
		alert ("Input for Activity 3 is invalid")
	}
	
	var x7 = parseFloat(document.getElementById("Grade7").value);
	var x8 = parseFloat(document.getElementById("Grade8").value);
	if ( (isNaN(x7)!=true)&& (isNaN(x8))!=true ) {
		i=i+1;
		var n4 =((x7/x8)).toFixed(2)
		Sum = Sum + parseFloat(n4)
		document.getElementById("percentage4").innerHTML = ((x7/x8)*100).toFixed(2) + "%";

	}

	else{
		alert ("Input for Activity 4 is invalid")
	}
	
	
	
var mean = (Sum / i).toFixed(2); 
document.getElementById("Total_percentage").innerHTML = mean;
	
	
}



function myFunction2() {

	var max;
	var x1 = parseFloat(document.getElementById("Grade1").value);
	var x2 = parseFloat(document.getElementById("Grade2").value);
	var x3 = parseFloat(document.getElementById("Grade3").value);
	var x4 = parseFloat(document.getElementById("Grade4").value);
	var x5 = parseFloat(document.getElementById("Grade5").value);
	var x6 = parseFloat(document.getElementById("Grade6").value);
	var x7 = parseFloat(document.getElementById("Grade7").value);
	var x8 = parseFloat(document.getElementById("Grade8").value);

	if ( (isNaN(x1)!=true)&& (isNaN(x2))!=true && (isNaN(x3)!=true)&& (isNaN(x4))!=true &&(isNaN(x5)!=true)&& (isNaN(x6))!=true && (isNaN(x7)!=true)&& (isNaN(x8))!=true ) {
		max=Math.max(x1/x2,x3/x4,x5/x6,x7/x8);
	}

	if ( (isNaN(x1)== true) || (isNaN(x2))== true  ) {

	max=Math.max(x3/x4,x5/x6,x7/x8);
	alert ("Input for Activity 1 is invalid")

		
	}

	if ( (isNaN(x3)== true) || (isNaN(x4))== true  ) {

	max=Math.max(x1/x2,x5/x6,x7/x8);
	alert ("Input for Activity 2 is invalid")

		
	}

	if ( (isNaN(x5)== true) || (isNaN(x6))== true  ) {

	max=Math.max(x1/x2,x3/x4,x7/x8);
	alert ("Input for Activity 3 is invalid")

		
	}

	if ( (isNaN(x7)== true) || (isNaN(x8))== true  ) {

	max=Math.max(x1/x2,x3/x4,x5/x6);
	alert ("Input for Activity 4 is invalid")

		
	}
	
	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x3)== true) || (isNaN(x4))== true) ) {

	max=Math.max(x5/x6,x7/x8);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x5)== true) || (isNaN(x6))== true) ) {

	max=Math.max(x3/x4,x7/x8);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x7)== true) || (isNaN(x8))== true) ) {

	max=Math.max(x3/x4,x5/x6);
	
		
	}

	if ( ((isNaN(x3)== true) || (isNaN(x4))== true) && ((isNaN(x5)== true) || (isNaN(x6))== true) ) {

	max=Math.max(x1/x2,x7/x8);
	
		
	}

	if ( ((isNaN(x3)== true) || (isNaN(x4))== true) && ((isNaN(x7)== true) || (isNaN(x8))== true) ) {

	max=Math.max(x1/x2,x5/x6);
	
		
	}

	if ( ((isNaN(x5)== true) || (isNaN(x6))== true) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	max=Math.max(x1/x2,x3/x4);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x3)== true) || (isNaN(x4)== true)) && ((isNaN(x5)== true) || (isNaN(x6))== true) ) {

	max=Math.max(x7/x8);
	
		
	}

	if ( ((isNaN(x3)== true) || (isNaN(x4))== true) && ((isNaN(x5)== true) || (isNaN(x6)== true)) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	max=Math.max(x1/x2);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x5)== true) || (isNaN(x6)== true)) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	max=Math.max(x3/x4);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x3)== true) || (isNaN(x4)== true)) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	max=Math.max(x5/x6);
	
		
	}

	alert ("Max Percentage is" + (max*100).toFixed(2) + "%")
}


function myFunction3() {

	var min;
	var x1 = parseFloat(document.getElementById("Grade1").value);
	var x2 = parseFloat(document.getElementById("Grade2").value);
	var x3 = parseFloat(document.getElementById("Grade3").value);
	var x4 = parseFloat(document.getElementById("Grade4").value);
	var x5 = parseFloat(document.getElementById("Grade5").value);
	var x6 = parseFloat(document.getElementById("Grade6").value);
	var x7 = parseFloat(document.getElementById("Grade7").value);
	var x8 = parseFloat(document.getElementById("Grade8").value);

	if ( (isNaN(x1)!=true)&& (isNaN(x2))!=true && (isNaN(x3)!=true)&& (isNaN(x4))!=true &&(isNaN(x5)!=true)&& (isNaN(x6))!=true && (isNaN(x7)!=true)&& (isNaN(x8))!=true ) {
		min=Math.min(x1/x2,x3/x4,x5/x6,x7/x8);
	}

	if ( (isNaN(x1)== true) || (isNaN(x2))== true  ) {

	min=Math.min(x3/x4,x5/x6,x7/x8);
	alert ("Input for Activity 1 is invalid")

		
	}

	if ( (isNaN(x3)== true) || (isNaN(x4))== true  ) {

	min=Math.min(x1/x2,x5/x6,x7/x8);
	alert ("Input for Activity 2 is invalid")

		
	}

	if ( (isNaN(x5)== true) || (isNaN(x6))== true  ) {

	min=Math.min(x1/x2,x3/x4,x7/x8);
	alert ("Input for Activity 3 is invalid")

		
	}

	if ( (isNaN(x7)== true) || (isNaN(x8))== true  ) {

	min=Math.min(x1/x2,x3/x4,x5/x6);
	alert ("Input for Activity 4 is invalid")

		
	}
	
	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x3)== true) || (isNaN(x4))== true) ) {

	min=Math.min(x5/x6,x7/x8);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x5)== true) || (isNaN(x6))== true) ) {

	min=Math.min(x3/x4,x7/x8);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x7)== true) || (isNaN(x8))== true) ) {

	min=Math.min(x3/x4,x5/x6);
	
		
	}

	if ( ((isNaN(x3)== true) || (isNaN(x4))== true) && ((isNaN(x5)== true) || (isNaN(x6))== true) ) {

	min=Math.min(x1/x2,x7/x8);
	
		
	}

	if ( ((isNaN(x3)== true) || (isNaN(x4))== true) && ((isNaN(x7)== true) || (isNaN(x8))== true) ) {

	min=Math.min(x1/x2,x5/x6);
	
		
	}

	if ( ((isNaN(x5)== true) || (isNaN(x6))== true) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	min=Math.min(x1/x2,x3/x4);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x3)== true) || (isNaN(x4)== true)) && ((isNaN(x5)== true) || (isNaN(x6))== true) ) {

	min=Math.min(x7/x8);
	
		
	}

	if ( ((isNaN(x3)== true) || (isNaN(x4))== true) && ((isNaN(x5)== true) || (isNaN(x6)== true)) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	min=Math.min(x1/x2);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x5)== true) || (isNaN(x6)== true)) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	min=Math.min(x3/x4);
	
		
	}

	if ( ((isNaN(x1)== true) || (isNaN(x2))== true) && ((isNaN(x3)== true) || (isNaN(x4)== true)) && ((isNaN(x7)== true) || (isNaN(x8))== true )) {

	min=Math.min(x5/x6);
	
		
	}

	alert ("Min Percentage is" + (min*100).toFixed(2) + "%")
}










