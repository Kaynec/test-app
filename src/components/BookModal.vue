<template>
  <div class="book">
    <h3>
      <router-link :to="{ path: '/' + book.id }">{{ book.title }}</router-link>
    </h3>
    <p>{{ shortDesc }}</p>
    <img :src="book.image" />
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
    const shortDesc = computed(() => {
      const { book } = props;
      return book.description.substr(0, 100) + "...";
    });

    return { shortDesc };
  },
};
</script>

<style lang="scss">
.book {
  width: clamp(220px, 90vw, 650px);
  background: crimson;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 1rem auto;
  white-space: pre-wrap;

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
