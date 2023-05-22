<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { Button, Step, Steps } from "vant";

const tele = Telegram.WebApp;

const count = ref(0);

// const ua = navigator.userAgent;

const apiVersion = tele.version;

const active = ref(1);

onMounted(() => {
  tele.ready();
});

tele.MainButton.text = "add";

// tele.MainButton.onClick(() => {
//   count.value++;
// });
console.log(tele);

tele.BackButton.show();

tele.MainButton.show();

const showPopup = () => {
  tele.showPopup({
    title: "test",
    message: "test",
    buttons: [
      { id: "1", text: "default", type: "default" },
      { id: "2", text: "ok", type: "ok" },
      { id: "3", text: "close", type: "close" },
    ],
  });
};

tele.onEvent("mainButtonClicked", () => {});
</script>

<template>
  <div>TestWebApp</div>
  <div>api:{{ apiVersion }}</div>
  <div>
    <Button type="primary" @click="count++">count is: {{ count }}</Button>
    <Button type="primary" @click="showPopup">测试弹窗</Button>
  </div>
  <div>
    <Steps :active="active">
      <Step>买家下单</Step>
      <Step>商家接单</Step>
      <Step>买家提货</Step>
      <Step>交易完成</Step>
    </Steps>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
