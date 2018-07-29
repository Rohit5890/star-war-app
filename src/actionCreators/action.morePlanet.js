import morePlanetList from './action.morePlanetList';

const morePlanet = function(searchURL){
    const URL =  searchURL;
    return function(dispatch) {
        fetch(URL)
        .then((response)=>{
            if(response.ok)
            return response;
        })
        .then((response)=>response.json())
        .then((response)=>dispatch(morePlanetList(response.results)))
        .catch(()=>{
            if(searchURL)
            alert('Something went wrong while search');
        })
    }
}

export default morePlanet;