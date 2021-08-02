<template>
    <div>
        <reference-filter @reference-request="referenceRequest"></reference-filter>
        <reference v-if="currentReference"
        ></reference>
    </div>
</template>

<script>
// import ReferenceCards from '../components/ReferenceCards.vue';
import Reference from './Reference.vue';
import ReferenceFilter from '../components/ReferenceFilter.vue';

export default {
  components: { Reference, ReferenceFilter },
  computed: {
    referenceData() {
      return this.$store.getters['references/referencesList'];
    },
    currentReference() {
      return this.$store.getters['references/getCurrentReferenceId'] !== undefined;
    },
  },
  methods: {
    referenceRequest(data) {
      if (this.$store.getters['references/getCurrentReferenceId'] === undefined) {
        return this.$store.dispatch('references/loadReference', data);
      }
      const newReference = this.$store.getters['references/references'].find((reference) => reference.book === data.book && reference.chapter === parseInt(data.chapter, 10) && reference.verse === parseInt(data.verse, 10));
      if (newReference !== undefined) {
        return this.$store.dispatch('references/setCurrentReference', newReference.id);
      }
      return this.$store.dispatch('references/loadReference', data);
    },
  },
};
</script>
