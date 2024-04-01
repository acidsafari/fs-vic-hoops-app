import React, {useState} from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    return (
        <div className='SearchBarContainer'>
            <form method='get'>
            <input 
                type='search'
                name='query'
                className='SearchBarInput'
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='Search...'
            />
            <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;