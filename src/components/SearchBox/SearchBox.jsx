import { useState } from "react";
import InputRow from "../Input/InputRow";
import SearchButton from "./SearchButton";
import "./SearchBox.css"
export default function SearchBox({criteriaList, onSearch}) {
  const[values, setValues] = useState({});

  function handleSearch(){
    const newValues = {...values, [field]: value};
    setValues(newValues);

    onSearch(newValues);
  }
  return (
    <div className="searchBox">
      <div className="searchHeader">
        <p className="searchTitle">
          🔍 Поиск по критериям:
        </p>
      </div>

      <div className="searchContent">
        {criteriaList.map(criteria => (
          <InputRow key={criteria.field} placeholder={criteria.label}/>
        ))}
      </div>
      <SearchButton onAction={handleSearch} buttonText={"Поиск"} style={{ paddingLeft : "805px", paddingBottom : "10px", paddingTop : "10px"}}/>
    </div>
  );
}