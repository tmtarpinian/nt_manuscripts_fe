<template>
    <li>
        <h2>{{ number }} </h2>
        <h3>{{ date }} </h3>
        <h3>{{ textType }} </h3>
        <h3> {{ group }} </h3>
    </li>
</template>

<script>

export default {
  props: ['number', 'date', 'textType', 'group'],
};
</script>
