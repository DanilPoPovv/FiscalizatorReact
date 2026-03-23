import "../../styles/AdminPage.css"
export default function ClientInfoDivItem( {itemText, itemWidth }) {
    return (
      <div className="baseFlexDiv rightBorderedInfoDiv" style={{ width: itemWidth }}>
        {itemText}
      </div>
    )
}