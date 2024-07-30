<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput"
    class="input"
  />
</template>

<script setup lang="ts">
import { UiInputProps } from "@/components/UI";

defineProps<UiInputProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.input {
  border-radius: 4px;
  border: 1px solid #4d4d4d;
  background: #262626;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: #fff;
}
</style>
