<script setup>
  import {ref,reactive, onMounted} from 'vue';
  const API_URL = "http://localhost:8000/todos";

  const messages = ref("");

  onMounted(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      messages.value = data.todos
    } catch(e) {
      // statements
      console.log(e);
    }
  })


</script>

<template>
  <ul v-if="messages">
    <li v-for="{taskName} in messages"> {{taskName}}</li>
  </ul>
  <p v-else>Loding...</p>
</template>
