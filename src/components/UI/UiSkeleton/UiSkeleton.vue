<template>
  <div class="skeleton" :class="size" />
</template>

<script setup lang="ts">
import { UiSkeletonProps } from "@/components/UI";

withDefaults(defineProps<UiSkeletonProps>(), { size: "medium" });
</script>

<style lang="scss" scoped>
@keyframes animate {
  100% {
    transform: translateX(100%);
  }
}

.skeleton {
  background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
  width: 100%;
  position: relative;
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 50%,
      rgba(#fff, 0)
    );
    animation: animate 5s infinite;
    content: "";
  }
}

.small {
  border-radius: 4px;
  height: 10px;
}
.medium {
  border-radius: 4px;
  height: 10px;
}
.large {
  border-radius: 8px;
  height: 36px;
}
</style>
