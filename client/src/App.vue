<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink class="link" :to="{name:'home'}">Home </RouterLink>
    <RouterLink class="link" :to="{name:'create'}">Create Todo </RouterLink>

  </nav>
  <RouterView />
</template>

<style scoped>
  nav{
    width: 100%;
    height: 50px;
    background: black;

  }
  nav .link{
    color: #fff;
  }
</style>
