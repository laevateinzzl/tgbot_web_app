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

// tele.MainButton.onClick(() => {
//   count.value++;
// });
console.log(tele);

// tele.showPopup({
//   title: "test",
//   message: "test",
//   buttons: [
//     { id: "1", text: "default", type: "default" },
//     { id: "2", text: "ok", type: "ok" },
//     { id: "3", text: "close", type: "close" },
//   ],
// });
tele.showPopup({
  title: "test",
  message: "test",
  buttons: [
    { id: "2", text: "ok", type: "ok" },
    { id: "4", text: "cancel", type: "cancel" },
    { id: "5", text: "destructive", type: "destructive" },
  ],
});

tele.BackButton.show();

tele.MainButton.show();

tele.onEvent("mainButtonClicked", () => {
  tele.sendData(count.value.toString());
  console.log("mainButtonClicked:", count.value);
});
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
