import ClientInfoList from "./ClientInfoList"
import SearchBox from "../SearchBox/SearchBox"
import "../../styles/SearchWithListBox.css"
export default function InfoListAndSearch(){
    return (
        <div className="SearchWithListBox" style={{border : "2px solid pink"}}>
            <SearchBox/>
                    <hr style={{ backgroundColor: "gray", height: "2px", border: "none" }} />
            <ClientInfoList/>
        </div>
    )
}