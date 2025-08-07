function isPureString(str) {
  if (str.length === 0) return false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "0" && char <= "9") {
      return false;
    }
  }

  return true;
}

let country = prompt("enter contry name");
while (!isPureString(country)) {
  country = prompt("enter contry name");
}

let data = await fetch(`https://restcountries.com/v2/name/${country}`)
  .then((v) => v.json())
  .then((v) => v[0]);
// let data = await c.json();
let pData = await fetch(`https://restcountries.com/v2/name/palestine`)
  .then((p) => p.json())
  .then((v) => v[0]);

console.log(pData);

let nbrData = await fetch(
  `https://restcountries.com/v2/alpha/${data.borders[0]}`
).then((v) => v.json());

if (nbrData.name === "Israel") {
  nbrData = pData;
}

console.log(nbrData);

console.log(data);
let mainCont = document.querySelector(".container");
mainCont.querySelector("img").src = data.flag;
mainCont.querySelector("h1").textContent = data.nativeName;
mainCont.querySelector("h5").textContent = data.region;
mainCont.querySelectorAll("p")[0].querySelectorAll("span")[1].textContent =
  data.population + " M";
data.population;
mainCont.querySelectorAll("p")[1].querySelectorAll("span")[1].textContent =
  data.languages[0].nativeName;
data.population;
mainCont.querySelectorAll("p")[2].querySelectorAll("span")[1].textContent =
  data.currencies[0].name;
data.population;

let nbrCont = document.querySelector(".nbr");
nbrCont.querySelector("img").src = nbrData.flag;
nbrCont.querySelector("h1").textContent = nbrData.nativeName;
nbrCont.querySelector("h5").textContent = nbrData.region;
console.log(nbrData.population);
console.log(nbrData.languages[0].nativeName);
console.log(nbrData.currencies[0].name);
nbrCont.querySelectorAll("p")[1].querySelectorAll("span")[1].textContent =
  nbrData.population + " M";

nbrCont.querySelectorAll("p")[2].querySelectorAll("span")[1].textContent =
  nbrData.languages[0].nativeName;
nbrCont.querySelectorAll("p")[3].querySelectorAll("span")[1].textContent =
  nbrData.currencies.at(-1).name;
