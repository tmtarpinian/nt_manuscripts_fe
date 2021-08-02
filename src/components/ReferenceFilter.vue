<template>
<div>
    <base-card>
    <section>
        <h2> Select a Reference </h2>
    </section>
    <form @submit.prevent="submitForm">
        <div>
            <label for="book">Book</label>
            <select v-model="book">
            <option disabled value="">Please Select a Book </option>
            <option v-for="reference in books"
            :key="reference"
            :value="reference"
            >{{capitalizeAndSplit(reference)}}</option>
            </select>
        </div>
        <transition name="slide">
            <div v-if="book">
                <label for="chapter">Chapter</label>
                <select v-model="chapter">
                <option disabled value="">Please Select a Chapter </option>
                <option v-for="chapter in chapters"
                    :disabled="!book"
                    :key="chapter"
                    :value="chapter"
                >{{chapter}}
                </option>
                </select>
            </div>
        </transition>
        <div v-if="chapter">
            <label for="verse">Verse</label>
           <select v-model="verse">
            <option disabled value="">Please Select a Verse </option>
            <option v-for="verse in verses"
            :disabled="!book || !chapter"
            :key="verse"
            :value="verse"
            >{{verse}}
            </option>
            </select>
        </div>
        <button :disabled="!book || !chapter || !verse"> Submit </button>
    </form>
    </base-card>
    </div>
</template>

<script>
import CONSTANTS from '../modules/references';

export default {
  emits: ['reference-request'],
  data() {
    return {
      book: '',
      chapter: '',
      verse: '',
      books: Object.keys(CONSTANTS.REFERENCES),
      chapters: '',
      verses: '',
    };
  },
  watch: {
    book(newBook) {
      this.chapters = Object.keys(CONSTANTS.REFERENCES[newBook]);
      this.chapter = '';
      this.verse = '';
    },
    chapter(newChapter) {
      this.verses = CONSTANTS.REFERENCES[this.book][newChapter];
      this.verse = '';
    },
  },
  methods: {
    capitalizeAndSplit(book) {
      return book.split('-').map((word) => word.charAt(0).toUpperCase() + word.split('').splice(1).join('')).join(' ');
    },
    submitForm() {
      const formData = {
        book: this.book,
        chapter: this.chapter,
        verse: this.verse,
      };
      this.$emit('reference-request', formData);
    },
  },
};
</script>

<style scoped>
    .form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
