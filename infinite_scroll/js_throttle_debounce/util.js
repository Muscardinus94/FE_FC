const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

export const randomTimer = (func, ...args) => (resolve) => {
  setTimeout(() => resolve(func(...args)), getRandomSeconds());
};

export const dummyFetcher = (method, args) =>
  new Promise(randomTimer(method, args));

// 계속해서 이벤트를 취소 및 최신화하다가 마지막 setTimeout만 남게된다.
export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  }
}
