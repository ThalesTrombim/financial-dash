import BaseButton from './components/ui/BaseButton.vue';
import ProductDescription from './components/Cards/elements/ProductDescription.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton,
    ProductDescription: typeof ProductDescription,
  }
}