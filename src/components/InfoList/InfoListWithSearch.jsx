import InfoList from "./InfoList"
import SearchBox from "./SearchBox/SearchBox"
import "../../styles/InfoSearchList.css"
export default function InfoListAndSearch(){
    return (
        <div className="SearchWithListBox">
            <SearchBox/>
                    <hr style={{ backgroundColor: "gray", height: "2px", border: "none", margin : "20px",width : "100%", marginLeft : "0px" }} />
            <InfoList/>
        </div>
    )
}