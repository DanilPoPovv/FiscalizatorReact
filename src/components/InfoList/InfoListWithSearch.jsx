import InfoList from "./InfoList"
import SearchBox from "../SearchBox/SearchBox"
import "../../styles/InfoSearchList.css"
export default function InfoListAndSearch({headers, criteriaList, data, onSearch, onAction}){
    return (
        <div className="SearchWithListBox">
            <SearchBox criteriaList={criteriaList} onSearch={onSearch}/>
                    <hr style={{ backgroundColor: "gray", height: "2px", border: "none", margin : "20px",width : "100%", marginLeft : "0px" }} />
            <InfoList listHeaders={headers} data={data} onAction={onAction}/>
        </div>
    )
}