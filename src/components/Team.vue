<template>
    <div>{{ props.name }}</div>
    <div>
        <Row v-for="(player, index) in gameState.teams.value[props.num]" 
            :key="index" 
            :name="player.name"
            :scores="player.scores">
        </Row>
        <div v-if="!gameState.active.value">
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
    }
</script>

<style scoped>
    button {
        font-size: 0.8em;
    }
</style>