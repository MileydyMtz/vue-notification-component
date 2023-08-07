<script setup>
import Notification from './components/TheNotification.vue';
</script>

<template>
  <main>
    <Notification 
      type = "success" 
      message="Success!"
      :autoClose="false"
    />
  </main>
</template>