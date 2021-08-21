import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';
import Hello from './Hello';
import './style.css';
import ReactImageFallback from 'react-image-fallback';


const imageData = [];

const numItemsToGenerate = 20; //how many gallery items you want on the screen
const numImagesAvailable = 10; //how many total images are in the collection you are pulling from
const imageWidth = 500; //your desired image width in pixels
const imageHeight = 500; //desired image height in pixels
const collectionID = 500; //the collection ID from the original url

for (let i = 0; i < numItemsToGenerate; i++) {
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  let randomCollectID = Math.floor(Math.random() * collectionID);
  if (i % 2 === 0) {
    //push fake
    imageData.push({
      src: `https://localhost:80/breakimg.jpg`
    })

  }
  imageData.push({
    src: `https://app.pixelencounter.com/api/basic/svgmonsters/${randomCollectID}/image/png?fillType=${randomImageIndex}&size=${imageWidth}`
  })

  // https://app.pixelencounter.com/api/basic/svgmonsters/2000/image/png?fillType=3&size=100

}


const MissingImage = () => {
  return null;
}

const ReactImageFallbackContainer = (props) => {

  const CONTAINER_ID = uuidv1();
  // console.log('render');
  // console.log(props);
  return (<div id={`SymbolContainer_${CONTAINER_ID}`} className="col-3 my-2">
    <img src={props.src} className="img-fluid" />
    {
      //  <ReactImageFallback {...props} />
    }
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
      // console.log(document.querySelector(`#SymbolContainer_${i}`))
      //document.querySelector(`#SymbolContainer_${CONTAINER_ID}`).remove()
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
      name: 'React',
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
        //console.log(error);
      })
    }


    this.setState(prevState => {
      //console.log('set state');
      return {
        validImages: validImages
      }
    })

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
      <div className="container-fluid">
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
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
                <div className="col-12">

                  <img src="https://loading.io/spinners/ellipsis/index.discuss-ellipsis-preloader.svg" />
                </div>
              )

          }  </div>
        <br />
        good images: {this.state.validImages.length} / {imageData.length}
        <br />

        <button onClick={this.handleClick}>Add {this.state.count}</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
