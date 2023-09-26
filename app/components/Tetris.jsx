import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"
import { createStage } from "../helpers/helpers";

export default function Tetris() {
    return (
        <div className="bg-black overflow-hidden flex flex-auto">
            <Stage stage={createStage()} />
            <div>
                <aside>
                    <Display text='SCORE' />
                    <Display text='ROWS' />
                    <Display text="LEVEL" />
                </aside>
            </div>
            <Start />
        </div>
    )
}