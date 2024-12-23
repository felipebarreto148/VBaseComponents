<script lang="ts" setup>
import { IBaseButton } from "./button.model";

defineOptions({
  name: 'BaseButton'
});

withDefaults(defineProps<IBaseButton>(), {
  label: "Clique aqui",
  size: "medium",
  variant: "filled",
});
</script>

<template>
  <button class="base base-button" :size="size" :variant="variant">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.base-button {
  background-color: var(--base-color-primary);
  outline: none;
  border: none;
  width: fit-content;
  padding: var(--base-spacing-sm) var(--base-spacing-md);
  border-radius: 6px;
  color: white;
  transition: all ease-in-out 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }

  &[size="small"] {
    padding: var(--base-spacing-xs) var(--base-spacing-sm);
  }

  &[size="large"] {
    padding: var(--base-spacing-lg);
  }

  &[variant="outline"] {
    background: transparent;
    width: fit-content;
    color: black;
    border: 1px solid var(--base-color-primary);
    &:hover {
      background: var(--base-color-primary);
      color: white;
    }
  }
  &[variant="text"] {
    background: transparent;
    width: fit-content;
    color: black;
  }
  &[variant="link"] {
    background: transparent;
    width: fit-content;
    color: black;
    &:hover {
      color: var(--base-color-primary);
      text-decoration: underline var(--base-color-primary);
    }
  }
  &[variant="rounded"] {
    border-radius: 100%;
    width: fit-content;
  }
}
</style>
