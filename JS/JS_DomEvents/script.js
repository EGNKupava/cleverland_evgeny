window.addEventListener('DOMContentLoaded', (event) => {
  const buttonClear = document.querySelector('#clear');
  const menuButton = document.querySelector('.menu-button');
  const plateButton = document.querySelector('.plate');
  const contentEl = document.querySelector('.content');
  const buttonsEl = document.querySelector('.buttons');

  buttonsEl.addEventListener('click', (event) => {
    const div = document.querySelector('.some_classes');
    if (event.target.id === 'className') {
      div.append(div.className);
    }
    if (event.target.id === 'classList') {
      div.append(div.classList);
    }
    if (event.target.id === 'clear') {
      div.innerHTML = '';
    }
  })

  buttonClear.addEventListener('mouseenter', () => {
    buttonClear.classList.add('red-button');
  });

  buttonClear.addEventListener('mouseleave', () => {
    buttonClear.classList.remove('red-button');
  });

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('opened');
  });

  plateButton.addEventListener('click', () => {
    if (contentEl.hidden === true) {
      contentEl.hidden = false;
      plateButton.textContent = 'Скукожить'
    } else {
      contentEl.hidden = true;
      plateButton.textContent = 'Раскукожить'
    }

  });
});