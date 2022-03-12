const API_URL = 'https://api.thecatapi.com/v1/breeds/search';

const debounce = (targetFunction, debounceTime = 500) => {
  //가장 마지막 타이핑이 일어나고 0.5초 뒤에 API Request를 실행하도록 하는 debounce logic을 작성하시오.
  //Write Debounce logic here!
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(targetFunction.bind(null, ...args), debounceTime);
  }
};

const LOADING_EVENT_NAME = 'loading';
const $searchInput = document.querySelector('.SearchInput');
const $loadingIndicator = document.querySelector('.LoadingIndicator');
const $textList = document.querySelector('.TextList');
const $infoParagraph = document.querySelector('.InfoParagraph');

$searchInput.addEventListener('keyup', debounce(async (event) => {
    // Write codes here!
    const query = event.target.value;

    if (!query) return;

    $loadingIndicator.style.visibility = "visible";
    const response = await fetch(`${API_URL}?q=${query}`);
    const cats = await response.json();
    $loadingIndicator.style.visibility = "hidden";

    if (!cats.length) {
      $textList.innerHTML = "";
      $textList.style.visibility = "hidden";
      $infoParagraph.innerHTML = "해당하는 검색어가 없습니다..!";
      return;
    }

    $textList.innerHTML = cats.slice(0, 5)
                              .map((cat) => `<li>${cat.name}</li>`)
                              .join("");
    $textList.style.visibility = "visible";
    $infoParagraph.innerHTML = "";
  })
);
