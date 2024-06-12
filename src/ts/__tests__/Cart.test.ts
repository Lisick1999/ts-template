import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('items getter should return equal movie', () => {
  const cart = new Cart();

  const mockMovie = new Movie(12345, 'The Avenger', 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666522158_28-mykaleidoscope-ru-p-mstiteli-kartinki-pinterest-28.jpg', 100, 'IMAX');
  cart.add(new Movie(12345, 'The Avenger', 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666522158_28-mykaleidoscope-ru-p-mstiteli-kartinki-pinterest-28.jpg', 100, 'IMAX'));
  expect(cart.items).toEqual([mockMovie]);
})

test('items getter should return equal movie without quality', () => {
  const cart = new Cart();

  const mockMovie = new Movie(526, 'The Mixers', 'Смесители', 2024, 'Россия', 'Mixers Assemble!', 'артхаус', '137 мин. / 02:17', 'https://avatars.mds.yandex.net/get-altay/6119709/2a00000180bda42ef0f6828f6c9126638bde/orig', 1000);
  cart.add(new Movie(526, 'The Mixers', 'Смесители', 2024, 'Россия', 'Mixers Assemble!', 'артхаус', '137 мин. / 02:17', 'https://avatars.mds.yandex.net/get-altay/6119709/2a00000180bda42ef0f6828f6c9126638bde/orig', 1000));
  expect(cart.items).toEqual([mockMovie]);
})

test('empty shopping cart', () => {
  const cart = new Cart();

  expect(cart.amount()).toBe(0);
});

test('a filled shopping cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(12345, 'The Avenger', 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666522158_28-mykaleidoscope-ru-p-mstiteli-kartinki-pinterest-28.jpg', 100, 'IMAX'));

  expect(cart.amount()).toBe(3000);
});

test('the amount of the basket with a discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(12345, 'The Avenger', 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666522158_28-mykaleidoscope-ru-p-mstiteli-kartinki-pinterest-28.jpg', 100, 'IMAX'));

  expect(cart.discountedAmount(10)).toBe(2700);
});

test('removing an item from the shopping cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(12345, 'The Avenger', 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666522158_28-mykaleidoscope-ru-p-mstiteli-kartinki-pinterest-28.jpg', 100, 'IMAX'));

  cart.remove(1008);
  expect(cart.items.length).toBe(2);
});

test('removing an item from an empty shopping cart', () => {
  const cart = new Cart();

  cart.remove(1008);
  expect(cart.items.length).toBe(0);
});