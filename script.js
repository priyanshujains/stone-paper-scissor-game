var stone = document.querySelector(".stone");
var paper = document.querySelector(".paper");
var scessor = document.querySelector(".scessor");
var result = document.querySelector(".result h1");
var userr = document.querySelector("#you h1");
var comp = document.querySelector("#comp h1");
var navname = document.querySelector(".nav-name h3 b");
var navtime = document.querySelector(".nav-time h3 span");
var navtimesec = document.querySelector(".nav-time h3 b");

var userkanam = "";
var userkatime = 0;
var min = userkatime;

var attempts = document.querySelector(".attempts b");
var youwon = document.querySelector(".youwon b");
var you = document.querySelector(".youwon span")
var computerwon = document.querySelector(".computerwon b");
var drawwon = document.querySelector(".drawwon b");
var retry = document.querySelector("#re");
var exit = document.querySelector("#ex");


document.querySelector(".box button").addEventListener("click", function () {
  document.querySelector(".page2").style.display="block"
  userkanam = document.querySelector(".box #name").value;
  userkatime = parseInt(document.querySelector(".box #time").value);
  min = userkatime;
  console.log(userkatime, min);

  if (userkanam.length > 0 && userkatime > 0) {
    document.querySelector(".page1").style.display = "none";
    navname.innerHTML = userkanam;
    navtime.innerHTML = userkatime;

    var sec = 0;

    var timer = setInterval(function () {
      if (min == 0 && sec == 0) {
        document.querySelector(".page2").style.display = "none";
        document.querySelector(".page3").style.display = "block";
        attempts.innerHTML=(scorecomputer+scoreuser+draw);
        youwon.innerHTML=scoreuser;
        you.innerHTML=userkanam
        computerwon.innerHTML=scorecomputer;
        drawwon.innerHTML=draw;

        
        clearInterval(timer);
      } else if (sec == 0) {
        min--;
        sec = 60;
        navtime.innerHTML = min;
      } else {
        sec--;
      }

      if (sec.toString().length > 1) {
        navtimesec.innerHTML = sec;
      } else {
        navtimesec.innerHTML = `0${sec}`;
      }
    }, 1000);
  } else {
    document.querySelector(".box #name").style.backgroundColor = "pink";
    document.querySelector(".box #name").placeholder = "Plz enter name";
    document.querySelector(".box #time").style.backgroundColor = "pink";
    document.querySelector(".box #time").placeholder = "Plz enter time";
    

    setTimeout(function () {
      document.querySelector(".box #name").style.backgroundColor = "white";
      document.querySelector(".box #name").placeholder = "Enter your name";
      document.querySelector(".box #name").value = "";
    }, 800);

    
    setTimeout(function () {
      document.querySelector(".box #time").style.backgroundColor = "white";
      document.querySelector(".box #time").placeholder = "Enter your time";
      document.querySelector(".box #time").value = "";
    }, 800);
  }
});

var user = 0;
var computer = 0;

var scoreuser = 0;
var scorecomputer = 0;
var draw = 0;

stone.addEventListener("click", function () {
  user = 1;
  computer = Math.floor(((Math.random() * 10) % 3) + 1);

  if (computer == 2) {
    result.innerHTML = "Computer won the game";
    scorecomputer++;
    comp.innerHTML = scorecomputer;
  } else if (computer == 3) {
    result.innerHTML = "you won the game";
    scoreuser++;
    userr.innerHTML = scoreuser;
  } else {
    result.innerHTML = "Match is draw";
    draw++;
  }

  setTimeout(function () {
    stone.style.backgroundColor = "transparent";
  }, 1000);

  stone.style.backgroundColor = "red";

  paper.style.backgroundColor = "transparent";
  scessor.style.backgroundColor = "transparent";
});

paper.addEventListener("click", function () {
  user = 2;
  computer = Math.floor(((Math.random() * 10) % 3) + 1);

  if (computer == 1) {
    setTimeout(function () {
      result.innerHTML = "you won the game";
      scoreuser++;
      userr.innerHTML = scoreuser;
    }, 1000);
  } else if (computer == 3) {
    setTimeout(function () {
      result.innerHTML = "computer won the game";
      scorecomputer++;
      comp.innerHTML = scorecomputer;
    }, 1000);
  } else {
    setTimeout(function () {
      result.innerHTML = "Match is Draw";
      draw++;
    }, 1000);
  }

  setTimeout(function () {
    paper.style.backgroundColor = "transparent";
  }, 1000);

  stone.style.backgroundColor = "transparent";
  paper.style.backgroundColor = "red";
  scessor.style.backgroundColor = "transparent";
});

scessor.addEventListener("click", function () {
  user = 3;
  computer = Math.floor(((Math.random() * 10) % 3) + 1);

  if (computer == 1) {
    setTimeout(function () {
      result.innerHTML = "computer won the game";
      scorecomputer++;
      comp.innerHTML = scorecomputer;
    }, 1000);
  } else if (computer == 2) {
    setTimeout(function () {
      result.innerHTML = "you won the game";
      scoreuser++;
      userr.innerHTML = scoreuser;
    }, 1000);
  } else {
    setTimeout(function () {
      result.innerHTML = "match is draw";
      draw++;
    }, 1000);
  }
  setTimeout(function () {
    scessor.style.backgroundColor = "transparent";
  }, 1000);

  stone.style.backgroundColor = "transparent";
  paper.style.backgroundColor = "transparent";
  scessor.style.backgroundColor = "red";
});





exit.addEventListener("click",function(){
  document.querySelector(".page3").style.display = "none";
  document.querySelector(".page1").style.display= "block";
  document.querySelector(".page1 #name").value=""
    document.querySelector(".page1 #time").value = "";

})

retry.addEventListener("click",function(){
   document.querySelector(".page3").style.display = "none";
    document.querySelector(".page2").style.display = "block";
    scorecomputer=0;
    scorecomputer=0;
    draw=0;
    min=userkatime
    var sec=0;
      var timer = setInterval(function () {
        if (min == 0 && sec == 0) {
          document.querySelector(".page2").style.display = "none";
          document.querySelector(".page3").style.display = "block";
          attempts.innerHTML = scorecomputer + scoreuser + draw;
          youwon.innerHTML = scoreuser;
          you.innerHTML = userkanam;
          computerwon.innerHTML = scorecomputer;
          drawwon.innerHTML = draw;

          clearInterval(timer);
        } else if (sec == 0) {
          min--;
          sec = 60;
          navtime.innerHTML = min;
        } else {
          sec--;
        }

        if (sec.toString().length > 1) {
          navtimesec.innerHTML = sec;
        } else {
          navtimesec.innerHTML = `0${sec}`;
        }
      }, 1000);
})


