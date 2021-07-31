<template>
  <div class="book">
    <h3>
      <router-link :to="{ path: '/' + book.id }">{{ book.title }}</router-link>
    </h3>
    <p>{{ shortDesc }}</p>
    <img :src="book.image" alt="book image " />
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
  background: rgb(9, 0, 2);
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 1rem auto;
  white-space: pre-wrap;

  a {
    transition: 0.4s;
    text-decoration: none;
    color: white;
    font-size: 2rem;
    padding: 2rem 0;
    display: block;

    &:hover {
      cursor: pointer;
      color: rgb(31, 128, 128);
      transform: scale(1.05);
    }
  }

  p {
    color: rgb(255, 255, 255);
    padding: 1rem;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
