let books = [
    {
        pavadinimas: "Smarkuolė Gilė Hopkins",
        puslapiai: 60
    },
    {
        pavadinimas: "Alisa Stebuklų šalyje",
        puslapiai: 192
    },
    {
        pavadinimas: "Jurgelis miškauja",
        puslapiai: 112
    },
    {
        pavadinimas: "Paslaptingas drakonas",
        puslapiai: 102
    },
    {
        pavadinimas: "Penktoji šlepetė plius",
        puslapiai: 200
    }
]

// 1. printBook(book) - atspausdina vienos knygos duomenis;
// 1 variantas

function printBook (book) {
    console.log("Knygos pavadinimas: " + book.pavadinimas + " Puslapių skaičius: " + book.puslapiai);
}

printBook(books[0]);

// // 2. printAllBooks(arr) - atspausdina visas knygas;

// function printAllBooks(arr) {
//     return (books.pavadinimas, books.puslapiai);
// }
// console.log(books);

books.forEach ((book) => printBook(book));
console.log("Knygos pavadinimas: " + books.pavadinimas + " Puslapių skaičius: " + books.puslapiai);

// // 3. getBooksCount(arr) - grąžina perskaitytų knygų skaičių;

let count = 0;
for (let i = 0; i < books.length; i++) {
    count++;
}
console.log(count);


// 4. getTotalNumberOfPages(arr) - grąžina perskaitytų knygų puslapių skaičių;

function getTotalNumberOfPages(arr) {
    return arr.reduce( (sum, book) => sum + book.puslapiai, 0);
}
console.log(getTotalNumberOfPages(books));

// 5. getMaxPages(arr) - grąžina knygą, kuri turi daugiausiai puslapių;

function getMaxPages(book) {
    let maxPages = book[0];
    for (let i = 1; i < book.length; i++) {
        if (book[i].puslapiai > maxPages.puslapiai) {
            maxPages = book[i];
        }
    }
    return maxPages;
}
console.log(getMaxPages(books))

// 6. getAvgNumberOfPages(arr) - grąžina perskaitytų knygų puslapių vidurkį.