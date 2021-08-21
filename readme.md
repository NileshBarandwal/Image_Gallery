## Image Gallery 

## Installation and Setup Instructions 

Clone down this repository. You will need `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

Working Demo :

https://nileshbarandwal.github.io/Image_Gallery/

### Note

Above solution solve all the requirements specified in Problem Statement but temporarily as am using middleware(CORS anywhere - NodeJS proxy which adds CORS headers to the proxied request) to resolve Cors error.

To Solve this problem I had written following code which doesn't require any middleware and solves the problem. But it only works on console of pixelencounter website only, and when tired to run on console of other website or locally it gives cors error.

```
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
    mode:'no-cors'
};
asd = "";
fetch("https://app.pixelencounter.com/api/basic/svgmonsters/15000/image/png?fillType=4&size=100", requestOptions)
  .then(response => {
    reader = response.body.getReader(); // Using postman I found that data is present inside body
    reader.read().then(({done,value})=>{
        asd = value;
    })
    })
   .catch(error => console.log('error', error));

// Converts unicode number into a character, so the string with numerical values will be changed to a unicode char sequence.

asd2 = "";
asd.forEach(a => {asd2 += String.fromCharCode(a)} )

// Converts binary to ASCII, 

asd3 = btoa(asd2)

// Get the image in required formate (as show

 in attach image)

ImageFinal = "data:image/png;base64,"+asd3

document.querySelector("#img123").src = ImageFinal
document.querySelector("#aimg123").href = ImageFinal
```

