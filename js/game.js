var correctAnsCount = 0;
	i = 0;
	var qDivsArray = ["questionOne", "questionTwo","questionThree","questionFour","questionFive","questionSix", "question7"]
	
	var ansArray = ["ans1", "ans2", "ans3","ans4", "ans5","ans6", "ans7", "ans8", "ans9", "ans10", "ans11"];
	var inputArray = ["q1Input","q2Input","q3Input","q4Input","q5Input","q6Input","q7Input","q8Input","q9Input","q10Input"];


	

	function checkAnswer(){
		
		var qInput = document.getElementById("q"+i+"Input").value;
		//var input = document.getElementById(").value;

		if(qInput == ansArray[i]){
			document.getElementById(qDivsArray[i+1]).style.display = 'block';

			
			alert(ansArray[i]);

			document.getElementById("q"+i+"Input").classList.add('green-glow');
			setTimeout(function(){ document.getElementById("q"+i+"Input").classList.remove('green-glow')},700);
				console.log("Correct");
				 i++;
				 correctAnsCount++;

				 console.log(correctAnsCount);

				;
		} else {

			document.getElementById("q"+i+"Input").classList.add('red-glow');
			setTimeout(function(){ document.getElementById("q"+i+"Input").classList.remove('red-glow')
			},1000);
		} //
	}// END OF FUCNTION

	function openRoom(){
		if (correctAnsCount == 5){
			document.getElementById("roomTwo").style.visibility = 'visible';
			document.getElementById("roomOne").style.visibility = 'hidden';
			
		}
	}