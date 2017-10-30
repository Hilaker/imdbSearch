/**
 * Created by hilakerer1 on 30/10/2017.
 */

export function getIMDBMovies(title, year){
    var url = 'http://www.theimdbapi.org/api/find/movie?title='+title;
    if(year){
        url = url + '&year=' + year;
    }
    return fetch(url)
        .then(checkAjaxStatus)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            return json;
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

function checkAjaxStatus(response){
    if(response.ok){
        return response;
    }else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

//function getParsedMoviesList(data){
//    var ttt = ['dsd'];
//    data[i].title
//    data[i].year
//    data[i].poster.thumb
//    return ttt;
//}

