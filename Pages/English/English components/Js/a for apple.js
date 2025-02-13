const alphabetData = [
    { letter: "A", word: "Apple", image: "../../../../asset/English/A for apple/Apple.jpg", sound: "../../../../asset/English/A for apple/a.mp3" },
    { letter: "B", word: "Ball", image: "../../../../asset/English/A for apple/BALL.jpg", sound: "../../../../asset/English/A for apple/b.mp3" },
    { letter: "C", word: "Cat", image: "../../../../asset/English/A for apple/cat.jpg", sound: "../../../../asset/English/A for apple/c.mp3" },
    { letter: "D", word: "Dog", image: "../../../../asset/English/A for apple/dog.jpg", sound: "../../../../asset/English/A for apple/d.mp3" },
    { letter: "E", word: "elephant", image: "../../../../asset/English/A for apple/elephant.jpg", sound: "../../../../asset/English/A for apple/e.mp3" },
    { letter: "F", word: "fish", image: "../../../../asset/English/A for apple/fish.jpg", sound: "../../../../asset/English/A for apple/f.mp3" },
    { letter: "G", word: "graps", image: "../../../../asset/English/A for apple/graps.jpg", sound: "../../../../asset/English/A for apple/g.mp3" },
    { letter: "H", word: "horse", image: "../../../../asset/English/A for apple/horse.jpg", sound: "../../../../asset/English/A for apple/h.mp3" },
    { letter: "I", word: "inkpot", image: "../../../../asset/English/A for apple/inkpot.jpg", sound: "../../../../asset/English/A for apple/i.mp3" },
    { letter: "J", word: "jug", image: "../../../../asset/English/A for apple/jug.jpg", sound: "../../../../asset/English/A for apple/j.mp3" },
    { letter: "K", word: "kite", image: "../../../../asset/English/A for apple/kite.jpg", sound: "../../../../asset/English/A for apple/k.mp3" },
    { letter: "L", word: "lion", image: "../../../../asset/English/A for apple/lion.jpg", sound: "../../../../asset/English/A for apple/l.mp3" },
    { letter: "M", word: "monkey", image: "../../../../asset/English/A for apple/monkey.jpg", sound: "../../../../asset/English/A for apple/m.mp3" },
    { letter: "N", word: "nest", image: "../../../../asset/English/A for apple/nest.jpg", sound: "../../../../asset/English/A for apple/n.mp3" },
    { letter: "O", word: "owl", image: "../../../../asset/English/A for apple/owl.jpg", sound: "../../../../asset/English/A for apple/o.mp3" },
    { letter: "P", word: "parrot", image: "../../../../asset/English/A for apple/parrot.jpg", sound: "../../../../asset/English/A for apple/p.mp3" },
    { letter: "Q", word: "queen", image: "../../../../asset/English/A for apple/queen.jpg", sound: "../../../../asset/English/A for apple/q.mp3" },
    { letter: "R", word: "rat", image: "../../../../asset/English/A for apple/rat.jpg", sound: "../../../../asset/English/A for apple/r.mp3" },
    { letter: "S", word: "sun", image: "../../../../asset/English/A for apple/sun.jpg", sound: "../../../../asset/English/A for apple/s.mp3" },
    { letter: "T", word: "telephone", image: "../../../../asset/English/A for apple/telephone.jpg", sound: "../../../../asset/English/A for apple/t.mp3" },
    { letter: "U", word: "umberlla", image: "../../../../asset/English/A for apple/umberlla.jpg", sound: "../../../../asset/English/A for apple/u.mp3" },
    { letter: "V", word: "van", image: "../../../../asset/English/A for apple/van.jpg", sound: "../../../../asset/English/A for apple/v.mp3" },
    { letter: "W", word: "watch", image: "../../../../asset/English/A for apple/watch.jpg", sound: "../../../../asset/English/A for apple/w.mp3" },
    { letter: "X", word: "x-ray", image: "../../../../asset/English/A for apple/x-ray.jpg", sound: "../../../../asset/English/A for apple/x.mp3" },
    { letter: "Y", word: "yoga", image: "../../../../asset/English/A for apple/yoga.jpg", sound: "../../../../asset/English/A for apple/y.mp3" },    
    { letter: "Z", word: "zebra", image: "../../../../asset/English/A for apple/zebra.jpg", sound: "../../../../asset/English/A for apple/z.mp3" },
  ];
  
  const alphabetContainer = document.getElementById("alphabet-container");
  
  function playSound(soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play();
  }
  
  alphabetData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${item.image}" alt="${item.word}">
      <span>${item.letter} for ${item.word}</span>
    `;
  
    card.addEventListener("click", () => {
      playSound(item.sound);
    });
  
    alphabetContainer.appendChild(card);
  });