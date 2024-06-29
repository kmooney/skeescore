<template>
    <div class="menubar">
        <ul>
            <li v-if="!gameState.active.value">
                <button @click="startGame" :disabled="!gameState.ready()">Start game</button>
            </li>
            <li><button @click=newGame>New Game</button></li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { inject } from 'vue'
    const gameState = inject('gameState');

    let newGame = () => {
        gameState.active.value = false
        gameState.teams.value = [[], []]
        gameState.currentTurn.value = 0
        gameState.currentTeam.value = 0
    }

    let startGame = () => {
        gameState.active.value = true
    }
</script>

<style scoped>
    .menubar {
        background-color: #fefefe;
        color: #333;
        display: block;
        position:absolute;
        padding:10px;
        margin:0;
        top:0;
        left:0;
        width:100%;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    button {
        float:left;
    }

    li:last-child button {
        background-color: black;
        color:white;
        float:right;
        margin-right:20px;
    }
</style>
