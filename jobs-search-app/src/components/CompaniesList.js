import React from 'react';
import Company from './Company';

export default function CompaniesList({companies}) {
    return (
        <div>
            {companies.length && companies.map((company) => <Company key={company.id} company={company}/>)}
        </div>
    )
}
