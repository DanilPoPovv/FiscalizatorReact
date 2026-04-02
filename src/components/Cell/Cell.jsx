import "./Cell.css"
export default function Cell( {itemText, style}) {
    return (
      <div className="cell" style= {{
        ...style}}>
        {itemText}
      </div>
    )
}