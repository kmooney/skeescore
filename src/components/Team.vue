<template>
    <div class="team">
        <table width="90%">
            <tr class="frame-count lite">
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
                <td class="lite" align="left"><em>total</em></td>
                <td v-for="frame in 10" :key="frame"><em>{{ gameState.frameTotal(props.num, frame) }}</em></td>
                <td><em>{{ gameState.score(props.num) }}</em></td>
            </tr>
        </table>
        <div class="row" v-if="!gameState.active.value && !gameState.gameOver.value">
            <input type="text" name="playerName" v-model="newPlayerName" @keyup.enter="addPlayer">
            <button @click="addPlayer">Add Player</button>
        </div>
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
        window.scrollTo(0,0);
    }
</script>

<style scoped>
table {
    display:block;
    width:100%;
}
div.row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
input {
    display:flex;
    flex-grow: 1;
}
button {
    display: flex;
    font-size: 0.8em;
}
h2 {
    padding:0;
    margin:0;
}
div.team {
    margin-top:20px;
    padding:12px;

    border-radius: 5px;
    background: rgba(0,0,0,0.1);
}
.lite {
    opacity: 0.5;
}
table {
    font-size: 0.8em;
}
</style>