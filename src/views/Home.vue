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

import { useStore } from "vuex";

export default {
  name: "Home",
  components: { BookModal },

  setup() {
    const store = useStore();
    const allBooks = store.state.allBooks;
    return { allBooks };
  },
};
</script>

<style lang="scss">
.book-container {
  max-width: 960px;
  margin: 0 auto;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
