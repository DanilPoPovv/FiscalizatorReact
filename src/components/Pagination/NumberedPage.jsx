
export default function NumberedPage({pageNumber, onClick}){
   return (
    <button onClick={onClick}>{pageNumber}</button>
   ) 
}