<template>
    <div v-if="gameState.active.value">
        <h1>{{ currentPlayer() }} is up!</h1>
        <h2>{{ nextPlayer() }} is next</h2>
        <h1>{{ currentPlayer() }} scored <input type="text" v-model="currentScore"> <button @click="saveScore">Next Player</button></h1>
    </div>
    <Team name="Team 1" :num=0></Team>
    <Team name="Team 2" :num=1></Team>  
</template>

<script setup>
    import Team from './Team.vue'
    import { inject } from 'vue'
    import { ref } from 'vue'
    const gameState = inject('gameState')
    const currentScore = ref("")

    const currentPlayer = () => {
        return gameState.upNow();
    }

    const nextPlayer = () => {
        return gameState.upNext();
    }

    const saveScore = () => {
        gameState.saveScore(currentScore.value)
        gameState.nextTurn()
        currentScore.value = ""
    }
</script>

<style scoped>

</style>