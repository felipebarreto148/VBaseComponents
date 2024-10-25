<script lang="ts" setup>
defineProps<{
  label?: string
}>()

function handleClick() {
  console.log("click");
}
</script>

<template>
  <button class="base base-button" @click="handleClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.base-button {
  background-color: black;
  outline: none;
  border: none;
  width: fit-content;
  padding: 6px 8px;
  color: white;
  transition: all ease-in-out 200ms;

  &:hover {
    transform: scale(0.9);
  }
}
</style>