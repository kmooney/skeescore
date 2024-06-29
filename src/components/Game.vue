<script setup>
    import Menubar from './Menubar.vue'
    import Scoreboard from './Scoreboard.vue'
</script>

<template>
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
</style>