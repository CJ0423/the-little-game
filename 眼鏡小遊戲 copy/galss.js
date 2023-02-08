const glass = document.querySelector("#glass");
let word = document.querySelectorAll(".word");
const words =document.querySelector("#words")
const answear=document.querySelectorAll(".answer")
console.table(answear)
let number=0
let position=[]
const mapping = {
  'A': 'D',
  'B': 'E',
  'C': 'F',
  'D': 'G',
  'E': 'H',
  'F': 'I',
  'G': 'J',
  'H': 'K',
  'I': 'L',
  'J': 'M',
  'K': 'N',
  'L': 'O',
  'M': 'P',
  'N': 'Q',
  'O': 'R',
  'P': 'S',
  'Q': 'T',
  'R': 'U',
  'S': 'V',
  'T': 'W',
  'U': 'X',
  'V': 'Y',
  'W': 'Z',
  'X': 'A',
  'Y': 'B',
  'Z': 'C',
  };

for(i=0;i<=25;i++){
  position[i]=word[i].offsetLeft
}

let isMove = false;

function startTracking(e) {
  isMove = !isMove;
  if (isMove) {
    glass.style.left = `${e.clientX - glass.offsetWidth / 2}px`;
    glass.style.top = `${e.clientY - glass.offsetHeight / 2}px`;
    glass.addEventListener("mousemove", followMouse);
  } else {
    glass.removeEventListener("mousemove", followMouse);
    word.forEach((w) => {
      if (e.clientX >= w.offsetLeft && e.clientX <= w.offsetLeft + w.offsetWidth &&
        e.clientY >= w.offsetTop && e.clientY <= w.offsetTop + w.offsetHeight)
        {
          answear[number].innerHTML=mapping[w.innerText] || '無對應字母';
          number++
        }
    });
  }
}

function followMouse(e) {
  glass.style.left = `${e.clientX - glass.offsetWidth / 4.6}px`;
  glass.style.top = `${e.clientY - glass.offsetHeight / 2}px`;
}

glass.addEventListener("mousedown", startTracking);

glass.addEventListener("touchstart", function(event) {
  event.preventDefault();
  let touch = event.touches[0];
  startTracking(touch.clientX, touch.clientY);
});

glass.addEventListener("touchmove", function(event) {
  event.preventDefault();
  let touch = event.touches[0];
  followMouse(touch.clientX, touch.clientY);
});
