<template>
    <li>
        {{book}} {{chapter}}:{{verse}}
    </li>
</template>

<script>

export default {
  props: ['book', 'chapter', 'verse'],
};
</script>
