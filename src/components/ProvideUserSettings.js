import { v4 as uuid } from "uuid";
// persisting the state on refresh
import createPersistedState from "vuex-persistedstate";

import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      allBooks: [
        {
          title: "Lord Of The Rings",
          description:
            "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore",
          image: "https://s4.uupload.ir/files/book-1181637-640x480_hmrq.jpg",
          id: uuid(),
        },
      ],
    };
  },
  // plugins
  plugins: [createPersistedState()],
  //
  mutations: {
    updateBook: (state, payload) => {
      const idx = state.allBooks.findIndex((book) => book.id == payload.id);
      state.allBooks[idx] = payload.updatedBook;
    },

    deleteBook: (state, id) => {
      state.allBooks = state.allBooks.filter((book) => book.id != id);
    },
    addBook: (state, newBook) =>
      (state.allBooks = [...state.allBooks, newBook]),
  },
});

export default store;
