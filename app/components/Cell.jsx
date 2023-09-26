import { TETROMINOS } from "../helpers/helpers"

export default function Cell({ type }) {

    const index = TETROMINOS['L'].color.length - 3
    const borderColor = `${TETROMINOS['L'].color.slice(null, index)}${Number(TETROMINOS['L'].color.slice(index)) - 200}`.replace('bg', 'border')

    return (
        <div type={'L'} className={`${TETROMINOS['L'].color} border-t-4 border-r-4 ${borderColor} h-6 w-6 `} ></div>
    )
}