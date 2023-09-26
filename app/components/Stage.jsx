import Cell from "./Cell";

export default function ({ stage }) {
    return (
        <div className="grid grid-cols-12 gap-1 border border-white px-2 pb-1 ">
            {stage.map(row =>
                row.map((cell, x) => {
                    return <Cell key={x} type={cell[0]} />
                }))}
        </div>
    )
}