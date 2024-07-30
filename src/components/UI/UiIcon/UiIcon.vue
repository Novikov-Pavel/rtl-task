<template>
  <div class="ui-icon">
    <component :is="icon" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { UiIconProps } from "@/components/UI";

const props = withDefaults(defineProps<UiIconProps>(), { item: "item-img" });

const icons = {
  item_img1: () => import("@/assets/images/item_img1.svg"),
  item_img2: () => import("@/assets/images/item_img2.svg"),
  item_img3: () => import("@/assets/images/item_img3.svg"),
  close_img: () => import("@/assets/images/carbon_close.svg"),
};

let icon: string = "";

if (props.number && "item-img") {
  icon = defineAsyncComponent(icons[`item_img${props.number | '1'}`]);
} else {
  icon = defineAsyncComponent(icons[`close_img`]);
}
</script>
