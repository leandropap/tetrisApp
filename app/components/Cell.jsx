import { TETROMINOS } from "../helpers/helpers"

export default function Cell({ type }) {

    const index = TETROMINOS[type].color.length - 3
    const borderColor = `${TETROMINOS[type].color.slice(null, index)}${Number(TETROMINOS[type].color.slice(index)) - 200}`.replace('bg', 'border')

    return (
        <div type={type} className={`${TETROMINOS[type].color} border-r-4 border-t-4 rounded ${borderColor} h-6 w-6 `} ></div>
    )
}