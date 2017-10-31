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
    onSearchClick(){
        var searchTitle = this.state.searchTitle.trim();
        if(!searchTitle){
            //empty title
            this.setState({userMsg: 'Enter a word or phrase to search on.'});
        }else {
            this.setState({isLoading: true});
            getIMDBMovies(searchTitle, this.state.searchYear).then((json) => {
                this.setState({
                    resultsList: json || [],
                    isLoading: false
                })
            });
        }
    }
    render(){
        return (
            <div>
                <div className='header'>
                    <span className='logo'>IMDb</span>
                    <div className='search-header'>
                        <input type='text' className='search-input title' name='title' placeholder='Movie title' onChange={this.onTitleChange.bind(this)}/>
                        <input type='number' className='search-input year' name='year' placeholder='Year' onChange={this.onYearChange.bind(this)}/>
                        <div className='search-button' onClick={this.onSearchClick.bind(this)}><i className="fa fa-search"></i></div>
                    </div>
                </div>

                <SearchResults resultsList={this.state.resultsList} userMsg={this.state.userMsg}/>
                <LoadingAnimation showLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default SearchContainer;