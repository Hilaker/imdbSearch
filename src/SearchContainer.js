/**
 * Created by hilakerer1 on 30/10/2017.
 */
import React from 'react'
import SearchResults from './SearchResults.js';
import {getIMDBMovies} from './apis.js'
import './styles/SearchContainer.css';

class SearchContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            searchTitle: '',
            searchYear: '',
            resultsList:[]
        }
    }
    onTitleChange(event){
        this.setState({searchTitle: event.target.value});
    }
    onYearChange(event){
        this.setState({searchYear: event.target.value});
    }
    onSearchClick(){
        getIMDBMovies(this.state.searchTitle, this.state.searchYear).then((json) => {
            this.setState({resultsList: json})
        });
    }
    render(){
        return (
            <div>
                <div className='search-header'>
                    <span className='logo'>IMDB</span>
                    <input type='text' name='title' placeholder='Movie title' onChange={this.onTitleChange.bind(this)}/>
                    <input type='text' name='year' placeholder='Year' onChange={this.onYearChange.bind(this)}/>
                    <div className='search-button' onClick={this.onSearchClick.bind(this)}><i className="fa fa-search"></i></div>
                </div>

                <SearchResults resultsList={this.state.resultsList}/>
            </div>
        )
    }
}

export default SearchContainer;