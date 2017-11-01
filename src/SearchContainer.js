/**
 * Created by hilakerer1 on 30/10/2017.
 */
import React from 'react';
import SearchResults from './SearchResults.js';
import LoadingAnimation from './LoadingAnimation.js';
import {getIMDBMovies} from './apis.js';
import './styles/SearchContainer.css';

class SearchContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            searchTitle: '',
            searchYear: '',
            isLoading: false
        }
    }
    onTitleChange(event){
        this.setState({searchTitle: event.target.value});
    }
    onYearChange(event){
        this.setState({searchYear: event.target.value});
    }
    onSearchClick(event){
        var searchTitle = this.state.searchTitle.trim();
        var year = this.state.searchYear;
        if(!searchTitle){
            //empty title
            this.setState({
                userMsg: 'Enter a word or phrase to search on.',
                resultsList: null,
                searchQuery: null
            });
        }else {
            this.setState({isLoading: true});
            getIMDBMovies(searchTitle, this.state.searchYear).then((json) => {
                this.setState({
                    resultsList: json || [],
                    searchQuery: year? searchTitle + ' ' + year: searchTitle,
                    isLoading: false
                })
            });
        }
        event.preventDefault();
    }
    render(){
        return (
            <div>
                <div className='header'>
                    <span className='logo'>IMDb</span>
                    <form className='search-header' onSubmit={this.onSearchClick.bind(this)}>
                        <input type='text' className='search-input title' name='title' placeholder='Movie title' onChange={this.onTitleChange.bind(this)}/>
                        <input type='number' className='search-input year' name='year' placeholder='Year' onChange={this.onYearChange.bind(this)}/>
                        <div className='search-button' onClick={this.onSearchClick.bind(this)}><i className="fa fa-search"></i></div>
                        <button className='invisible-button' type="submit"></button>
                    </form>
                </div>

                <SearchResults resultsList={this.state.resultsList} userMsg={this.state.userMsg} searchQuery={this.state.searchQuery}/>
                <LoadingAnimation showLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default SearchContainer;