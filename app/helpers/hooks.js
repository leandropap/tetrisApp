import { useState, useCallback, useEffect } from "react";
import { randomTetrominos, createStage, STAGE_WIDTH } from "./helpers";

function usePlayer() {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetrominos().shape,
        collition: false
    })

    function updatePlayerPos({ x, y, collition }) {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collition
        }))
    }

    function resetPlayer(player, resetPlayer) {
        useCallback(() => {
            setPlayer({
                pos: { x: ((STAGE_WIDTH / 2) - 2), y: 0 },
                tetromino: randomTetrominos().shape,
                collition: false
            })
        }, [])
    }

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
                            [value, `${player.collition ? 'merged' : 'clear'}`]
                    }
                })
            });

            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player.collition, player.pos.x, player.pos.y, player.tetromino])

    return [stage, setStage]
}

export {
    usePlayer,
    useStage,
}