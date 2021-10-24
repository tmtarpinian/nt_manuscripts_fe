<template>
    <div>
        <reference-card-header v-if="currentReference"/>
        <all-reference-texts v-if="currentReference"/>
    </div>
</template>

<script>
import ReferenceCardHeader from '../components/references/ReferenceCardHeader.vue';
import AllReferenceTexts from '../components/references/AllReferenceTexts.vue';

export default {
  components: {
    ReferenceCardHeader, AllReferenceTexts,
  },
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
