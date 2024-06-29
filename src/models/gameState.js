import {ref} from 'vue'

export const gameState = {
    active: ref(false),
    teams: ref([[], []]),
    currentTeam: ref(0),
    currentPlayer: ref([0, 0]),
    gameOver: ref(false),
    frameCount: ref(0),
    ready: () => { 
        return gameState.teams.value[0].length > 0 &&
               gameState.teams.value[0].length == gameState.teams.value[1].length &&
               gameState.active.value == false
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
        if (gameState.currentTeam.value === 0 && gameState.currentPlayer.value[0] === 0) {
            gameState.frameCount.value++
        }
        if (gameState.frameCount.value > 10) {
            gameState.active.value = false
            gameState.gameOver.value = true
        }
    },
    saveScore: (score) => {
        const teamIndex = gameState.currentTeam.value
        const playerIndex = gameState.currentPlayer.value[teamIndex]
        gameState.teams.value[teamIndex][playerIndex].scores.push(score)
    },
    score: (teamIndex) => {
        const scores = gameState.teams.value[teamIndex].map(player => player.scores)
        const teamScore = scores.flat().reduce((a, b) => parseInt(a) + parseInt(b), 0)
        return teamScore
    },
    frameTotal: (teamIndex, frameNumber) => {
        frameNumber -= 1
        const frames = gameState.teams.value[teamIndex].map(player => player.scores)
        const frameTotal = frames.map(frame => frame[frameNumber]).reduce((a, b) => (parseInt(a) || 0) + (parseInt(b) || 0), 0)
        return frameTotal || 0
    },
    reset: () => {
        gameState.active.value = false
        gameState.teams.value = [[], []]
        gameState.currentTeam.value = 0
        gameState.currentPlayer.value = [0,0]
        gameState.gameOver.value = false
        gameState.frameCount.value = 0
    }
}