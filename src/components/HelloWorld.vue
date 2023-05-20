<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";

const tele = Telegram.WebApp;

const count = ref(0);

const ua = navigator.userAgent;

const apiVersion = tele.version;
onMounted(() => {
  tele.ready();
});

tele.MainButton.text = "add";

tele.MainButton.onClick(() => {
  count.value++;
});
console.log(tele);

tele.HapticFeedback.impactOccured("medium");

tele.MainButton.show();
</script>

<template>
  <div>TestWebApp</div>
  <div>
    <button @click="count++">count is: {{ count }}</button>
  </div>
  <div>
    {{ ua }}
    api:{{ apiVersion }}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
