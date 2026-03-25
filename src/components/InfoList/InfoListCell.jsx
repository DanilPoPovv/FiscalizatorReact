export default function InfoListCell( {itemText, style}) {
    return (
      <div className="cell" style= {{
        ...style}}>
        {itemText}
      </div>
    )
}