<template>
  <div class="wrapper">
    <div class="sheet">
      <InventorySheetCell
        v-for="(cell, index) in cells"
        :key="index"
        class="sheet__cell"
        @dragover.prevent
        @drop.prevent="handleDrop($event, cell)"
      >
        <InventoryItem
          v-if="getElementByPosition(cell)"
          :item="getElementByPosition(cell)"
          class="sheet__item"
          @click="openModal(getElementByPosition(cell))"
        />
      </InventorySheetCell>
    </div>
    <ModalWindow
      v-show="isOpen"
      :item="modalItem"
      class="modal-window"
      :class="{ 'modal-window_open': isOpen }"
      @close-modal="closeModal"
      @delete-items="deleteItems"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from "vue";
import { InventorySheetCell, InventoryItem } from "@/components/Inventory";
import { itemI, ModalWindow } from "@/components";
import { useInventoryStore } from "@/stores/store";

const store = useInventoryStore();

const cells = computed(() => store.cells);
const inventoryItems: Ref<itemI[]> = ref(store.inventoryItems);

const isOpen = ref(false);
const modalItem = ref();

const openModal = (item: itemI) => {
  isOpen.value = true;
  modalItem.value = item;
};

const closeModal = () => {
  isOpen.value = false;
};

const getElementByPosition = (position: number) => {
  return inventoryItems.value.find((item) => item.position === position);
};

const handleDrop = (event: DragEvent, cell: number) => {
  const elementId = event?.dataTransfer?.getData("text/plain");
  const item = inventoryItems.value.find(
    (item) => item?.id?.toString() === elementId
  );

  if (item && !getElementByPosition(cell)) {
    item.position = cell;
    localStorage.setItem("inventory", JSON.stringify(inventoryItems.value));
  }
};

const deleteItems = (item: itemI, value: number) => {
  if (value <= item?.count) {
    item.count = item?.count - value;
  }
  localStorage.setItem("inventory", JSON.stringify(inventoryItems.value));
  closeModal();
};
</script>

<style lang="scss" scoped>
@mixin animate($animation, $duration, $method, $times) {
  animation: $animation $duration $method $times;
}
@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

.wrapper {
  max-height: 500px;
  position: relative;
  overflow: hidden;
}
.modal-window {
  position: absolute;
  right: 0;
  bottom: 0;
  animation: modal_animate 1s linear 1;
  &_open {
    @keyframes modal_animate {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
}
.sheet {
  display: grid;
  grid-template-columns: repeat(5, 105px);
  grid-template-rows: repeat(5, 100px);
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  &__cell {
    border: 0.5px solid #4d4d4d;
    &:nth-child(n + 1) {
      border-top: none;
      border-left: none;
    }
    &:nth-child(5n) {
      border-top: none;
      border-right: none;
    }
    &:nth-last-child(-n + 5) {
      border-bottom: none;
      border-left: none;
    }
    &:last-child {
      border-bottom: none;
      border-right: none;
    }
  }
  &__item {
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover {
      background-color: #2f2f2f;
    }
  }
}
</style>
