import { defineStore } from "pinia";
import { ref } from "vue";

export const useInventoryStore = defineStore("inventory", () => {
  const cells: number = 25;
  const loading = ref<boolean>(true);

  const savedInventory = JSON.parse(localStorage.getItem("inventory"));

  const inventoryItems = savedInventory || [
    {
      id: 1,
      position: 1,
      number: "1",
      title: "Зеленый",
      description: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      count: 2,
    },
    {
      id: 2,
      position: 2,
      number: "2",
      title: "Оранжевый",
      description: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      count: 3,
    },
    {
      id: 3,
      position: 3,
      number: "3",
      title: "Фиолетовый",
      description: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      count: 5,
    },
  ];

  localStorage.setItem("inventory", JSON.stringify(inventoryItems));

  return { inventoryItems, cells, loading };
});
