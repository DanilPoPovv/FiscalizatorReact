import InfoList from "./InfoList"
import SearchBox from "../SearchBox/SearchBox"
import "../../styles/InfoSearchList.css"
export default function InfoListAndSearch({columns, data, onSearch, onAction, createButtonText}){
    return (
        <div className="SearchWithListBox">
            {console.log(columns)}
            <SearchBox columns={columns} onSearch={onSearch} itemCount={data.TotalCount}/>
                    <hr style={{ backgroundColor: "gray", height: "2px", border: "none", margin : "20px",width : "100%", marginLeft : "0px" }} />
            <InfoList columns={columns} data={data} onAction={onAction} createButtonText={createButtonText} changePageAction={onSearch}/>
        </div>
    )
}