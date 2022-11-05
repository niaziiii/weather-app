import React from 'react'

const SearchForm = ({setQuery}) => {
    const [state, setState] = React.useState({ query: '' });

    const submitedQuery = (e) => {
        e.preventDefault();
        if (state.query === '') return;
        setQuery(state.query)
        setState({ query: '' })
    }
    return (
        <div className="home__search">
            <form onSubmit={submitedQuery}>
                <input type="text" placeholder='Enter city name' name='query' onChange={(e) => setState({ [e.target.name]: e.target.value })} value={state.query} />
                <input type="submit" value='Search' />
            </form>
        </div>
    )
}

export default SearchForm
