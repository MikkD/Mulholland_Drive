import React from 'react'
import { pageProducts } from './utils';
import { Link } from 'react-router-dom';


const DropDownOnHover = React.memo(() => {
    console.log('~~~~~~~~~~~~~~~DropDownOnHover~~~~~~~~~~~');
    return (
        <React.Fragment>
            <ul className="dropdown-header">
                {pageProducts.map(el => <li key={el.id} className="dropdown-item ">
                    <Link to={{ pathname: `/ProductTemplate/${el.title}` }}>
                        {el.title}
                    </Link>
                </li>)}
            </ul>
        </React.Fragment>
    )
})

export default DropDownOnHover