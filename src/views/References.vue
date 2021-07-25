<template>
    <div>
        <reference-filter @reference-request="referenceRequest"></reference-filter>
        <reference
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
  },
  methods:{
    referenceRequest(data){
      
    }
  }
};
</script>
