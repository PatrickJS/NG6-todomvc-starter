
export default function () {

  return function (scope, el) {
    setTimeout(() => {
      el[0].focus();
    }, 0);
  }
}
