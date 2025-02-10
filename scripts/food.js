const menuPizza = [
  {
    name: '1. Margherita',
    description: 'Sos pomidorowy, ser, oregano',
    smallPrice: 30,
    largePrice: 45,
  },
  {
    name: '2. Fungi',
    description: 'Sos pomidorowy, ser, pieczarki, oregano',
    smallPrice: 31,
    largePrice: 46,
  },
  {
    name: '3. Salami',
    description: 'Sos pomidorowy, ser, salami, oregano',
    smallPrice: 33,
    largePrice: 46,
  },
  {
    name: '4. Verona',
    description: 'Sos pomidorowy, ser, szynka, oregano',
    smallPrice: 33,
    largePrice: 46,
  },
  {
    name: '5. Wianek',
    description:
      'Sos pomidorowy, ser, pieczarki, brokuł, papryka jalapeno, oregano',
    smallPrice: 35,
    largePrice: 46,
  },
  {
    name: '6. Capricciosa',
    description: 'Sos pomidorowy, ser, szynka, pieczarki, oregano',
    smallPrice: 35,
    largePrice: 47,
  },
  {
    name: '7. Forno',
    description: 'Sos pomidorowy, ser, salami, pieczarki, oregano',
    smallPrice: 35,
    largePrice: 47,
  },
  {
    name: '8. Chicken',
    description: 'Sos pomidorowy, ser, gyros, oregano',
    smallPrice: 34,
    largePrice: 47,
  },
  {
    name: '9. Hawaii',
    description: 'Sos pomidorowy, ser, szynka, ananas, oregano',
    smallPrice: 35,
    largePrice: 47,
  },
  {
    name: '10. Tropicana',
    description: 'Sos pomidorowy, ser, gyros, ananas, oregano',
    smallPrice: 35,
    largePrice: 49,
  },
  {
    name: '11. Pestacore',
    description: 'Sos pomidorowy, ser, tuńczyk, pieczarki, oregano',
    smallPrice: 37,
    largePrice: 50,
  },
  {
    name: '12. Cztery pory roku',
    description:
      'Sos pomidorowy, ser, <sup>1</sup>&frasl;<sub>4</sub> brokuł, <sup>1</sup>&frasl;<sub>4</sub> pomidor, <sup>1</sup>&frasl;<sub>4</sub> salami, <sup>1</sup>&frasl;<sub>4</sub> tuńczyk, oregano',
    smallPrice: 37,
    largePrice: 50,
  },
  {
    name: '13. Sergio',
    description:
      'Sos pomidorowy, ser, salami, papryka kolorowa, oliwki, kukurydza',
    smallPrice: 37,
    largePrice: 50,
  },
  {
    name: '14. Trio Fromaggi',
    description: 'Sos pomidorowy, ser, ser favita, gorgonzola, oregano',
    smallPrice: 37,
    largePrice: 51,
  },
  {
    name: '15. Spinacci',
    description:
      'Sos pomidorowy, ser, szpinak, ser favita, cebula czerwona, czosnek, oregano',
    smallPrice: 37,
    largePrice: 51,
  },
  {
    name: '16. Romana',
    description: 'Sos pomidorowy, ser szynka, gyros, pieczarki, oregano',
    smallPrice: 37,
    largePrice: 51,
  },
  {
    name: '17. Frutti Di Mare',
    description: 'Sos pomidorowy, ser, mix owoców morza, czosnek, oregano',
    smallPrice: 37,
    largePrice: 51,
  },
  {
    name: '18. Mafiozo',
    description: 'Sos pomidorowy, ser, salami, papryczki jalapeno, oregano',
    smallPrice: 37,
    largePrice: 51,
    typeClass: 'product__type--red',
    type: 'ostra',
  },
  {
    name: '19. Diabolo',
    description:
      'Sos pomidorowy, ser, szynka, pieczarki, papryczki jalapeno, oregano',
    smallPrice: 37,
    largePrice: 51,
    typeClass: 'product__type--red',
    type: 'ostra',
  },
  {
    name: '20. Calzone',
    description:
      'Sos pomidorowy, ser, pieczarki, gyros, cebula czerwona, oregano',
    smallPrice: 39,
    largePrice: 51,
    typeClass: 'product__type--brown',
    type: 'pieróg',
  },
  {
    name: '21. Grecka',
    description:
      'Sos pomidorowy, ser, szynka, oliwki czarne, papryka kolorowa, ser favita, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '22. Wiosenna',
    description:
      'Sos pomidorowy, ser, szynka, brokuł, kukurydza, cebula czerwona, papryka kolorowa, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '23. Wegetariana',
    description:
      'Sos pomidorowy, ser, pomidor, brokuł, kukurydza, pieczarki, cebula czerwona, papryka kolorowa, oregano',
    smallPrice: 39,
    largePrice: 52,
  },
  {
    name: '24. Wiejska',
    description:
      'Sos pomidorowy, ser, salami, boczek, pieczarki, ogórek konserwowy, cebula czerwona, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '25. Rukola',
    description: 'Sos pomidorowy, ser, szynka, kurczak, rukola świeża, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '26. Milano',
    description:
      'Sos pomidorowy, ser, pieczarki, boczek, kabanos, cebula biała, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '27. Farmerska',
    description:
      'Sos pomidorowy, ser, pieczarki, boczek, kurczak, cebula biała, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '28. Brocolli',
    description: 'Sos pomidorowy, ser, kurczak, brokuł, kukurydza, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '29. Flamengo',
    description:
      'Sos pomidorowy, ser, kurczak, salami, kukurydza, cebula biała, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
  {
    name: '30. Max Gyros',
    description:
      'Sos pomidorowy, ser, pieczarki, boczek, salami, gyros, papryka kolorowa, oregano',
    smallPrice: 40,
    largePrice: 52,
  },
];

const menuPizzaAdditions = {
  subtitle: 'Dodatki do pizzy',
  additions: [
    { name: 'Ser', smallPrice: 4, largePrice: 6 },
    { name: 'Mięsne', smallPrice: 4, largePrice: 6 },
    { name: 'Wegetariańskie', smallPrice: 6, largePrice: 5 },
    { name: 'Sosy - czosnkowy, ostry, ketchup', smallPrice: 3, largePrice: 3 },
  ],
};

const menuMainDishes = [
  {
    name: 'Zapiekanka jarska',
    description:
      'talarki ziemniaczane, kukurydza, brokuł, pomidor, papryka kolorowa, sos śmietanowy, ser, oregano',
    price: 36,
    type: 'vege',
    typeClass: 'product__type--green',
  },
  {
    name: 'Zapiekanka z boczkiem',
    description:
      'talarki ziemniaczane, boczek, cebula czerwona, papryka kolorowa, sos śmietanowy, ser, oregano',
    price: 38,
  },
  {
    name: 'Zapiekanka gyros',
    description:
      'talarki ziemniaczane, gyros, brokuł, ogórek konserwowy, sos śmietanowy, ser, oregano',
    price: 38,
  },
  {
    name: 'Zapiekanka z kurczakiem',
    description:
      'talarki ziemniaczane, kurczak, brokuł, kukurydza, sos śmietanowy, ser, oregano',
    price: 38,
  },
  {
    name: 'Brokuły zapiekane pod serem',
    description: 'brokuł, ser, ser gorgonzola, sos śmietanowy, oregano',
    price: 40,
  },
];

const menuPasta = [
  {
    name: 'Penne z kurczakiem',
    description:
      'kurczak, pomidor, papryka kolorowa, cukinia, czosnek, ser, sos śmietanowy, oregano',
    price: 38,
  },
  {
    name: 'Penne z boczkiem',
    description:
      'boczek cebula czerwona, czosnek, ser, sos śmietanowy, oregano',
    price: 38,
  },
  {
    name: 'Penne wegetariana',
    description:
      'pomidor, brokuł, papryka kolorowa, cebula czerwona, ser, sos śmietanowy, oregano',
    price: 36,
    type: 'vege',
    typeClass: 'product__type--green',
  },
];

const menuSalad = [
  {
    name: 'Hawai',
    description:
      'Sok z ananasa, śmietana, sałata lodowa, ananas, szynka, kukurydza, pomidor, ogórek zielony',
    price: 30,
  },
  {
    name: 'Tonno',
    description:
      'Sos winegret, sałata lodowa, tuńczyk, pomidor, ogórek zielony, cebula czerwona, kukurydza',
    price: 35,
  },
  {
    name: 'Grecka',
    description:
      'Sos winegret, sałata lodowa, ser favita, oliwki czarne, pomidor, ogórek zielony, cebula czerwona',
    price: 35,
    type: 'vege',
  },
  {
    name: 'Kurczak',
    description:
      'Sos czosnkowy, sałata lodowa, kurczak, pomidor, ogórek zielony, cebula czerwona, ser',
    price: 38,
  },
];

const menuSet = [
  {
    name: 'Danie dnia',
    description: '',
    price: 32,
  },
  {
    name: 'Kotlet schabowy',
    description: 'kotlet schabowy, frytki/ziemniaki, zestaw surówek',
    price: 40,
  },
  {
    name: 'Żeberka',
    description: 'żeberka, ziemniaki, zestaw surówek',
    price: 38,
  },
  {
    name: 'Karczek',
    description: 'karczek, ziemniaki, zestaw surówek',
    price: 39,
  },
  {
    name: 'Wątróbka drobiowa',
    description: 'wątróbka drobiowa, ziemniaki, zestaw surówek',
    price: 33,
  },
  {
    name: 'Camembert',
    description: 'ser, frytki, zestaw surówek',
    price: 33,
  },
  {
    name: 'Pstrąg',
    description: 'pstrąg, frytki, zestaw surówek',
    price: 45,
  },
  {
    name: 'Pierś z kurczaka',
    description: 'pierś z kurczaka, frytki/ziemniaki, zestaw surówek',
    price: 38,
  },
  {
    name: 'Strips',
    description: 'Stripsy 3 szt., frytki, zestaw surówek',
    price: 34,
  },
  {
    name: 'Wings',
    description: 'wings 5 szt., frytki, zestaw surówek',
    price: 34,
  },
];

const menuSoups = [
  {
    name: 'Zupa dnia',
    description: '',
    price: 12,
  },
  {
    name: 'Rosół',
    description: 'W soboty i niedziele',
    price: 14,
  },
  {
    name: 'Gulaszowa',
    description: 'Z pieczywem',
    price: 28,
  },
];

const menuWings = [
  {
    name: 'Mały kubeł',
    description: 'wings 15 szt., frytki',
    price: 40,
  },
  {
    name: 'Średni kubeł',
    description: 'wings 30 szt., frytki',
    price: 60,
  },
  {
    name: 'Duży kubeł',
    description: 'wings 60 szt., frytki',
    price: 100,
  },
  {
    name: 'Kubeł MIX',
    description: 'strips 10 szt., Wings 15 szt., frytki',
    price: 72,
  },
];

const menuStrips = [
  {
    name: 'Mały kubeł',
    description: 'Strips 10 szt., frytki',
    price: 47,
  },
  {
    name: 'Średni kubeł',
    description: 'Strips 15 szt., frytki',
    price: 60,
  },
  {
    name: 'Duży kubeł',
    description: 'Strips 30 szt., frytki',
    price: 100,
  },
];

const menuSetAdditions = {
  subtitle: 'Dodatki',
  additions: [
    { name: 'Frytki', smallPrice: '', largePrice: 12 },
    { name: 'Surówki', smallPrice: '', largePrice: 12 },
    { name: 'Pieczywo', smallPrice: '', largePrice: 6 },
    { name: 'Sosy - czosnkowy, ostry, ketchup', smallPrice: '', largePrice: 3 },
  ],
};

const menuColdDrinks = {
  subtitle: 'Zimne',
  products: [
    { name: 'Coca-Cola', size: '0,2l', price: '7' },
    { name: 'Coca-Cola/Coca-Cola Zero', size: '0,5l', price: '8' },
    { name: 'Fanta', size: '0,2l', price: '7' },
    { name: 'Fanta', size: '0,5l', price: '8' },
    { name: 'Sprite', size: '0,5l', price: '8' },
    { name: 'Fuzetea Brzoskwinia/Cytryna', size: '0,5l', price: '8' },
    {
      name: 'Cappy Pomarańcza',
      size: '0,33l',
      price: '8',
    },
    {
      name: 'Cappy Jabłko/Multiwitamina/Truskawka',
      size: '0,33l',
      price: '7',
    },
    { name: 'Kinley Tonic/Bitter Rose/Mojito', size: '0,2l', price: '7' },
  ],
};

const menuHotDrinks = {
  subtitle: 'Ciepłe',
  products: [
    { name: 'Herbata czarna', price: '10' },
    { name: 'Herbata czarna z cytryną', price: '10' },
    { name: 'Herbata zielona', price: '10' },
    { name: 'Herbata owocowa', price: '10' },
    { name: 'Kawa po turecku', price: '7' },
    { name: 'Latte macchiato', price: '10' },
    { name: 'Cappuccino', price: '9' },
    { name: 'Espresso', price: '9' },
  ],
};

const menuDraftBeer = {
  subtitle: 'Piwo Lane',
  products: [
    { name: 'Kozel Lezak', size: '0,5l', price: '12' },
    { name: 'Tyskie', size: '0,5l', price: '12' },
  ],
};

const menuBottledBeer = {
  subtitle: 'Piwo Butelkowe',
  products: [
    { name: 'Tyskie', size: '0,5l', price: '12' },
    { name: 'Lech Pils', size: '0,5l', price: '12' },
    { name: 'Lech Premium', size: '0,5l', price: '12' },
    { name: 'Lech 0 %', size: '0,5l', price: '12' },
    { name: 'Lech Granat Acai', size: '0,5l', price: '12' },
    { name: 'Lech Mojito', size: '0,5l', price: '12' },
    { name: 'Książęce IPA', size: '0,5l', price: '12' },
    { name: 'Książęce Lager', size: '0,5l', price: '12' },
    { name: 'Książęce Ciemne Łagodne', size: '0,5l', price: '12' },
    { name: 'Książęce Cherry ALE', size: '0,5l', price: '12' },
    { name: 'Kozel Lezak', size: '0,5l', price: '12' },
    { name: 'Kozel Cerny', size: '0,5l', price: '12' },
    { name: 'Żubr', size: '0,5l', price: '12' },
    { name: 'Dębowe', size: '0,5l', price: '12' },
  ],
};

const menuVodka = {
  subtitle: 'Wódka',
  products: [
    {
      name: 'Soplica',
      sizes: [
        { size: '50ml', price: '10' },
        { size: '0,5l', price: '70' },
      ],
    },
    {
      name: 'Bols',
      sizes: [
        { size: '50ml', price: '10' },
        { size: '0,5l', price: '70' },
      ],
    },
    {
      name: 'Wyborowa',
      sizes: [
        { size: '50ml', price: '10' },
        { size: '0,5l', price: '70' },
      ],
    },
    {
      name: 'Finlandia',
      sizes: [
        { size: '50ml', price: '10' },
        { size: '0,5l', price: '80' },
      ],
    },
  ],
};

const menuWhisky = {
  subtitle: 'Whisky',
  products: [
    {
      name: 'Red Label',
      sizes: [
        { size: '50ml', price: '12' },
        { size: '0,5l', price: '90' },
      ],
    },
    {
      name: 'Grants',
      sizes: [
        { size: '50ml', price: '12' },
        { size: '0,5l', price: '90' },
      ],
    },
    {
      name: 'Ballantines',
      sizes: [
        { size: '50ml', price: '12' },
        { size: '0,5l', price: '90' },
      ],
    },
  ],
};

const menuGin = {
  subtitle: 'Gin',
  products: [
    {
      name: 'Lubuski',
      sizes: [
        { size: '50ml', price: '10' },
        { size: '0,5l', price: '90' },
      ],
    },
    {
      name: 'Seagrams',
      sizes: [
        { size: '50ml', price: '10' },
        { size: '0,5l', price: '90' },
      ],
    },
  ],
};

const menuLocations = [
  {
    name: 'Boguszów, Krakowskie Osiedle',
    price: '5 PLN',
  },
  {
    name: 'Gorce, Kuźnice, Stary Lesieniec',
    price: '6 PLN',
  },
  {
    name: 'Sobięcin, Czarny Bór, Jabłów',
    price: '7 PLN',
  },
  {
    name: 'Witków, Borówno, Grzędy, Unisław Śląski',
    price: '10 PLN',
  },
];

const containerMenuPizza = document.getElementById('menu-pizza');
const containerMenuMainDishes = document.getElementById('menu-main-dishes');
const containerMenuPasta = document.getElementById('menu-pasta');
const containerMenuSalad = document.getElementById('menu-salad');
const containerMenuSet = document.getElementById('menu-set');
const containerMenuSoup = document.getElementById('menu-soup');
const containerMenuStrips = document.getElementById('menu-strips');
const containerMenuWings = document.getElementById('menu-wings');
const containerMenuDrinks = document.getElementById('menu-drinks');
const containerMenuDelivery = document.getElementById('menu-delivery');

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

const renderDrinkProduct = (container, drinkCategory) => {
  const { subtitle, products } = drinkCategory;

  const subtitleElement = document.createElement('li');
  subtitleElement.classList.add('product__subtitle');
  subtitleElement.textContent = subtitle;
  container.appendChild(subtitleElement);

  products.forEach((product) => {
    const productElement = document.createElement('li');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <div class="name__container">
          <p class="accordion__suboption accordion__suboption--drinks">${product.name}</p>
      </div>
      <div class="price__container">
          <p class="price">${product.price}</p>
      </div>
    `;

    container.appendChild(productElement);
  });
};

const renderAltDrinkProduct = (container, drinkCategory) => {
  const { subtitle, products } = drinkCategory;

  const subtitleElement = document.createElement('li');
  subtitleElement.classList.add('product__subtitle');
  subtitleElement.textContent = subtitle;
  container.appendChild(subtitleElement);

  products.forEach((product) => {
    const productElement = document.createElement('li');
    productElement.classList.add('product');

    const priceHTML = product.sizes
      .map(
        (sizeObj) =>
          `<p class="price">${sizeObj.size}</p><p class="price">${sizeObj.price}</p>`
      )
      .join('');

    productElement.innerHTML = `
      <div class="name__container">
        <p class="accordion__suboption accordion__suboption--drinks">${product.name}</p>
      </div>
      <div class="price__container price__container--drinks">
        ${priceHTML}
      </div>
    `;

    container.appendChild(productElement);
  });
};

const renderSubtitleAndAdditions = (container, menu) => {
  const { subtitle, additions } = menu;

  const subtitleElement = document.createElement('li');
  subtitleElement.className = 'product__subtitle';
  subtitleElement.textContent = subtitle;
  container.appendChild(subtitleElement);

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
        ${item.smallPrice ? `<p class="price">${item.smallPrice}</p>` : ''}
        <p class="price">${item.largePrice}</p>
      </div>
    `;

    container.appendChild(li);
  });
};

const renderLocation = (container, locations) => {
  locations.forEach((location) => {
    const locationElement = document.createElement('li');
    locationElement.classList.add('product');

    locationElement.innerHTML = `
      <div class="name__container">
        <p class="accordion__suboption accordion__suboption--drinks">${location.name}</p>
      </div>
      <div class="price__container">
        <p class="price">${location.price}</p>
      </div>
    `;

    container.appendChild(locationElement);
  });
};

export const renderMenu = () => {
  renderProduct(containerMenuPizza, menuPizza);
  renderSubtitleAndAdditions(containerMenuPizza, menuPizzaAdditions);
  renderProduct(containerMenuMainDishes, menuMainDishes);
  renderProduct(containerMenuPasta, menuPasta);
  renderProduct(containerMenuSalad, menuSalad);
  renderProduct(containerMenuSet, menuSet);
  renderProduct(containerMenuSoup, menuSoups);
  renderProduct(containerMenuStrips, menuStrips);
  renderProduct(containerMenuWings, menuWings);
  renderSubtitleAndAdditions(containerMenuWings, menuSetAdditions);
  renderDrinkProduct(containerMenuDrinks, menuColdDrinks);
  renderDrinkProduct(containerMenuDrinks, menuHotDrinks);
  renderDrinkProduct(containerMenuDrinks, menuDraftBeer);
  renderDrinkProduct(containerMenuDrinks, menuBottledBeer);
  renderAltDrinkProduct(containerMenuDrinks, menuVodka);
  renderAltDrinkProduct(containerMenuDrinks, menuWhisky);
  renderAltDrinkProduct(containerMenuDrinks, menuGin);
  renderLocation(containerMenuDelivery, menuLocations);
};
