  const sword = document.getElementById('sword');
    const counter = document.getElementById('counter');
    const bar = document.getElementById('bar');
    const resetBtn = document.getElementById('reset');

    const goal = 545;
    let count = 0;

    function updateUI() {
      counter.textContent = `${count} / ${goal}`;
      bar.style.width = `${(count / goal) * 100}%`;
      sword.style.bottom = `${120 + count / 4.8}px`;
    }

    function handlePress() {
      if (count < goal) {
        count++;
        updateUI();
        if (count === goal) {
    const title = document.getElementById('titulo');
    title.innerText = '🎉Parabéns você tirou a Excalibur da pedra!🥳';
  }
        }
      }
    
let isSpacePressed = false; 

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !isSpacePressed) {
    e.preventDefault();
    isSpacePressed = true; 
    handlePress(); 
  }
});


window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    isSpacePressed = false; 
  }
});

    resetBtn.addEventListener('click', () => {
      count = 0;
      const title = document.getElementById('titulo');
    title.innerText = '⚔️ Tire a Excalibur da Pedra ⚔️';
      updateUI();
    });

    updateUI();