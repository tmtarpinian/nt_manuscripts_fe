<template>
    <div>
        <reference-card-header v-if="currentReference"
          :book="referenceData.book"
          :chapter="referenceData.chapter"
          :verse="referenceData.verse"
        />
        <all-reference-texts v-if="currentReference"
          :referenceId="currentReferenceId"
        />
    </div>
</template>

<script>
import ReferenceCardHeader from '../components/references/ReferenceCardHeader.vue';
import AllReferenceTexts from '../components/references/AllReferenceTexts.vue';

export default {
  components: {
    ReferenceCardHeader, AllReferenceTexts,
  },
  data() {
    return {
      currentReferenceId: this.$store.getters['references/getCurrentReferenceId'],
    };
  },
  computed: {
    currentReference() {
      return this.$store.getters['references/getCurrentReferenceId'] !== undefined;
    },
    referenceData() {
      return this.$store.getters['references/reference'];
    },
  },
};
</script>
