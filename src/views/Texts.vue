<template>
    <section>
        FILTER
    </section>
    <section>
        LIST OF COACHES
        <ul>
            <li v-for="text in filteredTexts" :key="text.id">
            {{text.number}}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  computed: {
    filteredTexts() {
      return this.$store.getters['texts/texts'];
    },
  },
};
</script>
