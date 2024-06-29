<template>
    <div class="row">
        <table>
            <tr>
                <td>{{ props.name }}</td>
                <td v-for="score in props.scores">{{ score }}</td>
                <td><em>total</em></td>
            </tr>
        </table>
    </div>
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
</style>