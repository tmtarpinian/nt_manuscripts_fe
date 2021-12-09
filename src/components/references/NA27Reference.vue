<template>
    <div>
        <table style="width:100%">
            <tr>
                <th></th>
                <th>Alexandrian</th>
                <th>Byzantine</th>
                <th>Western</th>
                <th>Mixed</th>
                <th>Other</th>
            </tr>
            <tr>
                <td>Papyri</td>
                <td>{{getAlexandrianPapyri}}</td>
            </tr>
            <tr>
              <td>Uncials</td>
              <td>{{getAlexandrianUncials}}</td>
              <td>{{getByzantineUncials}}</td>
              <td>{{getWesternUncials}}</td>
              <td>{{getMixedUncials}}</td>
              <td>{{getOtherUncials}}</td>
            </tr>
            <tr>
              <td>Minuscules</td>
              <td>{{getAlexandrianMinuscules}}</td>
              <td>{{getByzantineMinuscules}}</td>
              <td>{{getWesternMinuscules}}</td>
              <td>{{getMixedMinuscules}}</td>
              <td>{{getOtherMinuscules}}</td>
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
      texts: this.referenceData,
      NaEdition: 27,
    };
  },
  computed: {
    referenceData() {
      return this.$store.getters['references/reference'];
    },
    editionSpecificReferences() {
      const texts = this.referenceData.reference_texts.map((rt) => this.isInEdition(rt));
      return texts.filter((text) => text !== null);
    },
    getAlexandrianPapyri() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Papyri' && rt.nestle_alands.find((na) => na.text_type === 'alexandrian'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianUncials() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Uncial' && rt.nestle_alands.find((na) => na.text_type === 'alexandrian'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineUncials() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Uncial' && rt.nestle_alands.find((na) => na.text_type === 'byzantine'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternUncials() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Uncial' && rt.nestle_alands.find((na) => na.text_type === 'western'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getMixedUncials() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Uncial' && rt.nestle_alands.find((na) => na.text_type === 'mixed'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherUncials() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Uncial' && rt.nestle_alands.find((na) => na.text_type === 'other'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianMinuscules() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Minuscule' && rt.nestle_alands.find((na) => na.text_type === 'alexandrian'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineMinuscules() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Minuscule' && rt.nestle_alands.find((na) => na.text_type === 'byzantine'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternMinuscules() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Minuscule' && rt.nestle_alands.find((na) => na.text_type === 'western'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getMixedMinuscules() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Minuscule' && rt.nestle_alands.find((na) => na.text_type === 'mixed'));
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherMinuscules() {
      const filteredText = this.editionSpecificReferences.filter((rt) => rt.text.group === 'Minuscule' && rt.nestle_alands.find((na) => na.text_type === 'other'));
      return this.renderFilteredTextandDate(filteredText);
    },
  },
  methods: {
    isInEdition(referenceText) {
      const editionFound = referenceText.nestle_alands.find((na) => na.edition === this.NaEdition);
      return editionFound !== undefined ? referenceText : null;
    },
    renderFilteredTextandDate(filteredData) {
      return filteredData.length > 0 ? filteredData.map((ft) => `${ft.text.number} (${ft.text.date})`).join(', ') : 'N/A';
    },
    titelize(name) {
      return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
  },
};
</script>
