<!DOCTYPE html>
<html>
<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.core.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.spatial.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<title>howler</title>
</head>
<body>
<input type="file" name="" onchange="" id="input">
 <div id="song"></div>
 <div id="demo"></div>
 <span id="valTimeAudio"></span>
<style type="text/css">
	#audio-player:active{
		color: yellow;
	}
</style>
<script>
input.onchange = function(){
  var sound = document.getElementById('sound');
  var reader = new FileReader();
  reader.onload = function(e) {
    sound.src = this.result;
    sound.controls = true;
    sound.play();
    };
  var mf = reader.readAsDataURL(this.files[0]);

let min = 0
          let sec = 0           
var sound      = document.createElement('audio');
		 sound.loop = true	
	     	sound.onseeking = myFunction()
	     	sound.id       = 'audio-player';
			sound.controls = 'controls';		
sound.src      = mf
document.getElementById('song').appendChild(sound);
/*var fornTime = {
	 formatTime: function(secs=0) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}*/

function myFunction(e) {
// Display the current position of the <video> in a p element with id="demo"
    var secs = Math.round(sound.currentTime)
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;
    demo.innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;  //fornTime.formatTime(Math.round(sound.currentTime))
requestAnimationFrame(myFunction)
}


	$('html').keyup(function(event){ //отлавливаем нажатие клавиш x
		if (event.keyCode == 	88) { 
			             

      
			sound.play()
			
			

	  }//del
	 if (event.keyCode == 46) {
			document.getElementById('song').removeChild(sound);
		}
	  if (event.keyCode == 17) { //если нажали Ctrl
sound.controls = 'controls';
			
	  		sound.pause()
	  	

	  }
	});
}


/*

var vid = document.getElementById("myVideo");

// Attach a seeking event to the <video>, and execute a function if a seek operation begins
vid.addEventListener("seeking", myFunction);

function myFunction() {
// Display the current position of the <video> in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;
}



var sound = new Howl({
  src: ['071 Газировка Блэк бакарди.mp3', '072 Время и стекло Дым.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    alert('Finished!');
  }
  sprite: {
    blast: [0, 2000],
    laser: [3000, 700],
    winner: [5000, 9000]
  }
});*/
//['071 Газировка Блэк бакарди.mp3', '072 Время и стекло Дым.mp3']
// Setup the new Howl.
//const sound = new Howl({
  //src: ['071 Газировка Блэк бакарди.mp3', '072 Время и стекло Дым.mp3']
//});

// Play the sound.
//sound.play();

// Change global volume.
//Howler.volume(0.5);


	
		
		



</script>
</body>
</html>