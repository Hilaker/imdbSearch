/**
 * Created by hilakerer1 on 30/10/2017.
 */
import React from 'react'

class SearchResults extends React.Component {
    render(){
        let resultsList = this.props.resultsList;
        if(resultsList){
            if(resultsList.length > 0){
                return (
                    <div>
                        Displaying {resultsList.length} results
                        {resultsList.map((movie , index) => {
                            return(
                                <div key={index}>
                                    <img className='movie-thumb' src={movie.poster.thumb} />
                                    <a href={movie.url.url}>{movie.title}</a> <b>{movie.year}</b>
                                </div>)
                        })}
                    </div>
                );
            }
            return <div>No movies were found...</div>

        }
        return this.props.userMsg ?  <div>{this.props.userMsg}</div> : '';
    }
}

export default SearchResults;
