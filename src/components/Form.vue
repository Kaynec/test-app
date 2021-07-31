<template>
  <form @submit.prevent="onSubmit">
    <div class="errors">
      <span v-for="error in errors" :key="error"> {{ error }} </span>
    </div>
    <label for="title"> Title </label>
    <input type="text" minlength="1" required id="title" v-model="title" />

    <label for="description"> Description </label>
    <input
      type="text"
      minlength="1"
      required
      id="description"
      v-model="description"
    />

    <label for="image"> Image </label>
    <input type="url" minlength="1" id="image" v-model="image" />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { v4 as uuid } from "uuid";
import { useStore } from "vuex";

export default {
  props: ["type"],
  setup(props) {
    //   Get The Type From Props to Know if it's a update or add form
    const { type } = props;
    //   get id from route
    const route = useRoute();
    const store = useStore();
    // Get the id from params
    const id = route.params.id;
    // Get The Values from Context
    const allBooks = store.state.allBooks;
    // in case of update
    const currentBook =
      allBooks.find((book) => book.id === route.params.id) || {};
    //
    const title = ref(currentBook.title || "");
    const image = ref(currentBook.image || "");
    const description = ref(currentBook.description || "");
    const errors = ref([]);

    // setup route for redirect
    const router = useRouter();
    // suubmit and add a new book
    const onSubmit = () => {
      if (!title) errors.push("Title Can't Be Empty");
      if (!description) errors.push("Description can't be empty");
      // The Book That's Being Created Or Updated
      const book = {
        title: title.value,
        image:
          image.length > 5
            ? image.value
            : "https://s4.uupload.ir/files/book-1181637-640x480_hmrq.jpg", // using a default fallback image for books

        description: description.value,
        id: currentBook.id || uuid(),
      };
      // if a book is being added
      if (type == "add") store.commit("addBook", book);
      else store.commit("updateBook", { id, updatedBook: book });

      router.push("/");
    };

    return { title, image, description, errors, onSubmit };
  },
};
</script>

// Styles //

<style lang="scss">
form {
  display: flex;
  width: clamp(225px, 90vw, 650px);
  margin: 0 auto;
  flex-direction: column;
  border-radius: 10px;
  text-align: left;
  background: hsl(0deg 0% 5%);
  padding-top: 4rem;

  input {
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.318);
    background: transparent;
    margin: 1rem 2rem 3rem 2rem;
    color: #ddd;
  }

  label {
    margin: 0 2rem;
    color: white;
  }

  button {
    background: hsl(110deg 44% 50%);
    width: 35%;
    padding: 0.7rem 1rem;
    border-radius: 25px;
    border: none;
    color: white;
    font-size: larger;
    transition: 0.4s;
    margin: 0 2rem 3rem 2rem;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
</style>
