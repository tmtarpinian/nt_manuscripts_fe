<template>
    <div>
        <reference-filter @reference-request="referenceRequest"></reference-filter>
        <reference v-if="currentReference"/>
    </div>
</template>

<script>
import ReferenceFilter from '../components/ReferenceFilter.vue';
import Reference from './Reference.vue';

export default {
  components: {
    ReferenceFilter, Reference,
  },
  computed: {
    currentReference() {
      return this.$store.getters['references/getCurrentReferenceId'] !== undefined;
    },
  },
};
</script>
