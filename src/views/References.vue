<template>
    <div>
        <h1>References</h1>
        <ul>
            <reference-cards v-for="reference in referenceList" :key="reference.id"
              :book="reference.book"
              :chapter="reference.chapter"
              :verse="reference.verse"
            >
            </reference-cards>
        </ul>
    </div>
</template>

<script>
import ReferenceCards from '../components/ReferenceCards.vue';

export default {
  components: { ReferenceCards },
  computed: {
    referenceList() {
      return this.$store.getters['references/references'];
    },
  },
};
</script>
