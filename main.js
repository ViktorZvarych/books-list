(() => {
  /*-------CART-------*/
  // const books = [
  //   {
  //     id: 1,
  //     name: "Head First HTML and CSS",
  //     author: "Elizabeth Robson and Eric Freeman",
  //     price: 17,
  //     quantity: 42,
  //   },
  // ];

  // const bookPrice = document.querySelector(".cart-form-price");
  // const bookCountInput = document.querySelector(".cart-form-count");
  // const totalPrice = document.querySelector(".cart-form-total-price");
  // const buttonAdd1 = document.querySelector(".btn-add1");
  // const buttonMinus1 = document.querySelector(".btn-minus1");
  // const addToCartBtn = document.querySelector(".add-to-cart-btn");

  // const countTotalPrice = () => {
  //   totalPrice.textContent =
  //     Number(bookCountInput.value) * Number(bookPrice.textContent);
  //   if (Number(bookCountInput.value) < 0) {
  //     alert("Wrong quantity");
  //     bookCountInput.value = 1;
  //     totalPrice.textContent =
  //       Number(bookCountInput.value) * Number(bookPrice.textContent);
  //   } else if (Number(bookCountInput.value) > 42) {
  //     alert(`Only ${42} books are available`);
  //     bookCountInput.value = 42;
  //     totalPrice.textContent =
  //       Number(bookCountInput.value) * Number(bookPrice.textContent);
  //   }
  // };

  // const countOfBooksInCart = document.querySelector(".count-of-books");
  // const countOfBooksInCartSpan = document.querySelector(".count-of-books-span");

  // const showCountOfBooksInCart = () => {
  //   countOfBooksInCart.classList.add("count-of-books-visible");
  //   countOfBooksInCartSpan.textContent = Number(bookCountInput.value);
  // };

  // bookPrice.textContent = books[0].price;

  // countTotalPrice();

  // buttonAdd1.addEventListener("click", add1Book, false);
  // buttonMinus1.addEventListener("click", minus1Book, false);
  // bookCountInput.addEventListener("input", changebookCountInputValue, false);
  // addToCartBtn.addEventListener("click", addToCart, false);

  // function add1Book(evt) {
  //   evt.preventDefault();
  //   bookCountInput.value = Number(bookCountInput.value) + 1;
  //   countTotalPrice();
  // }

  // function minus1Book(evt) {
  //   evt.preventDefault();
  //   bookCountInput.value = Number(bookCountInput.value) - 1;
  //   countTotalPrice();
  // }

  // function changebookCountInputValue(evt) {
  //   evt.preventDefault();
  //   countTotalPrice();
  // }

  // function addToCart(evt) {
  //   showCountOfBooksInCart();
  // }

  /*-------Contact Button-------*/

  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", function () {
    this.classList.toggle("open");
  });

  //console.log(Number(bookPrice.textContent));
  //console.log(typeof bookPrice.textContent);
  //console.log(typeof Number(bookPrice.textContent));

  //let countOfBooks = Number(bookCountInput.textContent);
  //console.log(countOfBooks);
  //console.log(typeof countOfBooks);

  //console.log(bookCountInput.value);
  //console.log(typeof bookCountInput.value);
})();

(async () => {
  /*---------Book-banner---------*/

  fetch(
    "https://courses.prometheus.org.ua/assets/courseware/v1/2c108355bb16192430fcee1e56a3887d/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block/books.json"
  );
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  try {
    let response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://courses.prometheus.org.ua/assets/courseware/v1/2c108355bb16192430fcee1e56a3887d/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block/books.json",
      {
        // port: 443,
        // mode: "cors",
        headers: {
          // 'Access-Control-Allow-Origin': '*'
          // 'Connection': 'keep-alive',
          // 'Content-Encoding': 'gzip',
          // 'Content-Type': 'application/json',
          // 'Server': 'nginx',
          //'Strict-Transport-Security': "max-age='31536000'",
          // 'Transfer-Encoding': 'chunked',
          // 'Vary': 'Accept-Encoding',
          // 'Vary': 'Origin',
          // 'X-Frame-Options': 'ALLOW'
          // Content-Encoding: gzip
          // Content-Type: application/json
          // Date: Sat, 17 Dec 2022 22:20:17 GMT
          // Last-Modified: Wed, 30 Nov 2022 23:45:44 GMT
          // Server: nginx
          // Strict-Transport-Security: max-age=31536000; includeSubDomains
          // Transfer-Encoding: chunked
          // Vary: Accept-Encoding
          // Vary: Origin
          // X-Frame-Options: ALLOW
          // Accept: */*
          // Accept-Encoding: gzip, deflate, br
          // Accept-Language: uk,en-US;q=0.9,en;q=0.8
          // Host: courses.prometheus.org.ua
          // Origin: http://127.0.0.1:5501
          // Referer: http://127.0.0.1:5501/
          // sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
          // sec-ch-ua-mobile: ?0
          // sec-ch-ua-platform: "Windows"
          // Sec-Fetch-Dest: empty
          // Sec-Fetch-Mode: cors
          // Sec-Fetch-Site: cross-site
        },
      }
    );
    // .then((response) => {

    // });
    // console.log(response);
    // const c = await b.json();
    // console.log(c);
  } catch (error) {
    console.error("Some error: " + error);
  }

  // const response = await fetch("books-list.json");
  // const books = await response.json();

  // function renderBooks() {
  //   const booksList = books.books;
  //   console.log(booksList);

  //   const bookContainer = document.querySelector(".book-list-container");
  //   for (const book of booksList) {
  //     bookContainer.innerHTML += `
  //           <article class="book-banner">
  //           <div class="book-banner-cover">
  //               <img src="${book.image}" onError="this.src='../img/no-image.png'" class="book-banner-image" alt="${book.title}">
  //           </div>
  //           <ul class="book-banner-list ">
  //               <li class="book-banner-item">
  //               <span class="book-banner-tag">Book name:</span>
  //               <h2 class="book-banner-title">${book.title}</h2>
  //               </li>
  //               <li class="book-banner-item">
  //               <span class="book-banner-tag">Author:</span>
  //               <span class="book-banner-author">${book.author}</span>
  //               </li>
  //               <li class="book-banner-item">
  //               <div class="book-banner-price bold">
  //                   <span class="book-banner-tag">Price:</span>
  //                   <span class="book-banner-price ">${book.price} $</span>
  //               </div>
  //               <div>
  //                   <button type="button" class="book-banner-btn">View</button>
  //               </div>
  //               </li>
  //           </ul>
  //           </article>
  //       `;
  //   }
  // }

  // renderBooks();

  /*-------Contact Button-------*/

  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", function () {
    this.classList.toggle("open");
  });
})();
