export const renderDrip = () => {
  const dripCount = 15;
  const main = document.querySelector("body");
  const container = document.createElement("div");

  if (!main) return;

  for (let i = 0; i <= dripCount; i++) {
    const dimension = getRandomInt(30, 500);
    const delay = getRandomInt(1, 12);
    const left = getRandomInt(-2, 90);
    const drop = document.createElement("div");

    drop.classList.add("drip");
    drop.style.height = dimension.toString() + "px";
    drop.style.width = dimension.toString() + "px";
    drop.style.left = left.toString() + "%";
    drop.style.animationDelay = delay.toString() + "s";

    container.appendChild(drop);
  }

  container.classList.add("cont");
  main.appendChild(container);
};

const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};
