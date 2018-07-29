
const morePlanetReducer = function(state=[], action){
    switch(action.type){
        case 'MORE_PLANET':
        const planetList = Object.assign([], action.data);
        return planetList;
        default:
        return state;
    }
}

export default morePlanetReducer;