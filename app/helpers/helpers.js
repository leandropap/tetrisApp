const STAGE_WIDTH = 12
const STAGE_HEIGHT = 20

function createStage() {
    return Array.from(Array(STAGE_HEIGHT),
        () => new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
}

const TETROMINOS = {
    0: { shape: [[0]], color: 'slate-100' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: 'bg-emerald-400'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: 'bg-sky-300'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: 'bg-lime-600'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']

        ],
        color: 'bg-purple-600',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: 'bg-yellow-700'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]
        ],
        color: 'bg-orange-400'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: 'bg-red-600'
    },
}

function randomTetrominos() {
    const tetrominos = 'IJLOSTZ'
    const randomTetro = tetrominos[Math.floor(tetrominos.length * Math.random())]
    return TETROMINOS[randomTetro]
}

export {
    STAGE_HEIGHT,
    STAGE_WIDTH,
    createStage,
    TETROMINOS,
    randomTetrominos
}