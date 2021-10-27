<template>
    <div>
        <table style="width:100%">
            <tr>
                <th></th>
                <th>Texts</th>
            </tr>
            <tr>
                <td>Papyri</td>
                <td>{{this.getPapyri}}</td>
            </tr>
            <tr>
                <td>Uncials</td>
                <td>{{this.getUncials}}</td>
            </tr>
             <tr>
                <td>Minuscules</td>
                <td>{{this.getMinuscules}}</td>
            </tr>
             <tr>
                <td>Lectionaries</td>
                <td>{{this.getLectionaries}}</td>
            </tr>
             <tr>
                <td>Versions</td>
                <td>{{this.getVersions}}</td>
            </tr>
             <tr>
                <td>Fathers</td>
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
  computed: {
    referenceData() {
      return this.$store.getters['references/reference'];
    },
    getPapyri() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'Papyri');
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getUncials() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'Uncial');
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getMinuscules() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'Minuscule');
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getLectionaries() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'lectionary');
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getVersions() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'version');
      return this.renderFilteredTextandDate(referenceTexts);
    },
    getFathers() {
      const referenceTexts = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'fathers');
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
