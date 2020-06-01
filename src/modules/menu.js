const Menu = (() => {
    const menuList = [
      {
        title: 'Breakfast',
        items: ['Ham and Egg', 'Bacon and Cheese', 'Tuna Salad', 'Beef Soup'],
      },
      {
        title: 'Coffee',
        items: ['Cappucino', 'Cafe Latte', 'Americano', 'Mocha'],
      },
      {
        title: 'Pancakes',
        items: ['Banana Nut', 'Oatmeal Raisin', 'Blueberry', 'Chocolate Chip'],
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