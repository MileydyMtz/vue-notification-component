<script setup>
import TheNotification from './components/TheNotification.vue';
</script>

<template>
  <main>
    <TheNotification 
    type = "success" 
    message="Success!"
    :autoClose="false"
    />
  </main>
</template>