import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';
import Hello from './Hello';
import './style.css';
import ReactImageFallback from 'react-image-fallback';
import 'bootstrap/dist/css/bootstrap.min.css';


const imageData = [];

const numberOfItemsToGenerate = 30; //how many gallery items you want on the screen
const fillType = 10; //how many total images are in the collection you are pulling from
const imagesize = 100; //your desired image width in pixels
const seedId = 500; //the collection ID from the original url

for (let i = 0; i < numberOfItemsToGenerate; i++) {
  let randomfillType = Math.floor(Math.random() * fillType);
  let randomseedId = Math.floor(Math.random() * seedId);
  if (i % 2 === 0) {
    //push fake
    imageData.push({
      src: `https://localhost:80/breakimg.jpg`
    })

  }
  
  imageData.push({
    src: `https://app.pixelencounter.com/api/basic/svgmonsters/${randomseedId}/image/png?fillType=${randomfillType}&size=${imagesize}`
  })
  
}

const MissingImage = () => {
  return null;
}

const axios = require('axios')

const download = e => {

//###Using javascript Fetch

  // console.log(e.target.href);
  // fetch(e.target.href, {
  //   method: "GET",
  //   headers:  headers: {
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // },
  //   responseType:'blob',
  //   mode:'no-cors'
  // })
  //   .then(response => {
  //     response.arrayBuffer().then(function(buffer) {
  //        var fileURl = window.URL.createObjectURL(new Blob([response.data]))
  //               var fileLink = document.createElement('a');
  //               fileLink.href = fileURl;
  //               fileLink.setAttribute('download','image.png');
  //               document.body.appendChild(fileLink);
  //               fileLink.click();
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  //############## Usinf axios
  axios({
    url:e.target.src,
    method:'GET',
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    redirect: 'follow', // manual, *follow, error
    responseType:'blob',
}).then((response) => {
    var url = window.URL.createObjectURL(new Blob([response.data]))
    var link = document.createElement('a');
    link.src = url;
    link.setAttribute('download','image.png');
    document.body.appendChild(link);
    link.click();
})

//##############################
}

const ReactImageFallbackContainer = (props) => {

  const CONTAINER_ID = uuidv1();
  return (<div id={`SymbolContainer_${CONTAINER_ID}`} className="col-3 my-2">
    <a download
        onClick={e => download(e)}><img src={props.src} className="img-fluid" /></a>
  </div>)
}

const ImageComponent = ({ src }) => {
  return <ReactImageFallbackContainer
    src={src}
    fallbackImage={<MissingImage />}
    initialImage="https://loading.io/spinners/ellipsis/index.discuss-ellipsis-preloader.svg"
    alt="cool image should be here"
    className="img-fluid"
    onError={(e) => {
      s
    }}
  />

}
const checkImage = (img) => {
  // console.log('img', img.src)
  return new Promise((resolve, reject) => {

    let image = new Image();

    image.onload = () => { resolve(img.src); }
    image.onerror = () => { reject('one or more images could not load'); }
    image.src = img.src;
  })

}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Image Gallery',
      validImages: [],
      count: 0
    };
  }

  componentDidMount = async () => {
    const validImages = [];
    let promises = imageData.map(checkImage);

    await Promise.all(promises).then(response => {
      console.log(response);

    }).catch(e => {
      console.log(e);
    });


    for (let promise of promises) {
      await promise.then(response => {
        validImages.push({
          src: response
        });
      }).catch(error => {
        console.log(error);
      })
    }


    this.setState(prevState => {
      return {
        validImages: validImages
      }
    })



    // for (var img of imageData) {
    //   checkImage(img.src).then(response => {
    //     console.log(response);
    //     this.setState(prevState => {
    //       return {
    //         validImages: [
    //           ...prevState.validImages,
    //           {
    //             src: response
    //           }
    //         ]
    //       }
    //     })
    //   }).catch(e => {
    //     console.log(e);
    //   });
    // }



  }



  delayedCallback = _.debounce(function (event) {
    // `event.target` is accessible now
    console.log(event.target.value)
  }, 300);
  handleInputChange = e => {

    e.persist();
    this.delayedCallback(e)
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div className="container">
        <Hello name={this.state.name} />
        <p className="title">
          Click on image to Download :)
        </p>
        
        {
          //<input type="text" onChange={this.handleInputChange} />
        }
        <div className="row">
          {
            this.state.validImages.length ? (
              this.state.validImages.map((img, i) => {
                // if (checkImage(img.src)) {
                return <ImageComponent key={`img_${i}`}  {...img} />
                // }


                // return null;
              })
            )
              : (
                <div className="card-title">

                  <img className="loading" src="https://studio.code.org/v3/assets/CffKtSIYkjIcwoQ0tYfRw1wj2Av7J0cAl29M3yGpRKk/3d6aa9082f3c9e285df9970dc7b762ac.gif" />
                  
                </div>
                
              )

          }  </div>
        <br />
        good images: {this.state.validImages.length} / {imageData.length}
        <br />

        {/* <button onClick={this.handleClick}>Add {this.state.count}</button> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
