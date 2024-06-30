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
        color: #333;
        display: block;
        position:fixed;
        padding:10px;
        justify-content: center;
        margin:0;
        top:0;
        left:0;
        width:100%;
        height: 40px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        width: calc(100% - 20px);
        top: 10px;
        left: 10px;
        position: absolute;
    }

    #menubar-canvas {
        width: 100%;
        height: 60px;
        position: absolute;
        top:0;
        left:0;
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
