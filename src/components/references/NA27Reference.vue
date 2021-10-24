<template>
    <div>
        <table style="width:100%">
            <tr>
                <th></th>
                <th>Alexandrian</th>
                <th>Byzantine</th>
                <th>Western</th>
                <th>Other</th>
            </tr>
            <tr>
                <td>Papyri</td>
                <td>{{this.getAlexandrianPapyri()}}</td>
                <td>{{this.getByzantinePapyri()}}</td>
                <td>{{this.getWesternPapyri()}}</td>
                <td>{{this.getOtherPapyri()}}</td>
            </tr>
            <tr>
                <td>Uncials</td>
                <td>{{this.getAlexandrianUncials()}}</td>
                <td>{{this.getByzantineUncials()}}</td>
                <td>{{this.getWesternUncials()}}</td>
                <td>{{this.getOtherUncials()}}</td>
            </tr>
             <tr>
                <td>Minuscules</td>
                <td>{{this.getAlexandrianMinuscules()}}</td>
                <td>{{this.getByzantineMinuscules()}}</td>
                <td>{{this.getWesternMinuscules()}}</td>
                <td>{{this.getOtherMinuscules()}}</td>
            </tr>
             <tr>
                <td>Lectionaries</td>
                <td>{{this.getAlexandrianLectionaries()}}</td>
                <td>{{this.getByzantineLectionaries()}}</td>
                <td>{{this.getWesternLectionaries()}}</td>
                <td>{{this.getOtherLectionaries()}}</td>
            </tr>
             <tr>
                <td>Versions</td>
                <td>{{this.getAlexandrianVersions()}}</td>
                <td>{{this.getByzantineVersions()}}</td>
                <td>{{this.getWesternVersions()}}</td>
                <td>{{this.getOtherVersions()}}</td>
            </tr>
             <tr>
                <td>Fathers</td>
                <td>{{this.getAlexandrianFathers()}}</td>
                <td>{{this.getByzantineFathers()}}</td>
                <td>{{this.getWesternFathers()}}</td>
                <td>{{this.getOtherFathers()}}</td>
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
      NaEdition: 28,
    };
  },
  computed: {
    referenceData() {
      return this.$store.getters['references/reference'];
    },
  },
  methods: {
    getAlexandrianPapyri() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'papyri' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Alexandrian');
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantinePapyri() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'papyri' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Byzantine');
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternPapyri() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'papyri' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Western');
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherPapyri() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'papyri' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Other');
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianUncials() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'uncial' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Alexandrian');
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineUncials() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'uncial' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Byzantine');
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternUncials() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'uncial' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Western');
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherUncials() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'uncial' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Other');
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianMinuscules() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'minuscules' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Alexandrian');
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineMinuscules() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'minuscules' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Byzantine');
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternMinuscules() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'minuscules' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Western');
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherMinuscules() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'minuscules' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Other');
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianLectionaries() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'lectionaries' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Alexandrian');
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineLectionaries() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'lectionaries' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Byzantine');
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternLectionaries() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'lectionaries' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Western');
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherLectionaries() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'lectionaries' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Other');
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianVersions() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'versions' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Alexandrian');
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineVersions() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'versions' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Byzantine');
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternVersions() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'versions' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Western');
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherVersions() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'versions' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Other');
      return this.renderFilteredTextandDate(filteredText);
    },
    getAlexandrianFathers() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'fathers' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Alexandrian');
      return this.renderFilteredTextandDate(filteredText);
    },
    getByzantineFathers() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'fathers' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Byzantine');
      return this.renderFilteredTextandDate(filteredText);
    },
    getWesternFathers() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'fathers' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Western');
      return this.renderFilteredTextandDate(filteredText);
    },
    getOtherFathers() {
      const filteredText = this.referenceData.reference_texts.filter((rt) => rt.text.group === 'fathers' && rt.nestle_alands.filter((na) => na.edition === this.NaEdition)[0].text_type === 'Other');
      return this.renderFilteredTextandDate(filteredText);
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
