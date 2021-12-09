<template>
    <div class="card">
      <div class="table-title">
        <h2>Texts</h2>
      </div>

      <table style="width:100%">
        <tr>
            <td>Papyri ({{currentPapyriCount}})</td>
            <td>{{this.getPapyri}}</td>
        </tr>
        <tr>
            <td>Uncials ({{currentUncialCount}})</td>
            <td>{{this.getUncials}}</td>
        </tr>
          <tr>
            <td>Minuscules ({{currentMinusculeCount}})</td>
            <td>{{this.getMinuscules}}</td>
        </tr>
          <tr>
            <td>Lectionaries ({{currentLectionaryCount}})</td>
            <td>{{this.getLectionaries}}</td>
        </tr>
          <tr>
            <td>Versions ({{currentVersionsCount}})</td>
            <td>{{this.getVersions}}</td>
        </tr>
          <tr>
            <td>Fathers ({{currentFathersCount}})</td>
            <td>{{this.getFathers}}</td>
        </tr>
      </table>
         <span><router-link to="245/texts">See all Texts for this Reference</router-link></span>
        <router-link to="texts/1">See this Text</router-link>
        <router-view></router-view> <!--need to properly render child component-->
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentPapyriCount: 0,
      currentUncialCount: 0,
      currentMinusculeCount: 0,
      currentLectionaryCount: 0,
      currentVersionsCount: 0,
      currentFathersCount: 0,
    };
  },
  computed: {
    referenceData() {
      return this.$store.getters['references/reference'];
    },
    getPapyri() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'Papyri');
      this.currentPapyriCount = referenceTexts.length;
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getUncials() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'Uncial');
      this.currentUncialCount = referenceTexts.length;
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getMinuscules() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'Minuscule');
      this.currentMinusculeCount = referenceTexts.length;
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getLectionaries() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'lectionary');
      this.currentLectionaryCount = referenceTexts.length;
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getVersions() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'version');
      this.currentVersionsCount = referenceTexts.length;
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getFathers() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'fathers');
      this.currentFathersCount = referenceTexts.length;
      return this.renderFilteredTextandDate(referenceTexts);
    },
  },
  methods: {
    renderFilteredTextandDate(filteredData) {
      return filteredData.length > 0 ? filteredData.map((ft) => `${ft.text.number} (${ft.text.date})`).join(', ') : 'N/A';
    },
  },
};
</script>
