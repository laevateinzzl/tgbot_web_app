<script setup lang="ts">
import * as Sentry from "@sentry/browser";

// console.log("HelloWorld");
// Sentry.captureException(new Error("test"));
// undefinedFunction();
// console.error("test sentry");
fetch("https://taobao.com");
</script>

<template>
  <div>TestWebApp</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
