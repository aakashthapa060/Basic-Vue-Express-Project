<script setup>
  import {ref,reactive, onMounted} from 'vue';
  const API_URL = "http://localhost:8000/todos";
  const taskName = ref("");
  const createTodo = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({taskName:taskName.value})
      })
      const data = await response.json();
      console.log(data)
    } catch(e) {
      // statements
      console.log(e);
    }
  }
</script>

<template>
  <form>
    <br>
    <input type="text" name="taskName" placeholder="Task Name" v-model="taskName" >

    <button @click.prevent="createTodo">Create</button>
    {{taskName}}
  </form>
</template>

