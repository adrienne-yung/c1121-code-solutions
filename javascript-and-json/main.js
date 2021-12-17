var arrayOfBooks = [
  {
    isbn: 9781442421776,
    title: 'The Unbecoming of Mara Dyer',
    author: 'Michelle Hodkin'
  },

  {
    isbn: 9780007136599,
    title: 'The Fellowship of the Ring',
    author: 'J.R Tolkien'
  },

  {
    isbn: 9780316033411,
    title: 'Twilight',
    author: 'Stephanie Myer'
  }
];

var firstBook = JSON.stringify(arrayOfBooks[0]);
console.log('firstBook:', firstBook);
console.log('typeof firstBook:', typeof firstBook);

var secondBook = JSON.stringify(arrayOfBooks[1]);
console.log('secondBook:', secondBook);
console.log('typeof secondBook:', typeof secondBook);

var thirdBook = JSON.stringify(arrayOfBooks[2]);
console.log('thirdBook:', thirdBook);
console.log('typeof thirdBook:', typeof thirdBook);

console.log('Array of books:', arrayOfBooks);
console.log('typeof arrayOfBooks:', typeof arrayOfBooks);

var stringOfStudent = '{"name": "string", "id": "Number"}';
console.log('stringOfStudent:', stringOfStudent);
console.log('typeof stringOfStudent:', typeof stringOfStudent);

var object = JSON.parse(stringOfStudent);
console.log('object:', object);
console.log('typeof object:', typeof object);
