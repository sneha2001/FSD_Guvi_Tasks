//How to compare two JSON have the same properties without order?

let obj1 = {name : "User 1", age : 6};
let obj2 = {age : 6, name :"User 1"};
//console.log(_.isEqual(obj1, obj2));

/* 
2. Use the rest countries API URL -> https://restcountries.com/v3.1/all and 
display all the country flags in the console.
3. Use the same rest countries and print all countries names, region, subregion and 
populations

Answers for Both 2 and 3rd question

*/

let xhrData = new XMLHttpRequest();
//console.log(xhrData);

xhrData.open("GET", "https://restcountries.com/v3.1/all");// Opening this link and getting the data 
xhrData.send(); // After getting the data, sends to client
xhrData.onload = () => {
    const data = JSON.parse(xhrData.response);
    //console.log(data);
    for (getArr of data){
        var countryName = getArr["name"].common;
        var regionName = getArr["region"];
        var subRegName = getArr["subregion"];
        var popCount = getArr["population"];
        var flagId = getArr["flag"]

       console.log("Flag : " +flagId);
       console.log("Country : " +countryName+ " | Region : " +regionName+
       " | Sub Region : " +subRegName+ " | Population : " +popCount);
       console.log("-------------------------------------------------------------");
    }
}
