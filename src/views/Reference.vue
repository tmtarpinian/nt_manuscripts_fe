<template>
    <div>
        <h1>{{referenceData.book}} {{referenceData.chapter}}:{{referenceData.verse}}</h1>
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
             <tr> <td>Verssion</td>
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
    };
  },
  computed: {
    referenceData() {
      return this.$store.getters['references/references'];
    },
  },
  methods: {
    getAlexandrianPapyri() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'papyri' && text.text_type === 'Alexandrian');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getByzantinePapyri() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'papyri' && text.text_type === 'Byzantine');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getWesternPapyri() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'papyri' && text.text_type === 'Western');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getOtherPapyri() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'papyri' && text.text_type === 'Other');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getAlexandrianUncials() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'uncials' && text.text_type === 'Alexandrian');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getByzantineUncials() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'uncials' && text.text_type === 'Byzantine');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getWesternUncials() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'uncials' && text.text_type === 'Western');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getOtherUncials() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'uncials' && text.text_type === 'Other');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getAlexandrianMinuscules() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'minuscules' && text.text_type === 'Alexandrian');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getByzantineMinuscules() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'minuscules' && text.text_type === 'Byzantine');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getWesternMinuscules() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'minuscules' && text.text_type === 'Western');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getOtherMinuscules() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'minuscules' && text.text_type === 'Other');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getAlexandrianLectionaries() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'lectionaries' && text.text_type === 'Alexandrian');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getByzantineLectionaries() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'lectionaries' && text.text_type === 'Byzantine');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getWesternLectionaries() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'lectionaries' && text.text_type === 'Western');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getOtherLectionaries() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'lectionaries' && text.text_type === 'Other');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getAlexandrianVersions() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'versions' && text.text_type === 'Alexandrian');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getByzantineVersions() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'versions' && text.text_type === 'Byzantine');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getWesternVersions() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'versions' && text.text_type === 'Western');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getOtherVersions() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'versions' && text.text_type === 'Other');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getAlexandrianFathers() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'fathers' && text.text_type === 'Alexandrian');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getByzantineFathers() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'fathers' && text.text_type === 'Byzantine');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getWesternFathers() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'fathers' && text.text_type === 'Western');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
    getOtherFathers() {
      const filteredText = this.referenceData.texts.filter((text) => text.group === 'fathers' && text.text_type === 'Other');
      return filteredText.length > 0 ? filteredText.map((text) => `${text.number} (${text.date})`).join(', ') : 'N/A';
    },
  },
};
</script>
