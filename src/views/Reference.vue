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
    currentReference() {
      return this.$store.getters['references/getCurrentReferenceId'] !== undefined;
    },
  },
};
</script>
