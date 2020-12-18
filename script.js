
const $balls = document.querySelectorAll('.ball');
const $ballrows = document.querySelectorAll('.ballrows');
const $eyes = document.querySelectorAll('.pupil');

document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerwidth + '%'
  let y = (event.clientY * 100) / window.innerwidth + '%'
  $eyes.forEach((eye) => {
    eye.style.left = x;
    eye.style.top = y;
    eye.style.fransfrom = 'translate(-' + x + ', -' + y + ')'
  })

}
// function showCoords(event) {
//   var x = event.clientX;
//   var y = event.clientY;
//   var coords = "X coords: " + x + ", Y coords: " + y;
//   document.getElementById("demo").innerHTML = coords;
// }



//each ball -> 
$balls.forEach((ball) =>
  ball.addEventListener(onclick, function (ball) {
    ball.classList.add('clicked');
  })
);



// 1. 공을 클릭했을 때 display:none가 되게끔 CSS 작업 <-- 클릭시 ball 이 숫자가 붙은 ball1 로 바뀌면서 ball1은 display:none
// 2. ball-rows를 querySelector로 가져와서 클릭을 받는 인자로
// 3. ball-rows가 클릭되었을 때 변하는 것은 ball

// system
// if 첫 턴이면 just go 가능 (턴 넘기기)
// 둘째턴부터는 반드시 하나이상 선택해야 턴 넘길 수 이
// Array 안에 0이 있으면 지우고, 없으면 미동작
// Array[i]를 건드리면 그 외 다른 Array는 클릭이 불가능
// 모든 Array에 0이 없으면 gameover
const ballObject = [
  [0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];


