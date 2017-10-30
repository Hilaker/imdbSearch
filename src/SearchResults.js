/**
 * Created by hilakerer1 on 30/10/2017.
 */
import React from 'react'

class SearchResults extends React.Component {
    render(){
        let resultsList = this.props.resultsList;
        if(resultsList){
            return (
                <div>
                    search results
                    {resultsList.map((movie , index) => {
                        return(
                            <div key={index}>
                                <img className='movie-thumb' src={movie.poster.thumb} />
                                {movie.title} <b>{movie.year}</b>
                            </div>)
                    })}
                </div>
            );
        }
        return <div>No movies were found...</div>

    }
}

export default SearchResults;
