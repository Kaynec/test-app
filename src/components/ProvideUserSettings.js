import { onDeactivated, onMounted, provide, ref, watch } from "vue";

import { v4 as uuid } from "uuid";
// using let so i can use local storage
let allBooks = ref([
  {
    title: "Lord Of The Rings",
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore",
    image:
      "https://images.freeimages.com/images/large-previews/fc8/very-old-books-1310025.jpg",
    id: uuid(),
  },
]);

export default {
  setup() {
    onMounted(() => {
      const allBooksLocalStorage = JSON.parse(localStorage.getItem("allBooks"));
      if (allBooksLocalStorage) {
        allBooks.value = allBooksLocalStorage;
      }
    });
    // passing all books to children components

    const updateBook = (id, updatedBook) => {
      allBooks.value = allBooks.value.map((book) => {
        if (book.id === id) return updatedBook;
        return book;
      });
    };
    const addBook = (newBook) =>
      (allBooks.value = [...allBooks.value, newBook]);
    const deleteBook = (id) =>
      (allBooks.value = allBooks.value.filter((book) => book.id != id));

    provide("allBooks", allBooks);
    provide("updateBook", updateBook);
    provide("addBook", addBook);
    provide("deleteBook", deleteBook);
    // watching for books and saving in local storage
    const stopWatch = watch(allBooks, () => {
      localStorage.setItem("allBooks", JSON.stringify(allBooks.value));
    });
    // cleaning the watch on click
    onDeactivated(() => {
      stopWatch();
    });
  },

  render() {
    // Our provider component is a render less component
    // it does not render any markup of its own.
    return this.$slots.default();
  },
};
