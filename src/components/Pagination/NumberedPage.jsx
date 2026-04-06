
export default function NumberedPage({pageNumber, onClick, style}){
   return (
    <button onClick={onClick} style={style}>{pageNumber}</button>
   ) 
}