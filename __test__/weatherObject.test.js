import "core-js/stable";
import "regenerator-runtime/runtime";

const formWeatherObject = require( '../src/server/weatherObject');


const weather = {data: [
{
    weather: {
        description: "test1",
        icon : "test4"
    },
    temp: "test2",
    wind_spd: "test3"
}
]}


const expectedResult = {
    description: "test1",
    temp: "test2",
    wind: "test3",
    iconUrl: "https://www.weatherbit.io/static/img/icons/test4.png"
}



test( "Testing Weather Objects", () => {
    const result = formWeatherObject(weather);
    expect(result).toStrictEqual(expectedResult);
});

