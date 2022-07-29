import AnimeCard from "./deck.js";
const naruto = new AnimeCard(
  1,
  "Naruto Uzumaki",
  69,
  70,
  25,
  "../images/naruto.jpg"
);

const luffy = new AnimeCard(
  2,
  "Monkey D Luffy",
  90,
  80,
  10,
  "../images/luffy.jpg"
);
const zoro = new AnimeCard(3, "Zoro", 80, 70, 20, "../images/luffy.jpg");
const sasuke = new AnimeCard(
  4,
  "Sasuke Uchicha",
  69,
  74,
  60,
  "../images/Sasuke1.jpg"
);
const sanji = new AnimeCard(5, "Sanji", 69, 70, 40, "../images/sanji.jpg");
const sakura = new AnimeCard(6, "Sakura", 40, 30, 60, "../images/sakura.jpg");
const saitama = new AnimeCard(
  7,
  "Saitama",
  100,
  100,
  30,
  "../images/saitama.jpg"
);
const genos = new AnimeCard(8, "Genos", 50, 50, 75, "../images/Genos.jpg");
const kakashi = new AnimeCard(
  9,
  "Kakashi Hatake",
  50,
  45,
  60,
  "../images/kakashi.jpg"
);
const meliodas = new AnimeCard(
  10,
  "Meliodas",
  60,
  65,
  40,
  "../images/meliodas.jpg"
);

const ban = new AnimeCard(11, "Ban", 55, 43, 30, "../images/ban.jpg");
const escanor = new AnimeCard(
  12,
  "Escanor",
  78,
  65,
  45,
  "../images/escanor.jpg"
);

const whitebeard = new AnimeCard(
  13,
  "Edward Newgate",
  80,
  50,
  50,
  "../images/whitebeard.jpg"
);
const goku = new AnimeCard(14, "Goku", 90, 95, 40, "../images/goku.jpg");
const jiraya = new AnimeCard(15, "Jiraya", 60, 55, 30, "../images/jiraya.jpg");
const kaneki = new AnimeCard(16, "Kaneki", 40, 35, 30, "../images/kaneki.jpg");
const light = new AnimeCard(
  17,
  "Light Yagami",
  10,
  05,
  99,
  "../images/light.jpg"
);
const shikamaru = new AnimeCard(
  18,
  "Shikamaru",
  47,
  35,
  80,
  "../images/shikamaru.jpg"
);
const madara = new AnimeCard(
  19,
  "Madara Uchiha",
  78,
  78,
  78,
  "../images/madara.jpg"
);
const orochimaru = new AnimeCard(
  20,
  "Orochimaru",
  47,
  55,
  66,
  "../images/orochimaru.jpg"
);
const itachi = new AnimeCard(
  21,
  "Itachi Uchiha",
  70,
  68,
  54,
  "../images/itachi.jpg"
);
const kaidou = new AnimeCard(22, "Kaidou", 79, 80, 61, "../images/Kaidou.jpg");
const gojo = new AnimeCard(23, "Gojo Satoru", 58, 47, 37, "../images/gojo.jpg");
const natsu = new AnimeCard(
  24,
  "Natsu Dragneel",
  39,
  43,
  23,
  "../images/natsu.jpg"
);
const eren = new AnimeCard(25, "Eren Yeager", 47, 25, 69, "../images/eren.jpg");
const shinra = new AnimeCard(26, "Shinra", 43, 32, 21, "../images/shinra.jpg");
const gon = new AnimeCard(27, "Gon Freecess", 35, 33, 35, "../images/gon.jpg");
const tanjiro = new AnimeCard(
  28,
  "Tanjiro",
  34,
  34,
  31,
  "../images/tanjiro.jpg"
);
const deku = new AnimeCard(29, "Deku", 35, 37, 48, "../images/deku.jpg");
const allMight = new AnimeCard(
  30,
  "All Might",
  45,
  50,
  49,
  "../images/light.jpg"
);

let deckOfCards = {
  naruto,
  luffy,
};
console.log(naruto);
console.log("Hello");
console.log(deckOfCards);
let name = document.getElementById("name");
name.innerText = naruto.name;