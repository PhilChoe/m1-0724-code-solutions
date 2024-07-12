interface Product {
  bookTitle?: string;
  item?: string;
  bookAuthor?: string;
  bookReturnWindow?: string;
  itemReturnWindow?: string;
  bookPrice?: number;
  itemPrice?: number;
}

interface Order {
  orderPlaced: string;
  total: number;
  shipTo: string;
  orderNumber: string;
  deliveredDate: string;
  product: Product[];
}

const order: Order[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.0,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredDate: 'Aug 8, 2020',
    product: [
      {
        bookTitle: 'Javascript for impatient programmers',
        bookAuthor: 'Rauschmayer, Dr. Axel',
        bookReturnWindow: 'Return Window closed on Sep 7, 2020',
        bookPrice: 31.55,
      },
    ],
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveredDate: 'July 20, 2020',
    product: [
      {
        bookTitle: 'The Timeless Way of Building',
        bookAuthor: 'Alexander, Christopher',
        bookReturnWindow: 'Return Window closed on Aug 19, 2020',
        bookPrice: 41.33,
      },
    ],
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredDate: 'July 7, 2020',
    product: [
      {
        item: 'Gamecube Contoller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        itemReturnWindow: 'Return Window closed on Aug 5, 2020',
        itemPrice: 15.98,
      },
    ],
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredDate: 'July 5, 2020',
    product: [
      {
        item: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        itemReturnWindow: 'Return Window closed on Aug 4, 2020',
        itemPrice: 94.95,
      },
      {
        bookTitle: 'The Art of Sql',
        bookAuthor: 'Faroult, Stephane',
        bookReturnWindow: 'Return Window closed on Aug 4, 2020',
        bookPrice: 33.99,
      },
    ],
  },
];
