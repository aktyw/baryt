const menuPizza = [
  {
    name: '1. Margherita',
    description: 'Sos pomidorowy, ser, oregano',
    smallPrice: 27,
    largePrice: 42,
  },
  {
    name: '2. Fungi',
    description: 'Sos pomidorowy, ser, pieczarki, oregano',
    smallPrice: 28,
    largePrice: 43,
  },
  {
    name: '3. Salami',
    description: 'Sos pomidorowy, ser, salami, oregano',
    smallPrice: 30,
    largePrice: 43,
  },
  {
    name: '4. Verona',
    description: 'Sos pomidorowy, ser, szynka, oregano',
    smallPrice: 30,
    largePrice: 43,
  },
  {
    name: '5. Wianek',
    description:
      'Sos pomidorowy, ser, pieczarki, brokuł, papryka jalapeno, oregano',
    smallPrice: 32,
    largePrice: 43,
  },
  {
    name: '6. Capricciosa',
    description: 'Sos pomidorowy, ser, szynka, pieczarki, oregano',
    smallPrice: 32,
    largePrice: 44,
  },
  {
    name: '7. Forno',
    description: 'Sos pomidorowy, ser, salami, pieczarki, oregano',
    smallPrice: 32,
    largePrice: 44,
  },
  {
    name: '8. Chicken',
    description: 'Sos pomidorowy, ser, gyros, oregano',
    smallPrice: 31,
    largePrice: 44,
  },
  {
    name: '9. Hawaii',
    description: 'Sos pomidorowy, ser, szynka, ananas, oregano',
    smallPrice: 32,
    largePrice: 44,
  },
  {
    name: '10. Tropicana',
    description: 'Sos pomidorowy, ser, gyros, ananas, oregano',
    smallPrice: 32,
    largePrice: 46,
  },
  {
    name: '11. Pestacore',
    description: 'Sos pomidorowy, ser, tuńczyk, pieczarki, oregano',
    smallPrice: 33,
    largePrice: 46,
  },
  {
    name: '12. Cztery pory roku',
    description:
      'Sos pomidorowy, ser, <sup>1</sup>&frasl;<sub>4</sub> brokuł, <sup>1</sup>&frasl;<sub>4</sub> pomidor, <sup>1</sup>&frasl;<sub>4</sub> salami, <sup>1</sup>&frasl;<sub>4</sub> tuńczyk, oregano',
    smallPrice: 34,
    largePrice: 46,
  },
  {
    name: '13. Sergio',
    description:
      'Sos pomidorowy, ser, salami, papryka kolorowa, oliwki, kukurydza',
    smallPrice: 34,
    largePrice: 47,
  },
  {
    name: '14. Trio Fromaggi',
    description: 'Sos pomidorowy, ser, ser favita, gorgonzola, oregano',
    smallPrice: 34,
    largePrice: 48,
  },
  {
    name: '15. Spinacci',
    description:
      'Sos pomidorowy, ser, szpinak, ser favita, cebula czerwona, czosnek, oregano',
    smallPrice: 34,
    largePrice: 48,
  },
  {
    name: '16. Romana',
    description: 'Sos pomidorowy, ser szynka, gyros, pieczarki, oregano',
    smallPrice: 34,
    largePrice: 48,
  },
  {
    name: '17. Frutti Di Mare',
    description: 'Sos pomidorowy, ser, mix owoców morza, czosnek, oregano',
    smallPrice: 34,
    largePrice: 48,
  },
  {
    name: '18. Mafiozo',
    description: 'Sos pomidorowy, ser, salami, papryczki jalapeno, oregano',
    smallPrice: 34,
    largePrice: 48,
    typeClass: 'product__type--red',
    type: 'ostra',
  },
  {
    name: '19. Diabolo',
    description:
      'Sos pomidorowy, ser, szynka, pieczarki, papryczki jalapeno, oregano',
    smallPrice: 34,
    largePrice: 48,
    typeClass: 'product__type--red',
    type: 'ostra',
  },
  {
    name: '20. Calzone',
    description:
      'Sos pomidorowy, ser, pieczarki, gyros, cebula czerwona, oregano',
    smallPrice: 36,
    largePrice: 48,
    typeClass: 'product__type--brown',
    type: 'pieróg',
  },
  {
    name: '21. Grecka',
    description:
      'Sos pomidorowy, ser, szynka, oliwki czarne, papryka kolorowa, ser favita, oregano',
    smallPrice: 36,
    largePrice: 48,
  },
  {
    name: '22. Wiosenna',
    description:
      'Sos pomidorowy, ser, szynka, brokuł, kukurydza, cebula czerwona, papryka kolorowa, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
  {
    name: '23. Wegetariana',
    description:
      'Sos pomidorowy, ser, pomidor, brokuł, kukurydza, pieczarki, cebula czerwona, papryka kolorowa, oregano',
    smallPrice: 36,
    largePrice: 49,
  },
  {
    name: '24. Wiejska',
    description:
      'Sos pomidorowy, ser, salami, boczek, pieczarki, ogórek konserwowy, cebula czerwona, oregano',
    smallPrice: 35,
    largePrice: 49,
  },
  {
    name: '25. Rukola',
    description: 'Sos pomidorowy, ser, szynka, kurczak, rukola świeża, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
  {
    name: '26. Milano',
    description:
      'Sos pomidorowy, ser, pieczarki, boczek, kabanos, cebula biała, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
  {
    name: '27. Farmerska',
    description:
      'Sos pomidorowy, ser, pieczarki, boczek, kurczak, cebula biała, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
  {
    name: '28. Brocolli',
    description: 'Sos pomidorowy, ser, kurczak, brokuł, kukurydza, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
  {
    name: '29. Flamengo',
    description:
      'Sos pomidorowy, ser, kurczak, salami, kukurydza, cebula biała, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
  {
    name: '30. Max Gyros',
    description:
      'Sos pomidorowy, ser, pieczarki, boczek, salami, gyros, papryka kolorowa, oregano',
    smallPrice: 37,
    largePrice: 49,
  },
];

const menuPizzaAdditions = [
  { name: 'Ser', smallPrice: 4, largePrice: 6 },
  { name: 'Mięsne', smallPrice: 4, largePrice: 6 },
  { name: 'Wegetariańskie', smallPrice: 6, largePrice: 5 },
  { name: 'Sosy - czosnkowy, ostry, ketchup', smallPrice: 3, largePrice: 3 },
];

const menuMainDishes = [
  {
    name: 'Zapiekanka jarska',
    description:
      'talarki ziemniaczane, kukurydza, brokuł, pomidor, papryka kolorowa, sos śmietanowy, ser, oregano',
    price: 31,
    type: 'vege',
    typeClass: 'product__type--green',
  },
  {
    name: 'Zapiekanka z boczkiem',
    description:
      'talarki ziemniaczane, boczek, cebula czerwona, papryka kolorowa, sos śmietanowy, ser, oregano',
    price: 33,
  },
  {
    name: 'Zapiekanka gyros',
    description:
      'talarki ziemniaczane, gyros, brokuł, ogórek konserwowy, sos śmietanowy, ser, oregano',
    price: 34,
  },
  {
    name: 'Zapiekanka z kurczakiem',
    description:
      'talarki ziemniaczane, kurczak, brokuł, kukurydza, sos śmietanowy, ser, oregano',
    price: 34,
  },
  {
    name: 'Brokuły zapiekane pod serem',
    description: 'brokuł, ser, ser gorgonzola, sos śmietanowy, oregano',
    price: 37,
  },
];

const menuPasta = [
  {
    name: 'Penne z kurczakiem',
    description:
      'kurczak, pomidor, papryka kolorowa, cukinia, czosnek, ser, sos śmietanowy, oregano',
    price: 32,
  },
  {
    name: 'Penne z boczkiem',
    description:
      'boczek cebula czerwona, czosnek, ser, sos śmietanowy, oregano',
    price: 32,
  },
  {
    name: 'Penne wegetariana',
    description:
      'pomidor, brokuł, papryka kolorowa, cebula czerwona, ser, sos śmietanowy, oregano',
    price: 31,
    type: 'vege',
    typeClass: 'product__type--green',
  },
];

const menuSalad = [
  {
    name: 'Hawai',
    description:
      'Sok z ananasa, śmietana, sałata lodowa, ananas, szynka, kukurydza, pomidor, ogórek zielony',
    price: 27,
  },
  {
    name: 'Tonno',
    description:
      'Sos winegret, sałata lodowa, tuńczyk, pomidor, ogórek zielony, cebula czerwona, kukurydza',
    price: 29,
  },
  {
    name: 'Grecka',
    description:
      'Sos winegret, sałata lodowa, ser favita, oliwki czarne, pomidor, ogórek zielony, cebula czerwona',
    price: 33,
    type: 'vege',
  },
  {
    name: 'Kurczak',
    description:
      'Sos czosnkowy, sałata lodowa, kurczak, pomidor, ogórek zielony, cebula czerwona, ser',
    price: 34,
  },
];

const menuSet = [
  {
    name: 'Strips',
    description: 'Stripsy 3 szt., frytki, zestaw surówek',
    price: 31,
  },
  {
    name: 'Wings',
    description: 'wings 5 szt., frytki, zestaw surówek',
    price: 31,
  },
  {
    name: 'Camembert',
    description: 'ser, frytki, zestaw surówek',
    price: 31,
  },
  {
    name: 'Pstrąg',
    description: 'pstrąg, frytki, zestaw surówek',
    price: 40,
  },
  {
    name: 'Pierś z kurczaka',
    description: 'pierś z kurczaka, frytki/ziemniaki, zestaw surówek',
    price: 32,
  },
  {
    name: 'Kotlet schabowy',
    description: 'kotlet schabowy, frytki/ziemniaki, zestaw surówek',
    price: 34,
  },
];

const menuStrips = [
  {
    name: 'Mały kubeł',
    description: 'Strips 10 szt., frytki',
    price: 42,
  },
  {
    name: 'Średni kubeł',
    description: 'Strips 15 szt., frytki',
    price: 56,
  },
  {
    name: 'Duży kubeł',
    description: 'Strips 30 szt., frytki',
    price: 96,
  },
];

const menuWings = [
  {
    name: 'Mały kubeł',
    description: 'wings 15 szt., frytki',
    price: 37,
  },
  {
    name: 'Średni kubeł',
    description: 'wings 30 szt., frytki',
    price: 56,
  },
  {
    name: 'Duży kubeł',
    description: 'wings 60 szt., frytki',
    price: 92,
  },
  {
    name: 'Kubeł MIX',
    description: 'strips 10 szt., Wings 15 szt., frytki',
    price: 62,
  },
];

const menuSetAdditions = [
  {
    name: 'Frytki',
    smallPrice: '',
    largePrice: 12,
  },
  {
    name: 'Surówki',
    smallPrice: '',

    largePrice: 12,
  },
  {
    name: 'Pieczywo',
    smallPrice: '',
    largePrice: 6,
  },
];

const containerMenuPizza = document.getElementById('menu-pizza');
const containerMenuMainDishes = document.getElementById('menu-main-dishes');
const containerMenuPasta = document.getElementById('menu-pasta');
const containerMenuSalad = document.getElementById('menu-salad');
const containerMenuSet = document.getElementById('menu-set');
const containerMenuStrips = document.getElementById('menu-strips');
const containerMenuWings = document.getElementById('menu-wings');

const typeClassMap = {
  vege: 'product__type--green',
  pieróg: 'product__type--brown',
  ostra: 'product__type--red',
};

const renderProduct = (container, items) => {
  items.forEach((item) => {
    const product = document.createElement('li');
    product.classList.add('product');

    const typeClass = typeClassMap[item.type];

    product.innerHTML = `
        <div class="name__container">
          <h4 class="accordion__option">${item.name} ${
      typeClass
        ? `<span class="product__type ${typeClass}">${item.type}</span>`
        : ''
    }</h4>
          <p class="accordion__suboption">${item.description}</p>
        </div>
        <div class="price__container">
          <p class="price">${item.price || item.smallPrice}</p>
          ${item.largePrice ? `<p class="price">${item.largePrice}</p>` : ''}
        </div>
      `;

    container.appendChild(product);
  });
};

const renderSubtitleAndAdditions = (container, subtitleText, additions) => {
  const subtitle = document.createElement('li');
  subtitle.className = 'product__subtitle';
  subtitle.textContent = subtitleText;
  container.appendChild(subtitle);

  additions.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'product';

    li.innerHTML = `
        <div class="name__container">
          <p class="accordion__suboption accordion__suboption--drinks">${
            item.name
          }</p>
        </div>
        <div class="price__container">
          <p class="price">${item.smallPrice}</p>
          ${item.largePrice ? `<p class="price">${item.largePrice}</p>` : ''}
        </div>
      `;

    container.appendChild(li);
  });
};

export const renderMenu = () => {
  renderProduct(containerMenuPizza, menuPizza);
  renderSubtitleAndAdditions(
    containerMenuPizza,
    'Dodatki do pizzy',
    menuPizzaAdditions
  );

  renderProduct(containerMenuMainDishes, menuMainDishes);
  renderProduct(containerMenuPasta, menuPasta);
  renderProduct(containerMenuSalad, menuSalad);
  renderProduct(containerMenuSet, menuSet);
  renderProduct(containerMenuStrips, menuStrips);
  renderProduct(containerMenuWings, menuWings);
  renderSubtitleAndAdditions(containerMenuWings, 'Dodatki', menuSetAdditions);
};
