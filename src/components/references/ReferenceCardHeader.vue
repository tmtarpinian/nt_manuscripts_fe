<template>
    <div>
        <h3>{{this.titelize(book)}} {{chapter}}:{{verse}}
        </h3>
        <button> Previous</button>
        <button> Next</button>
    </div>
</template>

<script>

export default {
  props: ['book', 'chapter', 'verse'],
  emits: ['reference-request'],
  methods: {
    titelize(name) {
      return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
  },
};
</script>
