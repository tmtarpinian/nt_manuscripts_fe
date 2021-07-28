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
      return this.$store.getters['references/references'];
    },
    currentReference() {
      return this.$store.getters['references/getCurrentReferenceId'] !== undefined;
    },
  },
  methods: {
    referenceRequest(data) {
      this.$store.dispatch('references/loadReference', data);
      // this.$store.dispatch('references/findReference', data);
      // this.$router.replace(`/references/${this.currentId}`)
    },
  },
};
</script>
