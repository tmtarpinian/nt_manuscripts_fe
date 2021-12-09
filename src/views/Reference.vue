<template>
    <div>
        <reference-card-header v-if="currentReference"
          @change-version="changeVersion"
          :book="referenceData.book"
          :chapter="referenceData.chapter"
          :verse="referenceData.verse"
        />
        <nestle-aland-references v-if="currentReference"
          :version="version"
          :referenceId="currentReferenceId"
        />
    </div>
</template>

<script>
import ReferenceCardHeader from '../components/references/ReferenceCardHeader.vue';
// import AllReferenceTexts from '../components/references/AllReferenceTexts.vue';
import NestleAlandReferences from '../components/references/NA27Reference.vue';

export default {
  components: {
    ReferenceCardHeader, NestleAlandReferences, // AllReferenceTexts,
  },
  data() {
    return {
      currentReferenceId: this.$store.getters['references/getCurrentReferenceId'],
      version: 28,
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
  methods: {
    changeVersion(newVersion) {
      this.version = newVersion;
    },
  },
};
</script>
