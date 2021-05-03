const weather = require('./weather');   //include the weather module to get all the functionality based on the query 
//Join multiple values passed as arguments and replace all spaces with underscoress 
const query = process.argv.slice(2).join("_").replace(' ', '_');  //cleans up the user input to create queries for the WeatherUnderground API
//query: 90201
//query: Cleveland_OH
//query: London_England
weather.get(query);  // pass the query into the weather module's get function
