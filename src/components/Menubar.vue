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
        gameState.reset()
        window.scrollTo(0,0)
    }

    let startGame = () => {
        gameState.frameCount.value = 1
        gameState.active.value = true
        window.scrollTo(0,0)
    }
</script>

<style scoped>
    .menubar {
        background-color: #fefefe;
        color: #333;
        display: block;
        position:fixed;
        padding:10px;
        justify-content: center;
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
