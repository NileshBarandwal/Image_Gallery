import React from 'react'

function gallery() {
    const download = () => {
      var element = document.createElement("a");
      var file = new Blob(
        [
          "https://cors-anywhere.herokuapp.com/https://app.pixelencounter.com/api/basic/svgmonsters/image/png?primaryColor=%23FC6400"
        ],
        { type: "image/*" }
      );
      element.href = URL.createObjectURL(file);
      element.download = "image.jpg";
      element.click();
    };
    return (
      <div className="App">
        <a
          href="https://cors-anywhere.herokuapp.com/https://app.pixelencounter.com/api/basic/svgmonsters/image/png?primaryColor=%23FC6400"
          download
          onClick={() => download()}
        >
          <i className="fa fa-download" />
          download
        </a>
      </div>
    );
  }

export default gallery;
