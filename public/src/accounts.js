function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => {
    const lastname1 = accountA.name.last;
    const lastname2 = accountB.name.last;
    return lastname1.toLowerCase() < lastname2.toLowerCase() ? -1 : 1;
  });
  return result;               
}
                             

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    book.borrows.forEach((borrowNum) => {
      if (borrowNum.id === account.id) acc++;
    });
    return acc;
  }, 0);
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksNotReturned = books.filter((book) => {
    return book.borrows[0].id === account.id && !book.borrows[0].returned;
  });
  booksNotReturned.forEach((book) => {
    let includeAuthor = authors.find((author) => author.id === book.authorId);
    book.author = includeAuthor;
  });
  return booksNotReturned;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
