// Constants that won't change through the script
// #hour - target id for hour hand in the svg
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


// function run_the_clock(){
//     var date = new Date();
//     let hr = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);
  
//     let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
//     let minPosition = (min * 360/60) + (sec* 360/60)/60;
//     let secPosition = sec * 360/60;
  
//     //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
//     HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
//     MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
//     SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
//   }
let hr = 0;
let min = 0;
let total = 0;
let correct = 0;
run_the_clock();
function run_the_clock(){
  hr = Math.floor(Math.random() * 12);
  min = Math.floor(Math.random() * 60);
//   let sec = date.getSeconds();
//   console.log("Hour: "+hr+ " Minute: "+ min);

  let hrPosition = (hr*360)/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60);// + (sec* 360/60)/60;
//   let secPosition = sec * 360/60;

// console.log("Hour Pos: "+hrPosition+ " Minute: "+ minPosition);
  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  hr = hr == 0 ? 12 : hr;
//   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

function update_score() {
  document.getElementById("correct").innerHTML = "Correct: " + correct + "/" + total;
}

document.getElementById("inHour").onkeydown = function(event) {
    if(event.keyCode == 13) {
        document.getElementById("inMinute").focus();
    }
}

document.getElementById("inMinute").onkeydown = function(event) {
    if (event.keyCode == 13 || event.keyCode==32) {
          console.log("Hour: "+hr+ " Minute: "+ min);
        if(parseInt(document.getElementById("inHour").value) == hr && parseInt(document.getElementById("inMinute").value) == min) {
            run_the_clock();
            correct++;
        }
        
        document.getElementById("inHour").value = '';
        document.getElementById("inMinute").value = '';
        
        document.getElementById("inHour").focus();
        total++;
        update_score();
    }
}

// document.onkeydown = function(event) {
//     if (event.keyCode == 13 || event.keyCode==32) {
//         if(document.getElementById("inHour").value == hr && document.getElementById("inMinute").value == min) {
//             run_the_clock();
//         }
//     }
// }

// $(document).ready(function(){
//     $('#inMinute').keypress(function(e){
//       if(e.keyCode==13)
//       $('#submit').click();
//       run_the_clock();
//     });
// });
// var interval = setInterval(run_the_clock, 1000);