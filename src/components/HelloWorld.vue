<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { Button } from "vant";
import { TelegramWebApps } from "telegram-webapps";
("telegram-webapps");

const tele = Telegram.WebApp;

// const t = window.Telegram.WebApp;

const count = ref(0);

// const ua = navigator.userAgent;

const apiVersion = tele.version;

onMounted(() => {
  tele.ready();
});

tele.MainButton.text = "add";

// tele.MainButton.onClick(() => {
//   count.value++;
// });

console.log(tele);
// console.log(t);

tele.BackButton.show();
tele.BackButton.onClick(() => {
  tele.close();
});

tele.MainButton.show();

tele.onEvent("settingsButtonClicked", () => {
  // tele.sendData("test");
  console.log("settingsButtonClicked");
});

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

const testSwitchInlineQuery = () => {
  tele.switchInlineQuery("TTYQM6StiqviB9V8aJbuiZNKMCnZyvArvU");
};

const testShowConfirm = () => {
  tele.showConfirm("test_show_confirm", (ok: boolean) => {
    console.log(ok);
  });
};

const testClose = () => {
  if (tele.isClosingConfirmationEnabled) {
    tele.disableClosingConfirmation();
  } else {
    tele.enableClosingConfirmation();
  }

  console.log(tele.isClosingConfirmationEnabled);
};

const testQrcode = (p: TelegramWebApps.ScanQrPopupParams) => {
  tele.showScanQrPopup(p, (data: string) => {
    console.log(data);
    return !data;
  });
};

tele.onEvent("themeChanged", () => {
  console.log("color_scheme", tele.colorScheme);
  console.log("theme", tele.themeParams);
});

tele.onEvent("mainButtonClicked", () => {
  tele.sendData("test");
});
</script>

<template>
  <div>TestWebApp</div>
  <div>api:{{ apiVersion }}</div>
  <div>
    <Button type="primary" @click="count++">count is: {{ count }}</Button>
    <Button type="primary" @click="showPopup">测试弹窗</Button>
    <Button type="primary" @click="testSwitchInlineQuery"
      >测试InlineQuery</Button
    >
    <Button type="primary" @click="testShowConfirm">测试Confirm</Button>
    <Button type="primary" @click="testClose">测试Close</Button>
    <Button type="primary" @click="testQrcode">测试Qrcode</Button>
    <!-- <Button type="primary" @click="testTheme">测试theme</Button> -->
  </div>
  <div>
    {{ tele.initData }}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
