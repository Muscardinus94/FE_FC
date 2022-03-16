// 필요한 Dom Selector
const $stars = document.querySelector('.stars')
const $score = document.querySelector('.score')
const $reset = document.querySelector('.reset')

// 별의 갯수 = Score
const MAX_SCORE = 5

// 별의 현재 점수 상태
const state = {
  score: 0,
}

// 별의 갯수만큼 별 DOM 추가 (별은 empty, half, full 클래스를 가질수 있음)
Array(MAX_SCORE)
  .fill()
  .forEach(() => {
    const star = document.createElement('div')
    star.className = 'star empty'
    $stars.appendChild(star)
  })

// Write your solution here.
const setDisplayScore = (score) => {
    const starList = [...$stars.children];
    starList.forEach((star, i) => {
       if (score > i) {
           if (score - i === 0.5) star.className = "star half";
           else star.className = "star full";
       } else {
           star.className = "star empty";
       }
    });
}

const setScore = (score) => {
    setDisplayScore(score);
    state.score = score;
    $score.textContent = score;
}

const calculateScore = (e) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const scale = width / MAX_SCORE / 2;
    return Math.floor(x / scale + 1) / 2;
}

$stars.addEventListener("click", (e) => {
    setScore(calculateScore(e));
});

$stars.addEventListener("mousemove", (e) => {
    const score = calculateScore(e);
    setScore(calculateScore(e));
    setDisplayScore(score);
});

$stars.addEventListener("mouseleave", (e) => {
   setDisplayScore(state.score);
});

$reset.addEventListener("click", (e) => {
    setScore(0);
})
