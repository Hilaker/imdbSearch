/**
 * Created by hilakerer1 on 30/10/2017.
 */
import React from 'react'

class SearchResults extends React.Component {
    render(){
        const searchQuery = this.props.searchQuery;
        let resultsList = this.props.resultsList;
        if(resultsList){
            if(resultsList.length > 0){
                return (
                    <div className='results'>
                        Displaying {resultsList.length} results for "{searchQuery}"
                        {resultsList.map((movie , index) => {
                            return(
                                <div className='movie' key={index}>
                                    <div className='movie-thumb'><img  src={movie.poster.thumb} alt=''/></div>
                                    <a className='title' href={movie.url.url} target='_blank'>{movie.title} ({movie.year})</a>
                                </div>)
                        })}
                    </div>
                );
            }
            return <div className='user-message-title'>No movies were found...</div>
        }
        return this.props.userMsg ?  <div className='user-message-title'>{this.props.userMsg}</div> : '';
    }
}

export default SearchResults;
