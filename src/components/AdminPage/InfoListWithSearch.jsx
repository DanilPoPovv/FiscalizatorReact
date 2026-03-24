import ClientInfoList from "./ClientInfoList"
import SearchBox from "../SearchBox/SearchBox"
import "../../styles/SearchWithListBox.css"
export default function InfoListAndSearch(){
    return (
        <div className="SearchWithListBox">
            <SearchBox/>
            <ClientInfoList/>
        </div>
    )
}