import React, {useState} from 'react';

import '../styles/User.css';

const regex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/

export default function User({user, deleteFilter, addNewFilter}) {

    const [filter, setFilter] = useState('')

    const onSubmitHandler = (e, filter) => {
        addNewFilter(e, filter);
        setFilter('')
    }

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
                        {user.filters.length > 0 && user.filters.map((filter, id) => <span key={id} className="filter">
                            {filter}
                            <span className="filters__delete" onClick={() => {deleteFilter(id)}}>x</span>
                            {id !== user.filters.length - 1 ? ',' : ''}</span>)}
                </div>
                <form onSubmit={e => onSubmitHandler(e, filter)} className="filters__form">
                    <input type="text" pattern="[a-z0-9\s']*" title="Can't contain <>?!=+_%#" placeholder="Add new item" value={filter} onChange={(e) => setFilter(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}
