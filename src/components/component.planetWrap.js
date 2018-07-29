import React from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import searchAction from '../actionCreators/action.search';
import filterAction from '../actionCreators/action.filter';
import morePlanet from '../actionCreators/action.morePlanet';

import ListElem from './conponent.list';
import Input from './component.input';

import { withRouter } from 'react-router-dom';

class PlanetWrap extends React.Component{
    constructor(props){
        super(props);
        this.fullList = [];
        this.count = 0;
    }
    componentWillMount(){
        const { history, authentic } = this.props; 
        !authentic && this.props.history.push("/");
    }
    componentDidMount(){
        const URL ='https://swapi.co/api/planets/';
        this.props.dispatch(searchAction(URL));
    }
    onChangeHandler(e){
        if(this.props.user && this.props.user === 'Luke Skywalker'){
            this.props.dispatch(filterAction(e.target.value,this.fullList));
        }else if(this.count < 16){
            this.count++; 
            this.props.dispatch(filterAction(e.target.value,this.fullList));
        }else{
            alert('Your search limit exceeds limit of 15 search per session.')
        }
    }
    searchMorePlanet(e){
        if(e.target.value){
            const URL = 'https://swapi.co/api/planets/?search=' + encodeURI(e.target.value.toLowerCase()); 
            if(this.props.user && this.props.user === 'Luke Skywalker'){
                this.props.dispatch(morePlanet(URL))
            }else if(this.count < 16){
                this.count++; 
                this.props.dispatch(morePlanet(URL));
            }else{
                alert('Your search limit exceeds limit of 15 search per session.')
            }
        }
    }
    renderList(searchList){
        return searchList.map((item, index)=><ListElem fontSize={`${index * 2 + 15}px`} key={`${item.name}_${index}`} index={index}data={item} className={``}/>);
    }
    clickHandler(){
        this.props.history.push("/");
    }
    render(){
        let { searchList, morePlanetList } = this.props; 
        if((this.fullList.length === 0 ) && searchList) {
            this.fullList = searchList
        };
        return (
            <div className="planet-comp">
                <div className="header">
                    <h2 class="title">{`Welcome ${this.props.user}`}</h2>
                    <button className="sign-out" onClick={()=>{this.clickHandler()}}>Sign Out</button>
                </div>
                <div className="filter-wrap">
                    <Input className={`filter-list`} placeholder="Filter the List" onchange = {(e)=>this.onChangeHandler(e)}/>
                    { searchList.length === 0 && <div className="loading"><div></div></div> }
                    { searchList && <ul className="planet-list">{this.renderList(searchList)}</ul> }
                </div>
                <hr/>
                <div className="search-more-wrap">
                    <h2>Search more Planets</h2>
                    <Input placeholder="Search More Planet" onchange = {(e)=>this.searchMorePlanet(e)}/>
                    { morePlanetList && <ul> {this.renderList(morePlanetList)}</ul> }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        searchList: state.searchList,
        morePlanetList: state.morePlanetList
    } 
}

export default withRouter(connect(mapStateToProps)(PlanetWrap));