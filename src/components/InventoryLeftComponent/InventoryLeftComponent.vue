<template>
  <div class="left-component">
    <div class="left-component__img">
      <template v-if="isLoading">
        <img src="@/assets/images/left_img.png" alt="img" />
      </template>
      <template v-else> Изображение карточки </template>
    </div>
    <div class="left-component__title">
      <template v-if="isLoading">
        <UiSkeleton size="large" />
      </template>
      <template v-else> Заголовок карточки </template>
    </div>

    <div class="left-component__description">
      <template v-if="isLoading">
        <UiSkeleton v-for="line in countOfLines" :key="line" />
      </template>
      <template v-else> Описание карточки </template>
    </div>
    <div class="left-component__bottom-info">
      <template v-if="isLoading">
        <UiSkeleton size="small" />
      </template>
      <template v-else> Описание карточки </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UiSkeleton } from "@/components/UI";

const isLoading = ref<boolean>(true);
const countOfLines = ref<number>(5);
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
  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
