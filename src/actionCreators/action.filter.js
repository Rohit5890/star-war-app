const filterAction = function(inputVal, fullList){
    return {
        type: 'FILTER',
        inputVal: inputVal,
        fullList: fullList
    }
}

export default filterAction;