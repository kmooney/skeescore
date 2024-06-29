<script setup>
    import Menubar from './Menubar.vue'
    import Scoreboard from './Scoreboard.vue'
</script>

<template>
   <Menubar></Menubar>
   <Scoreboard></Scoreboard>
   <div class="game">
    <br><br>TODO: add a frame count. stop the game after all teams complete 10 frames.
    <br><br>TODO: show all 10 frames even if 10 scores are have not come out
   </div>
</template>

<style scoped>
/* Your component's CSS styles go here */
</style>