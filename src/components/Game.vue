<script setup>
    import Menubar from './Menubar.vue'
    import Scoreboard from './Scoreboard.vue'

    let canvas = null
    let ctx = null
    let bubbles = []
    const MAX_BUBBLES = 1000
    let color = 0
    const drawBubbles = () => {
        canvas ||= document.getElementById("game-bg-canvas")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx ||= canvas.getContext("2d")
        let co = parseInt(color)
        color += 0.05
        if (bubbles.length < MAX_BUBBLES) {
            bubbles.push({
                x: Math.random() * canvas.width,
                radius: Math.random() * 20 + 10,
                y: canvas.height + 30,
                color: 'oklch(0.5 0.2 '+ co +')',
                speed: Math.random() * 0.02
            })
        }

        // render bubbles
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        bubbles.forEach((bubble, index) => {
            bubble.y -= bubble.speed
            bubble.speed += Math.random() * 0.02
            ctx.beginPath()
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
            ctx.fillStyle = bubble.color
            ctx.fill()


            if ((bubble.y + 100) < -bubble.radius) {
                bubbles.splice(index, 1)
            }
        })
        
        requestAnimationFrame(drawBubbles)
    }

    requestAnimationFrame(drawBubbles)

</script>

<template>
    <canvas id="game-bg-canvas"></canvas>

   <Menubar></Menubar>
   <div class="game">
       <Scoreboard></Scoreboard>
   </div>
</template>

<style scoped>
    .game {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #game-bg-canvas {
        display:flex;
        position:absolute;
        border: 1px solid red;
        width: calc(100% - 2px);
        top:0;
        left:0;
        z-index: -9999;
    }
</style>