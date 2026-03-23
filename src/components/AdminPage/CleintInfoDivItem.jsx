import "../../styles/AdminPage.css"
export default function ClientInfoDivItem( {itemText, style}) {
    return (
      <div className="cell" style= {{
        ...style}}>
        {itemText}
      </div>
    )
}