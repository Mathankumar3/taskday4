// rest countries APL URL

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    for (var i=0; i<data.length;i++){
        console.log(data[i].name);
    }
    for( i=0; i<data.length; i++){
        console.log(data[i].regin);
    }
    for(i=0; i<data.length;i++){
    console.log(`countryName-${data[i].name} and flag-${data[i].flag}`)
    }
    for(i=0; i<data.length;i++){
        console.log(data[i].sub-regin.populations)
    }
}


// var abc = new XMLHttpRequest();
// abc.open("GET", "https://restcountries.eu/rest/v2/all");
// abc.send()
// abc.responseType = "json";
// abc.onload = function displayResult() {
//     var countries= abc.response;
//     console.log(countries);
//     console.log(countries.length);
//     console.log(countries.length.name.all)
// };