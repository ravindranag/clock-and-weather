const GetIcon = (data) => {
    const link = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    return link;
}
 
export default GetIcon;