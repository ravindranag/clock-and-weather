// import { useState, useEffect } from 'react';
// import GetIcon from './GetIcon';

const Temp = (data) => {
    // const query = city;
    // const apiKey = '5e28c723438d29a73854e5cc48b19fcd';

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // });

    // console.log(data.weather[0].icon);
    // const link = "http://openweathermap.org/img/wn/" + String(data.weather[0].icon) + ".png";
    // console.log(link);

    return (
        <div className="px-2">
            {data
            &&
            <div className='bg-gray-900 w-full mx-auto p-4 rounded-2xl shadow-lg grid grid-rows-3 grid-flow-col gap-4 space-x-16'>
                <div className="col-span-2 row-span-3 self-center">
                    <p className='font-medium text-xl'>{data.name}</p>
                    <p className='font-thin text-md'>Feels like {Math.round(data.main.feels_like)}ºC</p>
                </div>
                <div className='row-span-3 self-center text-4xl'>{Math.round(data.main.temp)}ºC</div>
            </div>}
        </div>
    );
}
 
export default Temp;