<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/list">链表</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
