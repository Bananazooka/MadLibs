var prompts = [
	'Type your name',
	'Type an adjective',
	'Type a noun',
  'Type an habitation',
  'Type a city',
  'Type an adjective (again!)',
  'Type another habitation',
  'Last one! Type an adverb',   
   ];

var answers=[];
// Keep track of current prompt we're on
var currentPrompt = 0;

// A function that will call the next prompt
var nextPrompt = function() {
  //if there's no answer in the form
  if (currentPrompt != 0){
    answers.push($('input').val());
  }
	// if there is a next prompt
	if (currentPrompt < prompts.length) {
		// put first prompt in all html elements with class 
		$('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
		// move the next prompt into variable currentPrompt 
		currentPrompt = currentPrompt + 1;
	}
	//or else if we're at the end of the array
	else {
		// put a new message into the html.
		showFinal();
	}
}

//puts user answers into HTML
var showFinal = function() {
   $('.prompt').html('This is the story of <span class="fill">'+answers[0]+'</span> and the <span class="fill">'+answers[1]+'</span> <span class="fill">'+answers[2]+'</span>. <br> Once upon a time, <span class="fill">'+answers[0]+'</span> lived in a smelly <span class="fill">'+answers[3]+'</span>. He/She wanted to go somewhere exciting, so he/she planned a trip to <span class="fill">'+answers[4]+'</span> . <br> But then, a <span class="fill">'+answers[1]+'</span> <span class="fill">'+answers[2]+'</span> appeared. It was a sacred <span class="fill">'+answers[2]+'</span> that could grant a wish. <span class="fill">'+answers[0]+'</span> was very <span class="fill">'+answers[5]+'</span> . He/She could do whatever she wanted! So he/she wished to turn her <span class="fill">'+answers[3]+'</span> into a beautiful <span class="fill">'+answers[6]+'</span> .<br> He/She returned home and lived <span class="fill">'+answers[7]+'</span> in her beautiful <span class="fill">'+answers[6]+'</span> . <br> He/She never went to <span class="fill">'+answers[4]+'</span>, to the great displeasure of its inhabitants .')

  //hide button
  $('.next').hide();
  $('.reset').show();
}
// run nextPrompt function when button is clicked
$('.next').click(function() {
	nextPrompt();
  //show reset button
  
});

// Show the first prompt as soon as js loads
nextPrompt();
$('.reset').hide();
$('.reset').click(function() {
	location.reload(true)});
