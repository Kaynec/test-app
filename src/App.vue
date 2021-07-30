<template>
  <ProvideUserSettings>
    <div id="nav">
      <router-link to="/"> ALL Books </router-link> |
      <router-link to="/add">Add A Book</router-link>
    </div>
    <router-view />
  </ProvideUserSettings>
</template>

<script>
import ProvideUserSettings from "./components/ProvideUserSettings";

export default {
  components: { ProvideUserSettings },
  setup() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  word-break: break-all;
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
