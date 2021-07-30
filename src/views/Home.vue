<template>
  <div class="home" v-if="allBooks.length > 0">
    <div class="book-container" v-for="book in allBooks" :key="book.id">
      <BookModal :book="book" />
    </div>
  </div>
  <div v-else>
    <h1>No Books Found</h1>
  </div>
</template>

<script>
import BookModal from "../components/BookModal.vue";

import { inject } from "vue";

export default {
  name: "Home",
  components: { BookModal },

  setup() {
    const allBooks = inject("allBooks");
    const addBook = inject("addBook");
    const updateBook = inject("updateBook");

    const addBookOnClick = () => {
      addBook({
        title: "DUDE NIGGA",
        image: "WHAT",
      });
    };

    return { allBooks, addBookOnClick, updateBook };
  },
};
</script>

<style lang="scss">
.book-container {
  max-width: 960px;
  margin: 0 auto;
  white-space: pre-wrap;
  word-break: break-all;

  .book {
    margin: 1rem auto;
    white-space: pre-wrap;
  }
}
</style>
