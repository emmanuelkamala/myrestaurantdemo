const Menu = (() => {
    const menuList = [
      {
        title: 'Breakfast',
        items: ['Chapati and Fish Soup', 'Eggs and Bread', 'Maandazi', 'Samosas'],
      },
      {
        title: 'Lunch',
        items: ['Rice and beans', 'Rice and Sato fish', 'Chips chicken', 'Ugali and Liver soup'],
      },
      {
        title: 'Dinner',
        items: ['Chapati and Liver soup', 'Chicken tandori and chips', 'Rice and beef', 'Minced meat and chips'],
      },
    ];
  
    const addSection = menu => {
      const section = document.createElement('section');
  
      const h2 = document.createElement('h2');
      h2.innerText = menu.title;
  
      const ul = document.createElement('ul');
  
      menu.items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
      });
  
      section.appendChild(h2);
      section.appendChild(ul);
  
      return section;
    };
  
    const setMenu = () => {
      const content = document.getElementById('content');
  
      const main = document.createElement('main');
      main.classList.add('menu-main');
  
      menuList.forEach(menu => {
        const section = addSection(menu);
        main.appendChild(section);
      });
  
      content.appendChild(main);
    };
  
    const setMenuActive = () => {
      const liMenu = document.getElementById('menu');
      liMenu.classList.add('active');
    };
  
    return { setMenu, setMenuActive };
  })();
  
  export default Menu;