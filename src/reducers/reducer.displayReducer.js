const sortList = (state, action)=>{
    const _List  = action.data.sort((a,b)=>{
        if(a.population!=='unknown' && b.population!=='unknown'){
            return parseInt(a.population)  < parseInt(b.population)
        }else{
            return a.population  < b.population
        }
    });
    return Object.assign([], state,_List);
}

let filteredlist = [];

const filterFunc = (stateDtat, inputText, fullList) => {
    
    let filteredList = fullList.filter((item)=>{
        return item.name.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    })
    return Object.assign([],filteredList)
}


const displayReducer = function(state=[], action){
    switch(action.type){
        case 'DISPLAY_LIST':
        const planetList = sortList(state,action);
        return planetList;
        case 'FILTER':
        const _planetList = filterFunc(state, action.inputVal, action.fullList);
        return _planetList;
        default:
        return state;
    }
}

export default displayReducer;