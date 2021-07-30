<template>
  <div class="book-detail">
    <h1>{{ book.title }}</h1>

    <p>{{ book.description }}</p>
    <img :src="book.image || fallback" alt="" />
    <div class="btn">
      <button @click="deleteBook(book.id)">Delete This Book</button>
      <button @click="updateBook">Update This Book</button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    // Get The id Of The Current Book
    const id = route.params.id;
    // Get All The Books From The Storage
    const allBooks = inject("allBooks").value;
    const addBook = inject("addBook");
    const updateBook = inject("updateBook");
    const deleteBook = inject("deleteBook");

    const book = allBooks.find((el) => el.id === id);

    const fallback =
      "https://images.freeimages.com/images/large-previews/fc8/very-old-books-1310025.jpg";

    const updateBookInstance = () => {};

    const deleteBookInstance = (bookid) => {
      console.log("Deleted Book With id  : ", bookid);
      deleteBook(bookid);
    };

    return { book, fallback, deleteBook, updateBook };
  },
};
</script>

<style lang="scss">
.book-detail {
  max-width: 960px;
  margin: 0 auto;

  h1 {
    color: rgb(16, 113, 113);
  }

  p {
    color: rgb(147, 136, 136);
  }

  img {
    width: 80%;
    border: 4px solid cadetblue;
  }

  .btn {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;

    button {
      background: #007bff;
      color: white;
      padding: 1rem;
      transition: 0.4s;
      border: none;
      border-radius: 50px;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
}
</style>
