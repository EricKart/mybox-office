
import React, {useState} from 'react'
import MainPage from '../components/MainPage'
import {apiGet} from '../misc/config'
import ShowGrid from '../components/show/ShowGrid'
import ActorGrid from '../components/actors/ActorGrid'

const Home = () => {

    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isShowsSearch = searchOption ==='shows';

 
    const OnSearch = () => {
        // https://api.tvmaze.com/search/shows?q=girls
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
        });
    };
    const OnInputChange = (ev) => {
        setInput(ev.target.value);
    };

    const onKeyDown = (ev) =>{
        if(ev.keyCode===13)
        {
            OnSearch()
        }
    }

    const onRadioChange = (ev) =>{
        setSearchOption(ev.target.value)
    };
    console.log(searchOption);

    const renderResults = () =>{
        if(results && results.length === 0)
        {
            return <div>No Results!</div>
        }
        if(results && results.length>0)
        {
            return  results[0].show ? (
                <ShowGrid data={results}/> 
            ) : (
                <ActorGrid data={results}/>
            );
        }
        return null;
    }

  
  return (
    <MainPage>
        <input type="text"
        placeholder='Search for something'
         onChange={OnInputChange}
          onKeyDown={onKeyDown}
           value={input}/>

           <div>

            <label htmlFor='shows-search'>
                Shows
                <input id="shows-search" type="radio" value="shows" onChange={onRadioChange}
                checked={isShowsSearch}/>
            </label>
            <label htmlFor='actor-search'>
                Actors
                <input id="actor-search" type="radio" value="people" 
                checked={!isShowsSearch} onChange={onRadioChange}/>
            </label>
           </div>
        <button type="button" onClick={OnSearch}>Search</button>
        {renderResults()}
        
    </MainPage>
  )
}

export default Home