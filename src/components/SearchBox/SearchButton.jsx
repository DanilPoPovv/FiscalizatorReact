export default function SearchButton({onClick, buttonText, style}){
    return (
        <div style={{...style, display : "flex"}}>
            <button className="searchButton" onClick={onClick}>{buttonText}</button>
        </div>
    )
}