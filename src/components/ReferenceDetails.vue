<template>
    <li>
        {{ book }} {{ chapter }}:{{verse }}: {{verse}}
    </li>
</template>

<script>

export default {
  props: ['book', 'chapter', 'verse'],
};
</script>
