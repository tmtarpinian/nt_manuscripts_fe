<template>
    <div>
        <h1>References</h1>
        <ul>
          <reference-details
            v-for="reference in referenceList"
            :key="reference.id"
            :book="reference.book"
            :chapter="reference.chapter"
            :verse="reference.verse"
          ></reference-details>
        </ul>
    </div>
</template>

<script>
import ReferenceDetails from '../components/ReferenceDetails.vue';

export default {
  components: {
    ReferenceDetails,
  },
  computed: {
    referenceList() {
      return this.$store.getters['references/references'];
    },
  },
};
</script>
