import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    //variable to hold the data that we get from the api
    const [data, setData] = useState({})
    // fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //now the data has been converted into json format, now we need to hold the data in a variable
        .then((res) => res.json())
        //this then, has been the response in json format and now we can use it
        .then((res) => setData(res[currency]))//the currency in the square brackets is the currency that we are passing in the function, and the res[currency] is the data that we are getting from the api, matlab vo keyword hai ki humein kis currecy ki value chahiyea 
        console.log(data);
        //if there is any change in currency we would like to recall it again, so we will pass the currency in the dependency array
    }, [currency]);//first part is the call back, and second part is the dependency array, jaise he dependency array change hoga, useEffect will run again, matlab vo firse call hoga thodi si bhi value change hone pr
    //this is the data that we are getting from the api
    console.log(data);
    return data;
}
//now we need to export this function
export default useCurrencyInfo;