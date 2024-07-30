<template>
  <div class="container">
    <div class="wrapper">
      <InventoryLeftComponent />
      <InventorySheet />
    </div>
    <InventoryBottomComponent />
  </div>
</template>

<script setup lang="ts">
import {
  InventoryLeftComponent,
  InventoryBottomComponent,
  InventorySheet,
} from "@/components/Inventory";
</script>

<style lang="scss">
html {
  background-color: #1e1e1e;
}

#app {
  padding: 32px;
}

.container {
  width: 788px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper {
  display: flex;
  gap: 24px;
}
</style>
