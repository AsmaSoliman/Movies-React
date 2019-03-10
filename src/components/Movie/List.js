import React from 'react';
import MovieCard from './Card';


class MovieList extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            data : this.props.data,
            searchValue:'',
        };
        // this.onChange=this.onChange.bind(this);
    }

    onChange = (e) =>{
        const name = e.target.name;
        if(name === 'searchBox')
        {
            const value = e.target.value.toLowerCase();
            const newData =this.props.data.filter(m=> m.Title.toLowerCase().includes(value));
            this.setState({data:newData,searchValue:value});
        }
        else if(name === 'watchedBtn'){
            const newData=this.props.data.filter(m=> m.Title.toLowerCase().includes(this.state.searchValue)&&m.watched === true);
            this.setState({data:newData});
        }
        else if(name === 'notWatchedBtn'){
            const newData=this.props.data.filter(m=> m.Title.toLowerCase().includes(this.state.searchValue)&&m.watched === false);
            this.setState({data:newData});
        }else if(name === 'allBtn'){
            const newData =this.props.data.filter(m=> m.Title.toLowerCase().includes(this.state.searchValue));
            this.setState({data:newData});
        }
  
    }
    // onClickTrue = () =>{
    //     const newData=this.props.data.filter(m=> m.Title.toLowerCase().includes(this.state.searchValue)&&m.watched === true);
    //     this.setState({data:newData});
    // }
    // onClickFalse = () =>{
    //     const newData=this.props.data.filter(m=> m.Title.toLowerCase().includes(this.state.searchValue)&&m.watched === false);
    //     this.setState({data:newData});
    // }
    // onClickAll=()=>{
        
    //     const newData =this.props.data.filter(m=> m.Title.toLowerCase().includes(this.state.searchValue));
    //     this.setState({data:newData});
    // }
    render(){
        const {data} = this.state;
    return(
        <>
     
    <div className="row App justify-content-center">
    
    <input className="search col-10" type="search" placeholder="Search" aria-label="Search"name="searchBox" onChange={this.onChange}></input>
   <div className="col-10">
   <button type="button" name="allBtn" class="btn btn-success btn-lg" onClick={this.onChange}>Veiw All</button>
   <button type="button" name="watchedBtn" class="btn btn-primary btn-lg" onClick={this.onChange}>Veiw Watched Movies</button>
    <button type="button" name="notWatchedBtn" class="btn btn-secondary btn-lg" onClick={this.onChange}>Veiw Not-Watched Movies</button>

   </div>
   
        {
        
        Array.isArray(data) && data.map(m=><MovieCard key={m.imdbID} {...m}/>)
        }
        </div>
        </>);
       
    
    }
    }


export default MovieList;
