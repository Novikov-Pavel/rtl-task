<template>
  <div v-if="item" class="wrapper">
    <div class="close-btn" @click="closeModal">
      <UiIcon class="close-btn__img" />
    </div>

    <div class="modal">
      <div class="modal__img-wrapper">
        <UiIcon
          :key="item.number"
          :number="item.number"
          item="item-img"
          class="modal__img"
        />
      </div>

      <div class="modal__divider" />

      <div class="modal__title">
        <template v-if="isLoading">
          <UiSkeleton size="large" />
        </template>
        <template v-else> {{ item.title }}: {{ item.count }} шт. </template>
      </div>

      <div class="modal__description">
        <template v-if="isLoading">
          <UiSkeleton
            v-for="line in item?.description?.length"
            :key="line"
            size="medium"
          />
        </template>
        <template v-else>
          <div v-for="(line, index) in item.description" :key="index">
            {{ line }}
          </div>
        </template>
      </div>

      <div class="modal__divider" />

      <div class="modal__actions">
        <UiButton color="red" size="large" @click="openInput">
          Удалить предмет
        </UiButton>
      </div>
    </div>

    <div v-show="isOpen" class="confirm-modal">
      <UiInput v-model="inputValue" placeholder="Введите количество" />

      <div class="confirm-modal__buttons">
        <UiButton color="white" size="small" @click="closeInput">
          Отмена
        </UiButton>
        <UiButton color="red" size="small" @click="deleteItems(item)">
          Подтвердить
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { UiSkeleton, UiButton, UiIcon, UiInput } from "@/components/UI";
import { ModelWindowProps } from "@/components";
import { useInventoryStore } from "@/stores/store";

defineProps<ModelWindowProps>();
const emit = defineEmits<{
  (e: "close-modal", value: Event): void;
  (e: "delete-items", value1: ModelWindowProps, value2: string): void;
  (e: "update:modelValue"): void;
}>();

const store = useInventoryStore();
const isLoading = computed(() => store.loading);
const isOpen = ref<boolean>(false);
const inputValue = ref<string>("");

const openInput = () => {
  isOpen.value = true;
};

const closeInput = () => {
  isOpen.value = false;
};

const closeModal = (event: Event) => {
  emit("close-modal", event.target);
};

const deleteItems = (item: ModelWindowProps) => {
  emit("delete-items", item, inputValue.value);
  inputValue.value = "";
  closeInput();
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid #4d4d4d;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  max-width: 250px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.modal {
  display: flex;
  flex-direction: column;
  padding: 45px 15px 25px 15px;
  font-family: "Inter";
  color: #fff;
  font-size: 16px;
  &__img {
    width: 130px;
    margin: 0 auto;
    &-wrapper {
      height: 130px;
    }
  }
  &__divider {
    height: 1px;
    background-color: #4d4d4d;
    margin-top: 28px;
  }
  &__title {
    margin-top: 16px;
    font-size: 19px;
  }
  &__description {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__actions {
    margin-top: 18px;
  }
}

.confirm-modal {
  position: absolute;
  bottom: 0;
  border: 1px solid #4d4d4d;
  background: rgba(38, 38, 38, 0.6);
  backdrop-filter: blur(8px);
  padding: 20px 21px;
  &__buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
}

.close-btn {
  position: absolute;
  padding: 8px;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>
