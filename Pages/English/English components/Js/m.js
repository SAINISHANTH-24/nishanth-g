const months = [
  { name: "January", img: "../../../../asset/English/English month/1.jpg", audio: "../../../../asset/English/English month/j.mp3" },
  { name: "February", img: "../../../../asset/English/English month/2.jpg", audio: "../../../../asset/English/English month/f.mp3" },
  { name: "March", img: "../../../../asset/English/English month/3.jpg", audio: "../../../../asset/English/English month/m.mp3" },
  { name: "April", img: "../../../../asset/English/English month/4.jpg", audio: "../../../../asset/English/English month/a.mp3" },
  { name: "May", img: "../../../../asset/English/English month/5.jpg", audio: "../../../../asset/English/English month/ma.mp3" },
  { name: "June", img: "../../../../asset/English/English month/6.jpg", audio: "../../../../asset/English/English month/ju.mp3" },
  { name: "July", img: "../../../../asset/English/English month/7.jpg", audio: "../../../../asset/English/English month/jul.mp3" },
  { name: "August", img: "../../../../asset/English/English month/8.jpg", audio: "../../../../asset/English/English month/aug.mp3" },
  { name: "September", img: "../../../../asset/English/English month/9.jpg", audio: "../../../../asset/English/English month/s.mp3" },
  { name: "October", img: "../../../../asset/English/English month/10.jpg", audio: "../../../../asset/English/English month/o.mp3" },
  { name: "November", img: "../../../../asset/English/English month/11.jpg", audio: "../../../../asset/English/English month/n.mp3" },
  { name: "December", img: "../../../../asset/English/English month/12.jpg", audio: "../../../../asset/English/English month/d.mp3" },
];


const app = document.getElementById("app");

months.forEach((month) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = month.img;
  img.alt = month.name;
  card.appendChild(img);

  const name = document.createElement("h2");
  name.textContent = month.name;
  card.appendChild(name);

  card.addEventListener("click", () => {
    const audio = new Audio(month.audio);
    audio.play();
  });

  app.appendChild(card);
});
