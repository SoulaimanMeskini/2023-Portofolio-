import React, { useState } from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/826/original/58.png?1682941068",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/824/original/56.jpg?1682941055",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/825/original/57.jpg?1682941060",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/823/original/55.png?1682941050",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/822/original/54.png?1682941044",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/821/original/53.png?1682941038",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/820/original/52.png?1682941033",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/819/original/51.jpg?1682941027",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/818/original/50.png?1682941021",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/817/original/48.png?1682941003",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/816/original/47.png?1682940998",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/815/original/46.png?1682940993",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/814/original/45.png?1682940987",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/813/original/44.jpg?1682940980",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/812/original/43.jpg?1682940968",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/810/original/41.jpg?1682940944",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/811/original/42.jpg?1682940959",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/809/original/40.jpg?1682940938",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/808/original/39.png?1682940931",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/807/original/38.png?1682940926",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/806/original/37.png?1682940920",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/805/original/36.png?1682940914",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/804/original/35.gif?1682940906",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/802/original/32.PNG?1682940895",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/801/original/31.jpg?1682940891",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/800/original/30.gif?1682940885",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/799/original/29.png?1682940880",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/798/original/28.jpg?1682940865",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/797/original/27.jpg?1682940859",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/796/original/26.jpg?1682940854",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/795/original/25.png?1682940850",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/794/original/24.jpg?1682940846",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/793/original/23.png?1682940838",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/792/original/22.jpg?1682940832",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/791/original/21.png?1682940826",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/790/original/20.jpg?1682940820",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/789/original/19.jpg?1682940814",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/788/original/18.jpg?1682940804",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/787/original/17.png?1682940798",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/786/original/16.jpg?1682940793",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/785/original/15.png?1682940786",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/784/original/14.jpg?1682940779",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/782/original/12.jpg?1682940722",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/783/original/13.jpg?1682940768",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/780/original/10.jpg?1682940709",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/779/original/9.jpg?1682940704",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/778/original/8.jpg?1682940700",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/777/original/7.jpg?1682940695",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/776/original/6.jpg?1682940688",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/775/original/5.jpg?1682940664",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/774/original/4.jpg?1682940659",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/770/original/1.jpg?1682940157",
];

function Lookbook() {
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
    setLoaded(true);
  }

  return (
    <>
      <ImageWrapper>
        <Container>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="12px">
              {images.map((image, i) => (
                <img
                  onLoad={handleImageLoad}
                  className={loaded ? "loaded" : ""}
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </ImageWrapper>
    </>
  );
}

const ImageWrapper = styled.div`
  img {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  img.loaded {
    opacity: 1;
  }
`;

const Container = styled.div`
  margin-top: 90px;
  overflow: hidden;
  position: relative;
`;

export default Lookbook;
