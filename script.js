
const $balls = document.querySelectorAll('.ball');
const $ballrows = document.querySelectorAll('.ballrows');
const $eyes = document.querySelectorAll('.pupil');
const $start = document.querySelector('.startButton');
const $next = document.querySelector('.nextButton');
const $description = document.querySelectorAll('.description');

// cat eyes rolling around '^'
document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + '%'
  let y = (event.clientY * 100) / window.innerHeight + '%'
  $eyes.forEach((eye) => {
    eye.style.left = x;
    eye.style.top = y;
    eye.style.fransfrom = 'translate(-' + x + ', -' + y + ')'
  })

}


//each ball     click -> 사라짐
// ball이 클릭될때마다 status 저장 (코드 만들어야 됨)
$balls.forEach(function (ball) {
  ball.addEventListener('click', function () {
    ball.classList.add('clicked');
  })
});


//start button   click -> description, start 사라지고 nextturn 표시
$start.addEventListener('click', function () {
  $description.forEach(function (description) {
    description.classList.add('removed');
  });
  $start.classList.add('removed');
  $next.classList.remove('removed');

});

//next button  
//1.첫시작  allBallsInObject === true
//2. 컴퓨터 턴이 끝나면 previous status 저장, ball클릭할때 마다 curr status 확인, if pre !== curr -> do something
$next.addEventListener('click', function () {

  if (allBallsInObject) {

  }

})

// 1. 공을 클릭했을 때 display:none가 되게끔 CSS 작업 <-- 클릭시 ball 이 숫자가 붙은 ball1 로 바뀌면서 ball1은 display:none
// 2. ball-rows를 querySelector로 가져와서 클릭을 받는 인자로
// 3. ball-rows가 클릭되었을 때 변하는 것은 ball

// system
// if 첫 턴이면 just go 가능 (턴 넘기기)
// 둘째턴부터는 반드시 하나이상 선택해야 턴 넘길 수 있음
// Array 안에 0이 있으면 지우고, 없으면 미동작
// Array[i]를 건드리면 그 외 다른 Array는 클릭이 불가능
// 모든 Array에 0이 없으면 gameover

// ball 자체 //
const ballObject = [
  [1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];
const ballRow1 = ballObject[0];
const ballRow2 = ballObject[1];
const ballRow3 = ballObject[2];
const ballRow4 = ballObject[3];

// 모든 공이 들어있는지 확인하는 function ---- 정상작동 확인 완료 //
const allBallsInObject = function (ballObject) {
  let count = 0;
  for (let row = 0; row < 4; row++) {
    for (let ball = 0; ball < ballObject[row].length; ball++) {
      if (ballObject[row][ball] === 1) count++;
    }
  }
  if (count === 18) return true; // true이면 첫 턴
  else return false; // false이면 나머지 턴
};

// ball을 빠지게하는 function
const popBall = function (ballrow) {
  for (let ball = 0; ball < ballrow.length; ball++) {
    if (ballrow[i] === 1) {
      ballrow.splice(i, 1, 0); // 해당 row를 click시에 1을 0으로 변경
    }
  }
}

