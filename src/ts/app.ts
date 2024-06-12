import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie'

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(12345, 'The Avenger', 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666522158_28-mykaleidoscope-ru-p-mstiteli-kartinki-pinterest-28.jpg', 100, 'IMAX'));

console.log(cart.items);
