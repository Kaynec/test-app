<template>
  <h1>ADD A BOOK</h1>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const allBooks = inject("allBooks");
    const addBook = inject("addBook");
    const updateBook = inject("updateBook");
  },
};
</script>
