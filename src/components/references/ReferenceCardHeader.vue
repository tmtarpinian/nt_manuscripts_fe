<template>
    <div>
        <h3>{{this.titelize(book)}} {{chapter}}:{{verse}}
        </h3>
        <button @click="previousReferenceClick" :disabled="minimumReferenceId">
          Previous
        </button>
        <button @click="nextReferenceClick" :disabled="maximumReferenceId">
          Next
        </button>
         <button @click="AllTexts" :disabled="minimumReferenceId">
          All Texts
        </button>
        <button @click="triggerVersionChange(28)" :disabled="isCurrentVersion(28)">
          NA28
        </button>
        <button @click="triggerVersionChange(27)" :disabled="isCurrentVersion(27)">
          NA27
        </button>
        <button @click="triggerVersionChange(26)" :disabled="isCurrentVersion(26)">
          NA26
        </button>
    </div>
</template>

<script>

export default {
  props: ['book', 'chapter', 'verse'],
  emits: ['change-version'],
  computed: {
    currentReferenceId() {
      return this.$store.getters['references/getCurrentReferenceId'];
    },
    minimumReferenceId() {
      return this.currentReferenceId <= 1;
    },
    maximumReferenceId() {
      if (this.currentReferenceId === 7957 || this.currentReferenceId === 7958) {
        return false;
      }
      return this.currentReferenceId >= 7956;
    },
  },
  methods: {
    titelize(name) {
      return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
    previousReferenceClick() {
      const newId = this.subtractIdByOne(this.currentReferenceId);
      this.requestReferenceById(newId);
    },
    nextReferenceClick() {
      const newId = this.addIdByOne(this.currentReferenceId);
      this.requestReferenceById(newId);
    },
    subtractIdByOne(id) {
      if (id === 7957) {
        return 4328;
      }
      if (id === 7958) {
        return 3997;
      }
      return id - 1;
    },
    addIdByOne(id) {
      if (id === 7957) {
        return 4329;
      }
      if (id === 7958) {
        return 3998;
      }
      return id + 1;
    },
    requestReferenceById(id) {
      const newReference = this.$store.getters['references/references'].find((reference) => reference.id === id);
      if (newReference !== undefined) {
        return this.$store.dispatch('references/setCurrentReference', newReference.id);
      }
      return this.$store.dispatch('references/loadReferenceById', id);
    },
    triggerVersionChange(clickVersion) {
      this.$emit('change-version', clickVersion);
    },
    isCurrentVersion(buttonVersion) {
      return this.version === buttonVersion;
    },
  },
};
</script>
