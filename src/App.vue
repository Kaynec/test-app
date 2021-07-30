<template>
  <div id="nav">
    <router-link to="/"> ALL Books </router-link> |
    <router-link to="/add">Add A Book</router-link>
  </div>
  <router-view />
</template>

<script>
import { provide, reactive, readonly, ref } from "vue";

import { v4 as uuid } from "uuid";

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

export default {
  setup() {
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
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
