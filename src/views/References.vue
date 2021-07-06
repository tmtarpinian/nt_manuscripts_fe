<template>
    <div>
        <h1>References</h1>
        <ul>
            <li v-for="reference in referenceList" :key="reference.id">
                {{reference.book}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  computed: {
    referenceList() {
      return this.$store.getters['references/references'];
    },
  },
};
</script>
