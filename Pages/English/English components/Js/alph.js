const alphabets = [
    { letter: 'A', sound: '../../../../asset/English/A b c aplabhet/a.mp3' },
    { letter: 'B', sound: '../../../../asset/English/A b c aplabhet/b.mp3' },
    { letter: 'C', sound: '../../../../asset/English/A b c aplabhet/c.mp3' },
    { letter: 'D', sound: '../../../../asset/English/A b c aplabhet/d.mp3' },
    { letter: 'E', sound: '../../../../asset/English/A b c aplabhet/e.mp3' },
    { letter: 'F', sound: '../../../../asset/English/A b c aplabhet/f.mp3' },
    { letter: 'G', sound: '../../../../asset/English/A b c aplabhet/g.mp3' },
    { letter: 'H', sound: '../../../../asset/English/A b c aplabhet/h.mp3' },
    { letter: 'I', sound: '../../../../asset/English/A b c aplabhet/i.mp3' },
    { letter: 'J', sound: '../../../../asset/English/A b c aplabhet/j.mp3' },
    { letter: 'K', sound: '../../../../asset/English/A b c aplabhet/k.mp3' },
    { letter: 'L', sound: 'l../../../../asset/English/A b c aplabhet/.mp3' },
    { letter: 'M', sound: '../../../../asset/English/A b c aplabhet/m.mp3' },
    { letter: 'N', sound: '../../../../asset/English/A b c aplabhet/n.mp3' },
    { letter: 'O', sound: '../../../../asset/English/A b c aplabhet/o.mp3' },
    { letter: 'P', sound: '../../../../asset/English/A b c aplabhet/p.mp3' },
    { letter: 'Q', sound: 'q../../../../asset/English/A b c aplabhet/.mp3' },
    { letter: 'R', sound: '../../../../asset/English/A b c aplabhet/r.mp3' },
    { letter: 'S', sound: '../../../../asset/English/A b c aplabhet/s.mp3' },
    { letter: 'T', sound: '../../../../asset/English/A b c aplabhet/t.mp3' },
    { letter: 'U', sound: 'u../../../../asset/English/A b c aplabhet/.mp3' },
    { letter: 'V', sound: 'v../../../../asset/English/A b c aplabhet/.mp3' },
    { letter: 'W', sound: '../../../../asset/English/A b c aplabhet/w.mp3' },
    { letter: 'X', sound: '../../../../asset/English/A b c aplabhet/x.mp3' },
    { letter: 'Y', sound: '../../../../asset/English/A b c aplabhet/y.mp3' },
    { letter: 'Z', sound: 'z../../../../asset/English/A b c aplabhet/.mp3' }
    
];

const container = document.getElementById('letters');

alphabets.forEach(({ letter, sound }) => {
    const div = document.createElement('div');
    div.className = 'letter';
    div.textContent = letter;
    div.onclick = () => {
        const audio = new Audio(sound);
        audio.play();
    };
    container.appendChild(div);
});
