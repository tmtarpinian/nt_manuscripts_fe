<template>
    <div>
        <h3>{{this.titelize(book)}} {{chapter}}:{{verse}}
        </h3>
        <button @click="previousReferenceClick" :disabled="minimumReferenceId">
          Previous
        </button>
        <button @click="nextReferenceClick" :disabled="maximumReferenceId"> Next</button>
    </div>
</template>

<script>

export default {
  props: ['book', 'chapter', 'verse'],
  emits: ['reference-request'],
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
      console.log(this.currentReferenceId);
    },
    nextReferenceClick() {
      console.log(this.currentReferenceId);
    },
  },
};
</script>

// requestReferenceById(id) {
//       // if (this.$store.getters['references/getCurrentReferenceId'] === undefined) {
//       //   return this.$store.dispatch('references/loadReference', id);
//       // }
//       const newReference = this.$store.getters['references/references'].find((reference)
// => reference.id === id);
//       if (newReference !== undefined) {
//         return this.$store.dispatch('references/setCurrentReference', newReference.id);
//       }
//       return this.$store.dispatch('references/loadReferenceById', id);
//     },
