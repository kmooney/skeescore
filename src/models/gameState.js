import {ref} from 'vue'

export const gameState = {
    active: ref(false),
    teams: ref([[], []]),
    currentTeam: ref(0),
    currentPlayer: ref([0, 0]),
    ready: () => { 
        return gameState.teams.value[0].length > 0 &&
               gameState.teams.value[1].length > 0
    },
    nextTeam: () => {
        return (gameState.currentTeam.value + 1) % 2
    },
    upNow: () => {
        const teamIndex = gameState.currentTeam.value;
        return gameState.teams.value[teamIndex][gameState.currentPlayer.value[teamIndex]].name
    },
    upNext: () => {
        const teamIndex = gameState.nextTeam();
        const teamLength = gameState.teams.value[teamIndex].length
        const playerIndex = (gameState.currentPlayer.value[teamIndex]) % teamLength;
        return gameState.teams.value[teamIndex][playerIndex].name
    },
    nextTurn: () => {
        const teamIndex = gameState.currentTeam.value
        gameState.currentPlayer.value[teamIndex] = (gameState.currentPlayer.value[teamIndex] + 1) % gameState.teams.value[teamIndex].length
        gameState.currentTeam.value = gameState.nextTeam()
    },
    saveScore: (score) => {
        const teamIndex = gameState.currentTeam.value
        const playerIndex = gameState.currentPlayer.value[teamIndex]
        gameState.teams.value[teamIndex][playerIndex].scores.push(score)
    }
}