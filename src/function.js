const dripCount = 15;
const main = document.querySelector("body");
const container = document.createElement('div');

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

  
for (var i = 0; i <= dripCount; i++) {
  const dimension = getRandomInt(30, 500);
  const delay = getRandomInt(0, 7);
  const left = getRandomInt(-2, 90);
  const drop = document.createElement('div');
  
  drop.classList.add("drip");
  drop.style.height = dimension.toString() +"px";
  drop.style.width = dimension.toString() +"px";
  drop.style.left = left.toString() +"%";
  drop.style['animation-delay'] = delay.toString() +"s";
  
  container.appendChild(drop);
}

container.classList.add('cont');
main.appendChild(container);