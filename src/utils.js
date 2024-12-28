export const debounce = (fn, delay) => {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

export function getRandomChar(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
