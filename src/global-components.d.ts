import BaseButton from './components/ui/BaseButton.vue';
import ProductDescription from './components/Cards/elements/ProductDescription.vue';
import CounterInfo from './components/Cards/elements/CounterInfo.vue';
import ButtonFilter from './components/ui/ButtonFilter.vue';
import BaseCard from './components/ui/BaseCard.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton,
    ProductDescription: typeof ProductDescription,
    CounterInfo: typeof CounterInfo,
    ButtonFilter: typeof ButtonFilter,
    BaseCard: typeof BaseCard,
  }
}