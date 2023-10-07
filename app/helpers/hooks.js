import { useState, useCallback, useEffect } from "react";
import { randomTetrominos, createStage, STAGE_WIDTH, TETROMINOS } from "./helpers";

function usePlayer() {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collision: false
    })

    function updatePlayerPos({ x, y, collision }) {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collision
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetrominos().shape,
            collision: false
        })
    })

    return [player, updatePlayerPos, resetPlayer]
}

function useStage(player, resetPlayer) {
    const [stage, setStage] = useState(createStage())

    useEffect(() => {
        function updateStage(prevStage) {
            const newStage = prevStage.map((row) =>
                row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell)
                ))

            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] =
                            [value, `${player.collision ? 'merged' : 'clear'}`]
                    }
                })

            });
            if (player.collision) {
                resetPlayer()
            }
            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player])

    return [stage, setStage]
}

export {
    usePlayer,
    useStage,
}