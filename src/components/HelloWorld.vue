<script setup lang="ts">
import {} from "telegram-webapps-types";
import { onMounted } from "vue";
import { ref } from "vue";

const tele = Telegram.WebApp;

const count = ref(0);

onMounted(() => {
  tele.ready();
}),
  console.log(tele);
</script>

<template>
  <div>TestWebApp</div>
  <div>
    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
