import { useSearchParams } from "react-router-dom";
import "../Pagination/PaginationRaw.css";
import NumberedPage from "./NumberedPage";
import { useState } from "react";
export default function PaginationRaw({changePageAction, totalSearchCount}) {
    const pageSize = 10;
    console.log(totalSearchCount);
    const [pageCount, setPageCount] = useState(Math.ceil(totalSearchCount / pageSize));
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    
    console.log(pageCount);
    return (
        <div className="pagination">
            <button>&lt;</button>
           {pages.map((page) => (
                <NumberedPage key={page} pageNumber={page} onClick={() => changePageAction(page)} 
                style={{ marginLeft: page > averagePageCount ? "auto" : 0 }}/>
            ))}
            <button style={{ marginLeft: "auto" }}>&gt;</button>
        </div>
    );
}