function ProgressBar( targetElement ){

  this.targetElement = targetElement; // 타겟 엘리먼트
  this.current = 0; // 현재 스텝의 위치
  this.limit = 4; // 총 스텝의 길이
  this.intervalSpeed = 10; // 애니메이션 스피드
  this.range = 100 / this.limit; // 25% 씩 이동한다.

}

ProgressBar.prototype.movePrev = function(){

    if( this.current  == 0 ) return;

    let start = this.current * this.range;
    this.current--;
    const end = this.current * this.range;


    const intervalId = setInterval(frame, this.intervalSpeed );

    const elem = this.targetElement;

    function frame() {

      // Write JS Code Here!

      // setInterval로 반복하면서
      // 다 줄어들면 clearInterval(intervalId);
      // 그게아니면 width를 늘리는 것을 완성하세요.
        if (start <= end) {
            clearInterval(intervalId);
        } else {
            start--;
            elem.style.width = start + "%";
        }
    }

}


ProgressBar.prototype.moveNext = function(){

  if( this.current  === this.limit ) return;

  let start = this.current * this.range;
  this.current++;
  const end = this.current * this.range;


  const intervalId = setInterval(frame, this.intervalSpeed );

  const elem = this.targetElement;

  function frame() {

    // Write JS Code Here!
      // setInterval로 반복하면서
      // 다채우면 clearInterval(intervalId);
      // 그게아니면 width를 늘리는 것을 완성하세요.
      if (start >= end) {
          clearInterval(intervalId);
      } else {
          start++;
          elem.style.width = start + "%";
      }
  }


}


document.addEventListener("DOMContentLoaded", function(){

  const targetElement = document.querySelector('.progress-bar span');
  const progressBar = new ProgressBar(targetElement);

  document.querySelector('#prev').addEventListener('click' , function(){
    progressBar.movePrev();
  });

  document.querySelector('#next').addEventListener('click' , function(){
    progressBar.moveNext();
  });


});
