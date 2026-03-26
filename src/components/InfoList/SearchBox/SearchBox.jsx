import InputRow from "./InputRow";

export default function SearchBox({creteriaList}) {
  return (
    <div className="searchBox">
      <div className="searchHeader">
        <p className="searchTitle">
          🔍 Поиск по критериям:
        </p>
      </div>

      <div className="searchContent">
        {creteriaList.map(creteria => (
          <InputRow key={creteria} placeholder={creteria}/>
        ))}
      </div>
    </div>
  );
}