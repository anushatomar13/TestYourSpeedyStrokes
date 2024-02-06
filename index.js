"use strict";

var typeArea = document.getElementById('typing-area');
var timeArea = document.getElementById('score');
var textContainer = document.getElementById('text-text');
var resultCont = document.getElementById('result');
var wpm = document.getElementById('wordpm');
// var accuracy = document.getElementById("accuracy");
var cont = document.getElementById('container');
var tWords = document.getElementById('tTyped');
var cWord = document.getElementById('cWord');
var correct = document.getElementById('correct');
var wrong = document.getElementById('wrong');
var get_time_input = document.getElementById('time_select');
var restart = document.getElementById("restart");
var stop_get_result = document.getElementById("stop_timer");

var restart_check = false;
var time;
let oneTimeClick = true;
var correctWords = 0;
var wrongWords = 0;
var totalWords = 0;
var currentWord = 0;
var typingParagraph = [
  "C language is one of the most popular computer languages today because it is a structured, high level, machine independent language. It allows software developers to develop programs without worring about hardware platforms where they will be implemented. C is called a high level, compiler language. The aim of any high level computer language is to provide an easy and natural way of giving a programme of instructions to a computerC is one of a large number of high level languages which can be used for general purpose programming, i.3., anything from writing small programms for personal amusement to writing complex applications. It is unusual in several ways.Before C, hight level languages were criticized by machine code programmers because they shielded the user from the working details of the computer. The C language has been equipped with features that allow programs to be organized in an easy and logical way. This is vitally important for writing lengthy programs because complex problems are only manageable with a clear organization and program structure. C allows meaningful variable names and meaningful function names to be used in programs without any loss of efficiency and it gives a complete freedom of style, it has a set of very flexible loop constructions and neat ways of making decisions. These provide an excellent basis for controlling the flow of programs. Another feature of C is the way it can express ideas concisely. The richness of a languageshapes what it can talk about.C language is one of the most popular computer languages today because it is a structured, high level, machine independent language. It allows software developers to develop programs without worring about hardware platforms where they will be implemented. C is called a high level, compiler language. The aim of any high level computer language is to provide an easy and natural way of giving a programme of instructions to a computerC is one of a large number of high level languages which can be used for general purpose programming, i.3., anything from writing small programms for personal amusement to writing complex applications. It is unusual in several ways.Before C, hight level languages were criticized by machine code programmers because they shielded the user from the working details of the computer. The C language has been equipped with features that allow programs to be organized in an easy and logical way. This is vitally important for writing lengthy programs because complex problems are only manageable with a clear organization and program structure. C allows meaningful variable names and meaningful function names to be used in programs without any loss of efficiency and it gives a complete freedom of style, it has a set of very flexible loop constructions and neat ways of making decisions. These provide an excellent basis for controlling the flow of programs. Another feature of C is the way it can express ideas concisely. The richness of a languageshapes what it can talk about."];



typeArea.addEventListener('click', timer);



typeArea.addEventListener('click', timer);


restart.addEventListener('click', () => {

  if (restart_check) {
    
    clearInterval(time);
    oneTimeClick = true;
    currentWord = 0;
    updateText(currentWord);
    timeArea.innerText = "Ready To Start";
    tWords.innerText = 0;
    correct.innerText = 0;
    wrong.innerText = 0;

  }

});



stop_get_result.addEventListener('click', () => {

  oneTimeClick = true;
  clearInterval(time);
  timeArea.innerText = "Result!";
  cont.style.display = "none";
  resultCont.style.display = "block";
  wpm.innerText = currentWord;

  if (currentWord === 0) {
    accuracy.innerText = "0%";

  } else {

    
    let final_accuray = calculateAccuracy(correctWords, currentWord);

    if (final_accuray === "NaN") {
      accuracy.innerText = "0%";
    }
    else if (final_accuray >= 95) {
      accuracy.innerText = final_accuray + "%";
      accuracy.style.backgroundColor = "green";
    }
    else {
      accuracy.innerText = final_accuray + "%";
    }

  }

});


function timer() {
  var seconds = get_time_input.value * 60;

  if (oneTimeClick) {
    oneTimeClick = false;
    restart_check = true;

    time = setInterval(function () {
      timeArea.innerText = seconds;

      if (seconds == 0) {
        oneTimeClick = true;
        clearInterval(time);
        timeArea.innerText = "Result!";
        cont.style.display = "none";
        resultCont.style.display = "block";
        wpm.innerText = currentWord;

        if (currentWord === 0) {
          accuracy.innerText = "0%";

        } else {

          let final_accuray = calculateAccuracy(correctWords, currentWord);

          if (final_accuray === "NaN") {
            accuracy.innerText = "0%";
          }
          else if (final_accuray >= 95) {
            accuracy.innerText = final_accuray + "%";
            accuracy.style.backgroundColor = "green";
          }
          else {
            accuracy.innerText = final_accuray + "%";
          }
        }

      }

      seconds--;
    }, 1000)
  }


}


updateText(currentWord);



function updateText(start) {
  textContainer.innerText = "";
  cWord.innerText = typingParagraph[0].split(" ")[start];
  for (var i = start + 1; i < start + 19; i++) {
    textContainer.innerText += " " + typingParagraph[0].split(' ')[i];
  }
}


typeArea.onkeyup = function () {
  var typedWord = this.value;
  var check = typedWord.split(' ').length;
  if (check == 2) {
    variefy(this.value);
    this.placeholder = "";
    this.value = "";
  }
}


function variefy(val) {
  var val = val.trim();
  if (val == typingParagraph[0].split(' ')[currentWord]) {
    currentWord++;
    correctWords++;
    correct.innerText = correctWords;
    wrong.innerText = wrongWords;
    tWords.innerText = currentWord;
    updateText(currentWord);
  }
  else {
    currentWord++;
    wrongWords++;
    correct.innerText = correctWords;
    wrong.innerText = wrongWords;
    tWords.innerText = currentWord;
    updateText(currentWord);
  }
}


function calculateAccuracy(c, d) {
  var acc = (c / d);
  acc = Math.ceil((acc * 100));
  return acc;
}

window.onresize = function () {

  if (window.innerWidth < 450) {
    alert("Please use wide screen more than 450px for better Experiance!")
  }


}
