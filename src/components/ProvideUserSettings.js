import { provide, reactive, readonly, ref } from "vue";

import { v4 as uuid } from "uuid";

export default {
  setup() {
    const allBooks = ref([
      {
        title: "Lord Of The Rings",
        description:
          "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore",
        image:
          "https://images.freeimages.com/images/large-previews/fc8/very-old-books-1310025.jpg",
        id: uuid(),
      },
    ]);

    // passing all books to children components

    const updateBook = (id, updatedBook) => (allBooks.value[id] = updatedBook);

    const addBook = (newBook) => allBooks.value.push(newBook);
    const deleteBook = (id) => allBooks.value.filter((book) => book.id != id);

    provide("allBooks", allBooks);
    provide("updateBook", updateBook);
    provide("addBook", addBook);
    provide("deleteBook", deleteBook);
    //
  },
};
