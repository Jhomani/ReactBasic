import React from 'react'
import { Link } from 'react-router-dom'
import BadgeItem from './BadgeItem'

function useSearchBadges(badges){
    const[query, setQuery] = React.useState('') 
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(()=>{
        const result = badges.filter(badge=>`${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase()))
        setFilteredBadges(result)
    }, [badges, query]);

    return { query, setQuery, filteredBadges }
}

function BadgesList (props){
    const badges = props.badges
    const{query, setQuery, filteredBadges} = useSearchBadges(badges) 

    if(filteredBadges.length === 0){
        return (
                    <div className="container">
                        <div className="form-group">
                            <label>Filter Badges</label>
                            <input type="text" className='form-control'
                                value={query}
                                onChange={e => {
                                    setQuery(e.target.value)
                                }}
                            />
                        </div>

                        <h3>No badges were found</h3>
                        <Link to="badges/new" className="btn btn-primary">Creade new badge</Link>
                    </div>
                )
    }
    return(
        <div className="container">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className='form-control'
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                    }}
                />
            </div>

            <div className="Badges__container">
                <ul>
                    {filteredBadges.map(item => {    
                        return(
                            <li className="item" key={item.id} >
                                <Link className="text-reset text-decoration-none Badges__item" to={`badges/${item.id}`}>
                                    <BadgeItem badge = {item}/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BadgesList; 