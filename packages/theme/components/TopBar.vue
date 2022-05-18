<template>
  <SfTopBar class="topbar">
    <template #left>
      <SfButton class="sf-button--text">{{ $t('Help & FAQs') }}</SfButton>
    </template>
    <template #right>
      <LocaleSelector />
    </template>
  </SfTopBar>
</template>

<script>
import { SfTopBar } from '@storefront-ui/vue';
import LocaleSelector from './LocaleSelector';

export default {
  components: {
    SfTopBar,
    LocaleSelector
  }
};

</script>
<style lang="scss" scoped>
.topbar {
  position: relative;
  z-index: 2;
  background-color: #E09F3E;
  color: #FFF;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
</style>
