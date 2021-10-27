function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

/*
partitionBooksByBorrowedStatus
create a variable for the books that have been returned
filter every book that has been returned
create a variable for books that have not been returned
filter every book that hasn't been returned
Create an empty array for the returned and unreturned books
push them into on array
return the total
*/

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter((book) => !book.borrows[0].returned);
  let total = [];
  total.push(unreturned, returned);
  return total;
}

/*
getBorrowersForBook
locate the borrowers of each book
create a variable that finds the corresponding id in the accounts array
return a new array that includes the borrowers information and the status of the book
return only 10 borrowers and their information
*/

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let result = accounts.find((acc) => acc.id === borrow.id);
    //console.log(result);
    return {...borrow, ...result}
  }).slice(0, 10);
}


//////////////////////////////////////////////////////////////////////////////
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
