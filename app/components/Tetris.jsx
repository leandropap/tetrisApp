"use client"
import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"
import { useState } from "react"
import { usePlayer, useStage } from "../helpers/hooks"
import { createStage } from "../helpers/helpers"


export default function Tetris() {
    const [dropTime, setDroptime] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player)

    function movePlayer(dir) {
        updatePlayerPos({ x: dir, y: 0 })
    }

    function startGame() {
        setStage(createStage())
        resetPlayer()
    }

    function drop() {
        updatePlayerPos({ x: 0, y: 1, collition: false })
    }

    function dropPlayer() {
        drop()
    }

    function move({ key }) {
        if (!gameOver) {
            switch (key) {
                case 37:
                    movePlayer(-1)
                    break
                case 39:
                    movePlayer(1)
                    break
                case 40:
                    dropPlayer()
                    break
            }
        }
    }

    return (
        <div role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <div className="flex flex-col items-start">
                <div className="bg-black overflow-hidden flex flex-auto my-10 ml-10">
                    <Stage stage={stage} gameOver={gameOver} />
                    <div>
                        <aside className="ml-10 mt-5 ">
                            <Display text='SCORE' />
                            <Display text='ROWS' />
                            <Display text="LEVEL" />
                            <Start onClick={startGame} />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}