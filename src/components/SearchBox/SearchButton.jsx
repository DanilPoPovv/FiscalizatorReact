export default function SearchButton({onClick, buttonText, style}){
    return (
        <div style={{...style}}>
            <button className="searchButton" onClick={onClick}>{buttonText}</button>
        </div>
    )
}