import React from 'react';

import '../styles/Companies.css';
import '../App.css';

export default function Company({company}) {


    return (
        <div className="Company">
            <h2 className="company__header">{company.company_name}</h2>
            <div className="company__header__req">
                <span>Required to have: </span>
                {company.requirements.length > 0 ?
                    company.requirements.map((req, id) => <span className="header-normal" key={id}>{req}{id !== company.requirements.length - 1 ? ', ' : ''}</span> )
                :
                    <span className="header-normal">No requirements</span>
                }
            </div>

            <div className="company__header__req">
                <span>{company.optional ? "Requirements don't apply if you have one of the following:": "+ one of the following options:" }</span>
                {company.optional_requirements[0].length > 0 ?
                    company.optional_requirements.map((option, id) => <div className="option" key={id}>
                        
                    {
                        option.map((value, id) => <p key={id}>{value} </p>)
                    }
                    </div>)
                :
                <span className="header-normal">No requirements</span>
                }
            </div>
        </div>
    )
}
