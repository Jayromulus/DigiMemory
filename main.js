const main = document.querySelector('.main');
    const upperAdd = document.querySelector('.top .left');
    const upperSub = document.querySelector('.top .right');
    const lowerAdd = document.querySelector('.bottom .left');
    const lowerSub = document.querySelector('.bottom .right');
    const memDisplay = document.querySelector('.memory');
    const upperStyle = document.querySelector('.top-img');
    const lowerStyle = document.querySelector('.bottom-img');
    const turnArrow = document.querySelector('.turn-arrow');

    const confirmReset = document.querySelector('.confirm-reset');
    const closeReset = document.querySelector('.exit-reset');
    const confirmation = document.querySelector('.confirmation');

    const closePicker = document.querySelector('.exit');
    const colorPicker = document.querySelector('.color-picker');
    const colorList = document.querySelector('.color-list');

    let colors = {
      red: '#e6002d',
      blue: '#0097e0',
      yellow: '#ffe100',
      green: '#009b6b',
      black: '#221714',
      purple: '#6456a3',
      white: '#e2e2e2'
    };

    let memory = 0;
    let topColor = colors.white;
    let botColor = colors.white;
    let colorSelected = colors.black;

    /*
    function calculateGradientStops(value) {
      // Ensure the value is within the range of -10 to +10
      value = Math.max(-10, Math.min(10, value));

      // Calculate the percentage position for the color stops
      const pos1 = 45 - (value > 8 ? 8.5 : value < -8 ? -8.5 : value) * 5;
      const pos2 = 100 - (value > 8 ? 8.5 : value < -8 ? -8.5 : value) * 5;

      main.style.background = `linear-gradient(to bottom, ${topColor} ${pos1}%, ${botColor} ${pos2}%)`;
    }
    */

    let changeGradient = (topCol, botCol) => {
      main.style.background = `linear-gradient(to bottom, ${topCol} 0%, ${botCol} 100%)`;
    }

    let generateColorCards = (side) => {
      colorList.innerHTML = '';
      Object.keys(colors).forEach((color, index) => {
        let newCard = document.createElement('div');
        newCard.classList.add('color-card');
        newCard.style.backgroundColor = colors[color];
        newCard.key = index;
        newCard.addEventListener('click', e => {
          e.preventDefault();
          console.log(colors[color]);
          side === 'upper' ? topColor = colors[color] : botColor = colors[color];
          changeGradient(topColor, botColor);
          colorPicker.style.display = 'none';
        });
        colorList.appendChild(newCard);
      });
    }

    onload = e => {
      e.preventDefault();
      changeGradient(topColor, botColor);
      const colorCards = generateColorCards('upper');
    }

    upperStyle.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log('testing Top Style change');
      colorPicker.style.display = 'flex';
      generateColorCards('upper');
    });

    lowerStyle.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log('testing Bottom Style change');
      colorPicker.style.display = 'flex';
      generateColorCards('lower');
    });

    closePicker.addEventListener('click', (e) => {
      e.preventDefault();
      colorPicker.style.display = 'none';
    });

    memDisplay.addEventListener('click', (e) => {
      e.preventDefault();
      confirmReset.style.display = 'flex';
    });

    closeReset.addEventListener('click', (e) => {
      e.preventDefault();
      confirmReset.style.display = 'none'
    });

    confirmation.addEventListener('click', (e) => {
      e.preventDefault();
      memory = 0;
      // calculateGradientStops(memory);
      memDisplay.innerText = 0;
      turnArrow.style.rotate = '0deg';
      confirmReset.style.display = 'none';
    })

    upperAdd.addEventListener('click', (e) => {
      e.preventDefault();
      if (memory > -10) memory--;
      console.log('MEMORY: ', memory)
      if (memory < 0) {
        turnArrow.style.rotate = '270deg';
        memDisplay.style.rotate = '180deg';
      }
      if (memory > 0) {
        turnArrow.style.rotate = '90deg';
        memDisplay.style.rotate = '0deg';
      }
      if (memory === 0) {
        turnArrow.style.rotate = '270deg';
        memDisplay.style.rotate = '180deg';
      }
      memDisplay.innerText = Math.abs(memory);
      // calculateGradientStops(memory)
    	Math.abs(memory) === 9 || Math.abs(memory) === 6 ? memDisplay.style.textDecoration = 'underline' : memDisplay.style.textDecoration = 'none';
    });

    upperSub.addEventListener('click', (e) => {
      e.preventDefault();
      if (memory < 10) memory++;
      console.log('MEMORY: ', memory)
      if (memory < 0) {
        turnArrow.style.rotate = '270deg';
        memDisplay.style.rotate = '180deg';
      }
      if (memory > 0) {
        turnArrow.style.rotate = '90deg';
        memDisplay.style.rotate = '0deg';
      }
      if (memory === 0) {
        turnArrow.style.rotate = '270deg';
        memDisplay.style.rotate = '180deg';
      }
      memDisplay.innerText = Math.abs(memory);
      // calculateGradientStops(memory)
    	Math.abs(memory) === 9 || Math.abs(memory) === 6 ? memDisplay.style.textDecoration = 'underline' : memDisplay.style.textDecoration = 'none';
    });

    lowerAdd.addEventListener('click', (e) => {
      e.preventDefault();
      if (memory < 10) memory++;
      console.log('MEMORY: ', memory)
      if (memory < 0) {
        turnArrow.style.rotate = '270deg';
        memDisplay.style.rotate = '180deg';
      }
      if (memory > 0) {
        turnArrow.style.rotate = '90deg';
        memDisplay.style.rotate = '0deg';
      }
      if (memory === 0) {
        turnArrow.style.rotate = '90deg';
        memDisplay.style.rotate = '0deg';
      }
      memDisplay.innerText = Math.abs(memory);
      // calculateGradientStops(memory)
    	Math.abs(memory) === 9 || Math.abs(memory) === 6 ? memDisplay.style.textDecoration = 'underline' : memDisplay.style.textDecoration = 'none';
    });

    lowerSub.addEventListener('click', (e) => {
      e.preventDefault();
      if (memory > -10) memory--;
      console.log('MEMORY: ', memory)
      if (memory < 0) {
        turnArrow.style.rotate = '270deg';
        memDisplay.style.rotate = '180deg';
      }
      if (memory > 0) {
        turnArrow.style.rotate = '90deg';
        memDisplay.style.rotate = '0deg';
      }
      if (memory === 0) {
        turnArrow.style.rotate = '90deg';
        memDisplay.style.rotate = '0deg';
      }
      memDisplay.innerText = Math.abs(memory);
      // calculateGradientStops(memory)
    	Math.abs(memory) === 9 || Math.abs(memory) === 6 ? memDisplay.style.textDecoration = 'underline' : memDisplay.style.textDecoration = 'none';
    });