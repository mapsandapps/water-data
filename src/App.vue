<template>
  <div id="app">
    <div id="nav" class="p-8">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  a {
    @apply font-bold text-gray-500;

    &.router-link-exact-active {
      @apply text-blue-500;
    }
  }
}
</style>
