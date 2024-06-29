<template>
    <tr>
        <td class="name" align="left">{{ props.name }}</td>
        <td v-for="score in props.scores">{{ score }}</td>
        <td v-for="index in 10 - props.scores.length"> - </td>
        <td><em v-if="props.scores.length > 0">{{  props.scores.reduce( (x,m) => parseInt(x) + parseInt(m) ) }}</em></td>
    </tr>
</template>

<script setup>
    let props = defineProps({
       name: {type: String, required: true},
       scores: {type: Array, required: true}
    });

</script>

<style scoped>
.row {
    /* Your styles here */
}

.name {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>