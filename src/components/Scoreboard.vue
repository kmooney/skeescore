<template>
    <div v-if="gameState.active.value == false">
        <h1>Skee-ball score</h1>
    </div>
    <div v-if="gameState.gameOver.value == true">
        <h1>Game over!</h1>
    </div>
    <div v-if="gameState.active.value == true">
        <div>Frame {{ gameState.frameCount.value }} {{ currentPlayer() }} is up ({{ nextPlayer() }} is next)</div>
        <br>
        <div class="row">{{ currentPlayer() }} scored 
            <input type="text" v-model="currentScore" @keyup.enter="saveScore">
            <button @click="saveScore">Score!</button>
        </div>
    </div>
    <br>
    <Team name="Team 1" :num=0></Team>
    <br>
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
button {
    display: inline;
    padding: 8px;
}
input {
    width: 40px;
    padding: 5px;
    margin-left: 10px;
}
</style>