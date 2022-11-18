import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Smartfone from '../domain/Smartfone';

// test('new card should be empty', () => {
//   const cart = new Cart();

//   expect(cart.items.length).toBe(0);
// });

// test('создание карточки фильм', () => {
//   const expected: object = new Movie(
//     1008,
//     'Mstiteli',
//     900,
//     'USA',
//     2012,
//     'Viktorya',
//     'fantasy',
//     1.3,
//     2
//   );
//   const result: object = {
//     country: 'USA',
//     genre: 'fantasy',
//     id: 1008,
//     name: 'Mstiteli',
//     price: 900,
//     quanitty: 2,
//     slogan: 'Viktorya',
//     time: 1.3,
//     year: 2012,
//   };

//   expect(expected).toEqual(result);
// });

// test('создание карточки музыка', () => {
//   const expected: object = new MusicAlbum(1008, 'Mstiteli', 'Viktorya', 500);
//   const result: object = {
//     author: 'Viktorya',
//     id: 1008,
//     name: 'Mstiteli',
//     price: 500,
//     quanitty: 1,
//   };

//   expect(expected).toEqual(result);
// });

// test('создание карточки книга', () => {
//   const expected: object = new Book(1008, 'Mstiteli', 'Viktorya', 500, 300);
//   const result: object = {
//     author: 'Viktorya',
//     id: 1008,
//     name: 'Mstiteli',
//     pages: 300,
//     price: 500,
//     quanitty: 1,
//   };

//   expect(expected).toEqual(result);
// });

test.each([
  [undefined, 1900],
  [10, 1710],
])('метод Cart.wholeSumm со скидкой %s', (sale, price) => {
  const cart = new Cart();

  cart.add(new Book(1008, 'Mstiteli', 'Viktorya', 500, 300));
  cart.add(new MusicAlbum(1009, 'Mstiteli', 'Viktorya', 500));
  cart.add(
    new Movie(10010, 'Mstiteli', 900, 'USA', 2012, 'Viktorya', 'fantasy', 1.3)
  );

  expect(cart.wholeSumm(sale)).toBe(price);
});

test('удаление покупки', () => {
  const cart = new Cart();

  cart.add(new Book(1009, 'Mstiteli', 'Viktorya', 500, 300));
  cart.add(new MusicAlbum(1010, 'Mstiteli', 'Viktorya', 500));
  cart.add(
    new Movie(1011, 'Mstiteli', 900, 'USA', 2012, 'Viktorya', 'fantasy', 1.3)
  );
  cart.add(new Smartfone(1008, 'iphone', 900, true));
  cart.add(new Smartfone(1008, 'iphone', 900, true));

  cart.deleateProduct(1010);
  cart.deleateProduct(1008);

  expect(cart.items.length).toBe(3);
});

test('добавление больше одного товара', () => {
  const cart = new Cart();
  const smartfone = new Smartfone(1008, 'iphone', 900, true);
  const book = new Book(1009, 'Mstiteli', 'Viktorya', 500, 300);

  cart.add(smartfone);
  cart.add(smartfone);
  cart.add(book);
  cart.add(book);

  expect(cart.items[0].price).toBe(1800);
  expect(cart.items[1].price).toBe(500);
  expect(cart.items[0].quanitty).toBe(2);
  expect(cart.items.length).toBe(2);

  cart.deleateProduct(1008);
  expect(cart.items[0].quanitty).toBe(1);
});
