<template>
  <div class="left-component">
    <div class="left-component__img">
      <img src="@/assets/images/left_img.png" alt="img" />
    </div>

    <div class="left-component__title">
      <template v-if="isLoading">
        <UiSkeleton size="large" />
      </template>
      <template v-else> Заголовок карточки </template>
    </div>

    <div class="left-component__description">
      <template v-if="isLoading">
        <UiSkeleton v-for="line in lines" :key="line" />
      </template>
      <template v-else>
        <div v-for="line in lines" :key="line">Описание: {{ line }} строка</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { UiSkeleton } from "@/components/UI";
import { useInventoryStore } from "@/stores/store";

const store = useInventoryStore();
const isLoading = computed(() => store.loading);

const lines: number = 5;
</script>

<style lang="scss" scoped>
.left-component {
  max-width: 236px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 18px 14px 24px 14px;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background: #262626;
  font-family: "Inter";
  color: #fff;
  font-size: 16px;
  &__title {
    font-size: 19px;
    max-width: 190px;
    width: 100%;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 180px;
    width: 100%;
  }
}
</style>
