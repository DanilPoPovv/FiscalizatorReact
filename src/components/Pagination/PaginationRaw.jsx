import { useSearchParams } from "react-router-dom";
import "../Pagination/PaginationRaw.css";
import PageNumber from "./NumberedPage";
import { useState } from "react";
export default function PaginationRaw({ changePageAction, totalSearchCount }) {
    const pageSize = 10;
    const pageCount = Math.ceil(totalSearchCount / pageSize);
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    const halfPages = Math.ceil(pageCount / 2);
    const leftPages = pages.slice(0, halfPages);
    const rightPages = pages.slice(halfPages)
    const [currentPage, setCurrentPage] = useState(1);

    function ChangeAndSetCurrentPage(page) {
        console.log("CТРАНИЦА " + page)
        changePageAction({ page : page});
        setCurrentPage(page);
    }

    return (
<div className="pagination">
    <button
        disabled={currentPage === 1}
        onClick={() => ChangeAndSetCurrentPage(currentPage - 1)}
    >
        &lt;
    </button>

    <div className="leftPages">
        {leftPages.map((page) => (
            <PageNumber
                key={page}
                pageNumber={page}
                onClick={() => ChangeAndSetCurrentPage(page)}
            />
        ))}
    </div>

    <div className="rightPages">
        {rightPages.map((page) => (
            <PageNumber
                key={page}
                pageNumber={page}
                onClick={() => ChangeAndSetCurrentPage(page)}
            />
        ))}
    </div>

    <button
        disabled={currentPage === pageCount}
        onClick={() => ChangeAndSetCurrentPage(currentPage + 1)}
    >
        &gt;
    </button>
</div>
    );
}