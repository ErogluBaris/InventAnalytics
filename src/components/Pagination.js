import React from 'react';

const Pagination = ({ moviePerPage, totalMovies, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalMovies/moviePerPage); i++ ){
        pageNumbers.push(i);
    }

    return (
        <div id="pagination">
        <nav>
            <ul className="pagination pagination justify-content-end">
            {
                pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
                ))
            }
            </ul>
        </nav>
        </div>
    )

}






export default Pagination;