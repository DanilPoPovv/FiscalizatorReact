
export default function PageNumber({pageNumber, onClick, style}){
   return (
    <button onClick={onClick} style={style}>{pageNumber}</button>
   ) 
}