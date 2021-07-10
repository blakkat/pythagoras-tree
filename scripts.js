const addDivs = () => {
  const emptyDivs = [...document.querySelectorAll(".recursion:empty")];
  emptyDivs.map((div) => {
    div.innerHTML =
      '<div class="recursion a"></div><div class="recursion b"></div>';
  });
};

const howDeep = (x) => (f) => {
  if (x > 0) {
    f();
    howDeep(x - 1)(f);
  }
};

howDeep(10)(() => addDivs());
