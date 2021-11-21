import { useState } from 'react';
import search from '../icons/search.svg';
// import Temp from './Temp';

const Search = () => {
    const api = {
        base: "https://api.openweathermap.org/data/2.5/",
        key: "5e28c723438d29a73854e5cc48b19fcd"
    }

    const [query, setQuery] = useState('');
    const [data, setData] = useState({
        name: localStorage.getItem('lastQuery'),
        main: {
            temp: localStorage.getItem('temp'),
            feels_like: localStorage.getItem('feel')
        }
    });


    const fetchData = query => {
        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
            console.log(data);
            localStorage.setItem('lastQuery',data.name);
            localStorage.setItem('temp',data.main.temp);
            localStorage.setItem('feel',data.main.feels_like);
        });

        // localStorage.setItem('name',data.name);
        // localStorage.setItem('temp',data.main.temp);
        // localStorage.setItem('feel',data.main.feels_like);
        // console.log(data.main.temp);
    }

    const formSubmit = e => {
        localStorage.setItem('lastQuery',e.target.city.value);
        e.preventDefault();
        fetchData(e.target.city.value);
    }

    const handleSubmit = e => {
        // console.log(e.target.city.value);
        if(e.key === "Enter"){
            localStorage.setItem('lastQuery',query);
            e.preventDefault();
            fetchData(query);
        }    
    };

    // if(localStorage.getItem('lastQuery') !== null){
    //     data.name = localStorage.getItem('lastQuery');
    //     data.main.temp = localStorage.getItem('temp');
    //     data.main.feels_like = localStorage.getItem('feel');
    // }

    return (
        <div className="Search space-y-16">
            <form onSubmit={formSubmit} className="bg-gray-900 rounded-2xl w-full p-4 flex justify-between items-center">
                <input onChange={e => setQuery(e.target.value)} type="text" name="city" id="city" placeholder="Your City" value={query} onKeyPress={handleSubmit} className="bg-gray-900 border-b focus:border-b p-1 flex-shrink"/>
                <button className="w-6 h-6 flex-grow"><img src={search} alt="search" className='h-full mx-auto' /></button>
            </form>
            {(typeof data.main != "undefined") ? 
                <div className="px-2">
                <div className='bg-gray-900 w-full mx-auto p-4 rounded-2xl shadow-lg grid grid-rows-3 grid-flow-col gap-4 space-x-16'>
                        <div className="col-span-2 row-span-3 self-center">
                            <p className='font-medium text-xl'>{data.name}</p>
                            <p className='font-thin text-md'>Feels like {Math.round(data.main.feels_like)}ºC</p>
                        </div>
                        <div className='row-span-3 self-center text-4xl'>{Math.round(data.main.temp)}ºC</div>
                    </div>
                </div> : 
            ('')}
        </div>
    );
}
 
export default Search;