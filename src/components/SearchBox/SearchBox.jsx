import { use, useState } from "react";
import InputRow from "../Input/InputRow";
import SearchButton from "./SearchButton";
import SearchedInfoDiv from "./SearchedInfoDiv";
import "./SearchBox.css"

export default function SearchBox({columns, onSearch, itemCount}) {
const searchCriterias = columns.filter(c => c.isSearchCriteria);
const [values, setValues] = useState(() => {
  const initialValues = {};
  const criteriaList = columns.filter(c => c.isSearchCriteria);
  criteriaList.forEach(criteria => {
    initialValues[criteria.field] = ""; 
  });
  return initialValues;
});
const[hasSearch,setHasSearched] = useState(false);
 const hasAnySearchCriteria = Object.values(values).some(Boolean);
 function filteredSearch(){
  if(hasAnySearchCriteria){
    onSearch({newFilters : values});
    setHasSearched(true);
    return;
  }
  setHasSearched(false);
 }
 const [openSearchPanel,setOpenSearchPanel] = useState(false);
 function changeSearchPanelState(){
  if(openSearchPanel){
    setOpenSearchPanel(false);
    return
  }
  setOpenSearchPanel(true);
 }
  return (
    <div className="searchBox">
      <div className="searchHeader">
        <button className = "hidSearchButton" onClick={changeSearchPanelState}>🔍 Поиск по критериям:</button>
      </div>
<div className="searchContent">
  {openSearchPanel && (
    <>
      {searchCriterias.map(criteria => (
        <InputRow 
          key={criteria.field}
          placeholder={criteria.label}
          value={values[criteria.field]} 
          onChange={(e) =>
            setValues(prev => ({ ...prev, [criteria.field]: e.target.value }))
          }
        />
      ))}

      <SearchButton 
        onClick={filteredSearch} 
        buttonText={"Поиск"} 
        style={{ paddingLeft : "813px"}}
      />

      {hasSearch && <SearchedInfoDiv totalSearchCount={itemCount} />}
    </>
  )}
</div>
    </div>
    
  );
}