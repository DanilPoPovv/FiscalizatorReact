export default function SearchButton(onSearch){
    return (
        <div style={{display : "flex"}}>
            <button className="searchButton" onClick={onSearch}>Поиск</button>
        </div>
    )
}