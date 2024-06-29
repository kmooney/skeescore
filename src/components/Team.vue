<template>
    <h2>{{ props.name }}</h2>
    <table width="100%">
        <tr>
            <td></td>
            <td width="30px">1</td>
            <td width="30px">2</td>
            <td width="30px">3</td>
            <td width="30px">4</td>
            <td width="30px">5</td>
            <td width="30px">6</td>
            <td width="30px">7</td>
            <td width="30px">8</td>
            <td width="30px">9</td>
            <td width="30px">10</td>
            <td><em>total</em></td>
        </tr>
        <Row v-for="(player, index) in gameState.teams.value[props.num]" 
            :key="index" 
            :name="player.name"
            :scores="player.scores"
            :teamName="props.name"
        >
        </Row>
        <tr>
            <td align="left"><em>total</em></td>
            <td v-for="frame in 10"><em>{{ gameState.frameTotal(props.num, frame) }}</em></td>
            <td><em>{{ gameState.score(props.num) }}</em></td>
        </tr>
    </table>
    <div class="row" v-if="!gameState.active.value && !gameState.gameOver.value">
        <input type="text" name="playerName" v-model="newPlayerName" @keyup.enter="addPlayer">
        <button @click="addPlayer">Add Player</button>
    </div>

</template>

<script setup>
    import { inject } from 'vue'
    import { ref } from 'vue'
    import Row from './Row.vue'

    let newPlayerName = ref('');

    const gameState = inject('gameState');
    
    const props = defineProps({
        name: {type: String, required: true}, // Your props here
        num: {type: Number, required: true}
    })

    const addPlayer = () => {
        if (!newPlayerName.value) return
        const teamNumber = props.num
        gameState.teams.value[props.num].push({name: newPlayerName.value, scores: []})
        newPlayerName.value = ''
    }
</script>

<style scoped>
table {
    display:block;
    width:100%;
}
button {
    font-size: 0.8em;
}
</style>