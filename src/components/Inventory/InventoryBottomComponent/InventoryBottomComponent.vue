<template>
  <div class="bottom-component">
    <template v-if="isOpen">
      <div class="close-btn" @click="closeComponent">
        <UiIcon item="close" />
      </div>
      <template v-if="isLoading">
        <UiSkeleton size="large" />
      </template>
      <template v-else> Здесь находится компонент </template>
    </template>
    <div v-else class="return-btn" @click="openComponent">
      Вернуть компонент
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { UiSkeleton, UiIcon } from "@/components/UI";
import { useInventoryStore } from "@/stores/store";

const store = useInventoryStore();
const isLoading = computed(() => store.loading);
const isOpen = ref<boolean>(true);

const openComponent = () => {
  isOpen.value = true;
};
const closeComponent = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.bottom-component {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 45px 18px 18px;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background: #262626;
  min-height: 72px;
  height: 100%;
  font-family: "Inter";
  color: #fff;
  font-size: 19px;
  position: relative;
}

.close-btn {
  position: absolute;
  padding: 8px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.return-btn {
  cursor: pointer;
}
</style>
