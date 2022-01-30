const nav = document.querySelector('nav');

// 첫 번째 방법
// 스크롤 이벤트가 발생했을 때

    // 현재 스크롤 위치를 가져온다.

    // 스크롤 위치를 바탕으로 active 클래스를 추가하거나 제거한다.

// Write JS Code Here!
// window.addEventListener("scroll", (e) => {
//     const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//     (top >= 50)
//         ? nav.classList.add("active")
//         : nav.classList.remove("active")
// });

// 두 번째 방법
let oldValue = 0;

// 스크롤 이벤트가 발생했을 때

// 현재 스크롤 위치를 가져온다.

// oldValue, 스크롤의 위치와 연산 작업을 하여 active 클래스를 추가하거나 제거한다.

// oldValue를 스크롤 위치로 변경한다.

//Write JS Code Here!

// window.addEventListener("scroll", (e) => {
//     const newValue = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//     if (oldValue - newValue < 0) {
//         nav.classList.add("active");
//     }
//     if (oldValue - newValue > 0) {
//         nav.classList.remove("active")
//     }
//     oldValue = newValue;
// });

// 세 번째 방법 (wheel은 firefox에서 지원되지 않음)
const isFireFox = (navigator.userAgent.indexOf("Firefox") !== -1);
const wheelEvt = isFireFox ? "DOMMouseScroll" : "wheel";
window.addEventListener(wheelEvt, mouseWheelEvent);

function mouseWheelEvent(e) {
    const delta = e.deltaY ? e.deltaY : -e.detail;
    (delta > 0)
        ? nav.classList.add("active")
        : nav.classList.remove("active");
}
