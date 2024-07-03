document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/books")
        .then(response => response.json())
        .then(books => {
            const booksDiv = document.getElementById("books");
            books.forEach(book => {
                const bookDiv = document.createElement("div");
                bookDiv.classList.add("book");
                bookDiv.innerHTML = `
                    <h2>${book.title}</h2>
                    <p>Autor: ${book.author}</p>
                    <p>Ano: ${book.year}</p>
                `;
                booksDiv.appendChild(bookDiv);
            });
        });
});
