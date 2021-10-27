function getTotalBooksCount(books) {
  let total = books.length;
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = accounts.length;
  return total;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter((book) => !book.borrows[0].returned);
  return booksBorrowed.length;
}

/*
Get Most Common Genres
Using the reduce function to accumulate the number of times a certain genre is in the books array
create the accumulator value and the book element in the reduce function
create a variable genre = book.genre
use if statement that if the genre matches
Then add one to the amount
otherwise set the accumulator variable to a new object {name: genreName, count: 1}
return the accumulator
add the empty {} brackets for the accumulator variable to begin at index 0
return the result which is sorted by the helper function and sliced to include the top 5 results
*/

function getMostCommonGenres(books) {
  let genre = [];

  books.forEach((book) => {
    let found = genre.find((acc) => acc.name === book.genre);
    if (!found) {
      let name = book.genre;
      let count = 1;
      genre.push({name, count});
    } else {
      found.count++;
    }
    console.log(genre);
  });
  genre.sort(sortArrayByCommonality);
  return genre.slice(0, 5);
}

//Helper function to sort Arrays by their count
function sortArrayByCommonality (element1, element2) {
  let result = element2.count - element1.count;
  return result;
}

/*
getMostPopularBooks
create a new empty array for the popular books
loop through the books array
create a variable that finds 
*/

function getMostPopularBooks(books) {
  let popularBooks = [];

  books.forEach((book) => {
    let found = popularBooks.find((borrow) => borrow.name === book.borrows);
    if (!found) {
      let name = book.title;
      let count = book.borrows.length;
      popularBooks.push({name, count});
    } else {
      found.count++;
    }
  });
  popularBooks.sort(sortArrayByCommonality);
  return popularBooks.slice(0, 5)
}


/*
getMostPopularAuthors Function
create a new empty array for the popular authors
locate all the author ids in the author array
filter out the books array to only include the authors who wrote the books borrwed
count the amount of times each book was borrowed
create variables for first and last name
push all the popular authors in the empty array that includes their name and the amount borrowed
sort the popular authors by commonality using the helper function
return the top 5 popular authors in the array
*/

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];

  authors.forEach((author) => {
    let filterAuthorId = books.filter((book) => book.authorId === author.id);
    let amountBookBorrowed = filterAuthorId.reduce((acc, book) => acc + book.borrows.length, 0);
    const firstName = author.name.first;
    const lastName = author.name.last;
    const authorName = `${firstName} ${lastName}`; 
    popularAuthors.push({name: authorName, count: amountBookBorrowed});
  });
  popularAuthors.sort(sortArrayByCommonality);
  return popularAuthors.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
