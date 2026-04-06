import { use, useState } from "react";
import InputRow from "../Input/InputRow";
import SearchButton from "./SearchButton";
import SearchedInfoDiv from "./SearchedInfoDiv";
import "./SearchBox.css"

export default function SearchBox({criteriaList, onSearch, itemCount}) {
const [values, setValues] = useState(() => {
  const initialValues = {};
  criteriaList.forEach(criteria => {
    initialValues[criteria.field] = ""; 
  });
  return initialValues;
});
const[hasSearched,setHasSearched] = useState(false);
 const hasAnyValue = Object.values(values).some(Boolean);
 function filteredSearch(){
  if(hasAnyValue){
    onSearch(values);
    setHasSearched(true);
  }
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
          <InputRow 
  key={criteria.field}
  placeholder={criteria.label}
  value={values[criteria.field]} 
  onChange={(e) => setValues(prev => ({ ...prev, [criteria.field]: e.target.value }))}
 />
        ))}
      </div>
      <SearchButton onClick={filteredSearch} buttonText={"Поиск"} style={{ paddingLeft : "813px"}}/>
         {hasSearched && <SearchedInfoDiv totalSearchCount={itemCount} />}
    </div>
    
  );
}