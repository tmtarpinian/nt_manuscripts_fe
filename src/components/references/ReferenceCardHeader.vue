<template>
    <div>
        <h3>{{this.titelize(referenceData.book)}} {{referenceData.chapter}}:{{referenceData.verse}}
        </h3>
        <button> Previous</button>
        <button> Next</button>
    </div>
</template>

<script>

export default {
  props: ['book', 'chapter', 'verse'],
  computed: {
    referenceData() {
      return this.$store.getters['references/reference'];
    },
  },
  methods: {
    titelize(name) {
      return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
  },
};
</script>
