import React, { useEffect, useState } from "react";
import axios from "axios";
import Meme from "../meme/Meme";

const apiUrl =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=owl";
//"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=animal_memes";

const MemeBoxItem = () => {
  const [memeList, setMemeList] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response);

        const photoList = response.data.photos.photo;

        const memeList = photoList.map((item) => {
          const baseImageUrl = "https://live.staticflickr.com";
          // const imageSize = "w";
          const imageFormat = "jpg";

          return new Meme({
            title: item.title,
            baseImageUrl: `${baseImageUrl}/${item.server}/${item.id}_${item.secret}.${imageFormat}`,
          });
        });

        setMemeList(memeList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="App">
      <section className="App-header">
        <h1>Owl</h1>
        <p>Living in the Dark</p>
        <ul className="row">
          {memeList.map((item, index) => {
            return (
              <li className="col-3" key={index}>
                <figure>
                  <img
                    className="card-img-top"
                    style={{ width: "250px" }}
                    src={item.baseImageUrl}
                    alt={item.title}
                  ></img>
                  <figcaption className="card-title">{item.title}</figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default MemeBoxItem;
