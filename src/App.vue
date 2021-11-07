<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};

</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;

  .table-title {
    color: #ffffff;
    background-color: #2f2f2f;
    padding: 15px;
    margin: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
}

table tr td {
  text-align: left;
  padding: 15px;
  box-sizing: border-box;
}

table tbody tr {
    transition: background-color 150ms ease-out;
}

.button-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}

.button-container button {
  margin: 0;
  border-radius: 0;
}

button {
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  color: #ffffff;
  padding: 10px;
  border: 0;
  margin: 0;
  outline: 0;
  border-radius: 0;
  transition: background-color 225ms ease-out;
}
button.all {
  background-color: #9055a2;
}

button.na26 {
  background-color: #3b413c;
}

button.na27 {
  background-color: #9055a2;
}

button.na28 {
  background-color: #3b413c;
}

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

select{
    text-align: center;
    padding: 10px ;
    border-radius: 13px;
    background-color: #f1f1f1;
    font: #000000
}

select:hover {
  background-color: #f1f1f1;
  opacity: 0.8;
}

button {
    background-color: #9055a2;
    color: #ffffff;
    border-radius: 25px;
    padding: .50rem;
    margin-top: 1.25rem
}

button:hover {
    background-color: #9055a2;
    opacity: 0.8;
    color: #ffffff;
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
