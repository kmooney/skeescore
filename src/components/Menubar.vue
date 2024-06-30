<template>
    <canvas id="menubar-canvas" width="800" height="80"></canvas>
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

    let drawCanvas = () => {
        canvas ||= document.getElementById('menubar-canvas')
        ctx ||= canvas.getContext('2d')
        
        if (count == 3000) {
            ctx.clearRect(0,0,canvas.width,canvas.height)
            count = 0
        }
        c += 0.15
        ctx.globalCompositeOperation = 'xor'
        let co = parseInt(c)
        ctx.strokeStyle = 'oklch(0.325 0.2 '+ co +')'
        ctx.fillStyle = 'oklch(0.75 0.2 '+ co +')'
        for (let i = 0; i < 1; i++) {
        let path = new Path2D()
        path.rect(
            Math.random()*canvas.width,
            Math.random()*canvas.height, 
            Math.random()*40, Math.random()*40
        )
        ctx.fill(path)
        ctx.stroke(path)
        }
        count += 1
        requestAnimationFrame(drawCanvas)
    }
    let c = 0;
    let count = 0;
    let canvas = null;
    let ctx = null;
    let r = document.querySelector(':root')
    requestAnimationFrame(drawCanvas)

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
    .menubar-canvas {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        border:2px solid lightblue;

        width: 100%;
        height: 100%;
    }
</style>
