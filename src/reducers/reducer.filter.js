let filteredlist = [];

const filterFunc = (stateDtat, inputText, fullList) => {
    
    let filteredList = fullList.filter((item)=>{
        return item.name.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    })
    return Object.assign([],filteredList)
}

const filterReducer = function(state=[], action){
    switch(action.type){
        case 'FILTER':
        const planetList = filterFunc(state, action.inputVal, action.fullList);
        return planetList;
        default:
        return state;
    }
}

export default filterReducer;