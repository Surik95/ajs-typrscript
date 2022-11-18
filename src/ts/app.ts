import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';
import Smartfone from './domain/Smartfone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(
  new Movie(1009, 'Mstiteli', 900, 'USA', 2012, 'Viktorya', 'fantasy', 1.3)
);
cart.add(
  new Movie(1009, 'Mstiteli', 900, 'USA', 2012, 'Viktorya', 'fantasy', 1.3)
);
cart.add(new Smartfone(1010, 'iphone', 900, true));
cart.add(new Smartfone(1010, 'iphone', 900, true));

console.log(cart.items);

console.log(cart.wholeSumm());
console.log(cart.wholeSumm(30));
cart.deleateProduct(1001);
console.log(cart.items);

// const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
// cart.add(item1);
// console.log(cart.items);
// cart.add(item1);
// console.log(cart.items);
// cart.add(item1);
// console.log(cart.items);
