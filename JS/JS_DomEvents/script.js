window.addEventListener('DOMContentLoaded', (event) => {
  const buttonClear = document.querySelector('#clear');
  const menuButton = document.querySelector('.menu-button');
  const plateButton = document.querySelector('.plate');
  const contentEl = document.querySelector('.content');
  const buttonsEl = document.querySelector('.buttons');

  buttonsEl.addEventListener('click', (event) => {
    const div = document.querySelector('.some_classes');
    div.append(`${event.target.id}: ${div.className}`);
  })

  buttonClear.addEventListener('click', () => {
    const div = document.querySelector('.some_classes');
    div.innerHTML = '';
  });

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

