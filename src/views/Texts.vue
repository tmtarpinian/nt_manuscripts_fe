<template>
    <section>
        <h1> Texts
        </h1>
    </section>
    <section>
       <div>
        <ul>
            <text-cards v-for="text in textList" :key="text.id"
              :number="text.number"
              :date="text.date"
              :textType="text.textType"
              :group="text.group"
            >
            </text-cards>
        </ul>
    </div>
    </section>
</template>

<script>
import TextCards from '../components/TextCards.vue';

export default {
  components: { TextCards },
  computed: {
    textList() {
      return this.$store.getters['texts/texts'];
    },
  },
};
</script>
