<template>
    <div>
        <h1>References</h1>
      <form>
        Add search fields here:
      </form>
        <reference
        ></reference>
    </div>
</template>

<script>
// import ReferenceCards from '../components/ReferenceCards.vue';
import Reference from './Reference.vue';

export default {
  components: { Reference },
  computed: {
    referenceData() {
      return this.$store.getters['references/references'];
    },
  },
};
</script>
