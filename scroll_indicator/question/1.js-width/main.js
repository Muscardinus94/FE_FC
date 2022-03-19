const scrollBar = document.getElementById('scroll-bar');

// 첫 번째 방법 (1) : width 크기를 변경

window.addEventListener('scroll', function () {
    // Write JS Code Here!
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 문서 전체 높이
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // 화면의 높이
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // 실제 남은 길이
    const contentHeight = scrollHeight - clientHeight;
    const percent = (scrollTop / contentHeight) * 100;
    scrollBar.style.width = `${percent}%`
})

// 두 번째 방법 (2) : translateX 활용

// window.addEventListener('scroll', function () {
//     // Write JS Code Here!
//     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     // 문서 전체 높이
//     const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//     // 화면의 높이
//     const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
//     // 실제 남은 길이
//     const contentHeight = scrollHeight - clientHeight;
//     const percent = (scrollTop / contentHeight) * 100;
//     scrollBar.style.transform = `translateX(-${100 - percent}%)`;
//     scrollBar.style.transition = `transform 0.3 ease-out`;
// })
