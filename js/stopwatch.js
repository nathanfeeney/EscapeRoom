	/*var time = 0;
	var running = 0;
function startPause(){
	if(running == 0){
		running = 1;
		decrement();
	document.getElementById("start").innerHTML = "Stop";
	document.getElementById("startPause").style.backgroundColor = "green";	
	//document.getElementById("startPause").style.borderColor = "green";
	}
	else{
		running = 0;
	//document.getElementById("start").innerHTML = "Start";	
	//document.getElementById("startPause").style.backgroundColor = "Green";	
	//document.getElementById("startPause").style.borderColor = "pink";
	}
}
function reset(){
	running = 0;
	time = 0;
	document.getElementById("start").innerHTML = "Start";
	document.getElementById("output").innerHTML = "0:00:00:00";
	document.getElementById("startPause").style.backgroundColor = "green";	
	//document.getElementById("startPause").style.borderColor = "green";
}
function decrement(){
	if(running == 1){
		setTimeout(function(){
			time--;
			var mins = Math.floor(time/10/60);
			var secs = Math.floor(time/10 % 60);
			var hours = Math.floor(time/10/60/60); 
			var tenths = time % 10;
			if(mins < 10){
				mins = "0" + mins;
			} 
			if(secs < 10){
				secs = "0" + secs;
			}
			document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
			increment();
		},100)
	}
}*/


	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        console.log(display);


        // When The time runs out Change the Content.
        if (-- timer < 0) {
        	display.textContent = "BOOM"   
        	document.getElementById("time").style.border = "none";
        	document.getElementById("time").style.background = "none"; 
        	document.getElementById("time").style.color = "Yellow";       
        }
    }, 1000);
}

  function timeCalc() {
    var sixtyMinutes = 0.1 * 60,
        display = document.querySelector('#time');
        document.getElementById("startPause").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("time").style.visibility= "visible";



    startTimer(sixtyMinutes, display);


 
};



