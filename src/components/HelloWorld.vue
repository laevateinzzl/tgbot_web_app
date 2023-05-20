<script setup lang="ts">
import {} from "telegram-webapps-types";
import { onMounted } from "vue";
// import { ref } from "vue";

const tele = Telegram.WebApp;

onMounted(() => {
  tele.ready();
}),
  console.log(tele);
</script>

<template>TestWebApp</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
