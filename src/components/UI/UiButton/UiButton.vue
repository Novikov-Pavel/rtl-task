<template>
  <button class="button" :class="[size, color]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { UiButtonProps } from "@/components/UI";

defineProps<UiButtonProps>();

</script>

<style lang="scss" scoped>
.button {
  border-radius: 8px;
  font-family: "SF Pro Display", sans-serif;
  border: none;
  cursor: pointer;
  width: 100%;
}

.red {
  background-color: #fa7272;
  color: #fff;
}

.white {
  background-color: #fff;
  color: #2d2d2d;
}

.large {
  padding: 11px;
}

.small {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
