import { Link } from "gatsby";
import React from "react";

export default function Pagination({ totalCount, currentPage = 1, pathPrefix }) {
    const totalPages = Math.ceil(totalCount / 10);
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col text-end">

                    <Link className={prevPage <= 0 ? `btn disabled` : `btn btn-outline-primary`} to={prevPage <= 0 ? '' : prevPage === 1 ? `${pathPrefix}` : `${pathPrefix}page-${prevPage}`}>
                        ← Prev 
                        {/* 10 please */}
                    </Link>
                </div>
                <div className="col text-center">
                    <p className="mb-0">
                        Page {currentPage} of {totalPages}
                    </p>
                </div>
                <div className="col text-start">
                    <Link className={nextPage > totalPages ? `btn disabled` : `btn btn-outline-primary`} tabIndex="-1" role="button" aria-disabled={nextPage > totalPages ? true : false} to={nextPage > totalPages ? '' : `${pathPrefix}page-${nextPage}`}>
                        Next →
                    </Link>
                </div>
            </div>
        </div>
    );
}