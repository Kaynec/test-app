<template>
  <div class="book">
    <h3>
      <router-link :to="{ path: '/' + book.id }">{{ book.title }}</router-link>
    </h3>
    <p>{{ shortDesc }}</p>
    <img :src="book.image || fallback" />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    book: Object,
  },
  //
  setup(props) {
    const fallback =
      "https://images.freeimages.com/images/large-previews/fc8/very-old-books-1310025.jpg";

    const shortDesc = computed(() => {
      const { book } = props;
      return book.description.substr(0, 100) + "...";
    });

    return { fallback, shortDesc };
  },
};
</script>

<style lang="scss">
.book {
  width: 50%;
  margin: 0 auto;
  background: crimson;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    transition: 0.4s;
    padding: 1rem;
    display: inline-block;

    &:hover {
      transform: scale(1.1);
      color: rgb(215, 196, 196);
    }
  }

  p {
    color: rgb(215, 204, 204);
    padding: 1rem;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
