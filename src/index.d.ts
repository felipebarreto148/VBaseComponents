declare module 'v-base-components' {
  import { DefineComponent } from 'vue';

  interface BaseButtonProps {
    label?: string;
  }

  export const BaseButton: DefineComponent<BaseButtonProps>;
}