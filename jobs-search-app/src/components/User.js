import React from 'react';

import '../styles/User.css';

export default function User({user}) {
    return (
        <div className="User">
            <div>
                <div className="avatar__wrapper">
                    <img src={user.avatar_url}/>
                </div>

                <h1 className="user__header">{user.first_name} {user.last_name}</h1>
                <p className="user__email">{user.email}</p>
                <div>
                    <span className="filters__header">What I have: </span>
                    {user.filters && user.filters.map((filter, id) => <span key={id} className="filter">{filter}</span>)}
                </div>
            </div>
        </div>
    )
}
