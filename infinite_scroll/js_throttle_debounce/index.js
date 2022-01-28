import "./style.css";
import renderList from "./listRenderer";
import { debounce } from "./util";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

const onScroll = e => {
  // 키워드: scrollHeight(offsetHeight) / scrollTop / clientHeight
  // 가장 밑으로 내려갔을때 scrollHeight = scrollTop + clientHeight
  // do something (hint: e.target.scrollingElement)
  // console.dir(e.target.scrollingElement)
  const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
  if (scrollTop + clientHeight === scrollHeight) {
    loadMore();
  }
};
// 위 방식으로만 해서 eventListener를 하면 scroll event 마다 해야해서 성능상 문제가 있다.
// 해결책: throttle, debounce
// 연속으로 발행하는 이벤트에 대해서
// throttle: 일정 시간 간격으로 한번씩만 실행
// debounce: 마지막 한번만 실행

document.addEventListener("scroll", debounce(onScroll, 300));
loadMore();
