import "../../styles/AdminPage.css"
export default function ClientInfoDivItem( {itemText, itemWidth }) {
    return (
      <div className="cell" style={{ width: itemWidth }}>
        {itemText}
      </div>
    )
}