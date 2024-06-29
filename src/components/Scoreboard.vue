<template>
    <div class="flex-container">
        <div class="hero" v-if="gameState.ready() == false && gameState.active.value == false && !gameState.gameOver.value">
            <h1>Add players to start</h1>
        </div>
        <div class="hero" v-if="gameState.ready() == true && gameState.active.value == false && !gameState.gameOver.value">
            <h1>Ready to start! Or add more players</h1>
        </div>
        <div class="hero" v-if="gameState.gameOver.value == true">
            <h1>Game over!</h1>
        </div>
        <div class="hero" v-if="gameState.active.value == true">
            <h1 class="info">{{ currentPlayer() }} is up </h1>
            <div>({{ nextPlayer() }} is next)</div>
            <div class="row">
                <div class="expand"><b>{{ currentPlayer() }}</b> scored </div>
                <input type="number" pattern="\d*" v-model="currentScore" @keyup.enter="saveScore">
                <button @click="saveScore">Score!</button>
            </div>
        </div>
        
        <Team name="Team 1" :num=0></Team>
        
        <Team name="Team 2" :num=1></Team>  
    </div>
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
    flex-grow: 1;
}
input {
    width: 40px;
    padding: 5px;
    margin-left: 10px;
    flex-grow: 1;
}
.expand {
    display:flex;
    flex-grow: 0;
}
.hero {
    display: flex;
    align-self: start;
    flex-direction:column;
}
.info {
    padding:0;
    margin:0;
}
.row {
    padding-top: 20px;
}
b {
    display: inline;
    margin-right: 0.3em;
}
</style>