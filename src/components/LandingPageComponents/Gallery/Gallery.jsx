import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = () => {
  const galleryRef1 = useRef(null);
  const galleryRef2 = useRef(null);
  const galleryRef3 = useRef(null);
  const galleryRef4 = useRef(null);

  const galleryImgs = [
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/image1.jpg?updatedAt=1686995211250",
      tag: "image1",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/image2.jpg?updatedAt=1686995211582",
      tag: "image2",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/image3.jpg?updatedAt=1686995211140",
      tag: "image3",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/image4.jpg?updatedAt=1686995212113",
      tag: "image4",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/image5.jpg?updatedAt=1686995211233",
      tag: "image5",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed2.jpg?updatedAt=1687009432281",
      tag: "image6",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed5.jpg?updatedAt=1687009432259",
      tag: "image10",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed6.jpg?updatedAt=1687009432283",
      tag: "image8",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed1.jpg?updatedAt=1687009432283",
      tag: "image7",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed4.jpg?updatedAt=1687009432276",
      tag: "image9",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed3.jpg?updatedAt=1687009432240",
      tag: "image11",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Notes/notes2.jpg?updatedAt=1686218267037",
      tag: "image12",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Notes/notes3.jpg?updatedAt=1686218263596",
      tag: "image13",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Notes/notes4.jpg?updatedAt=1686218259743",
      tag: "image14",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Notes/notes1.jpg?updatedAt=1686218252408",
      tag: "image15",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/fq9vykvp2/Classes/feed7.jpg?updatedAt=1687097519728",
      tag: "image16",
    },
  ];

  useEffect(() => {
    galleryRef1.current.classList.add("slide-in");
    galleryRef2.current.classList.add("slide-in");
    galleryRef3.current.classList.add("slide-in");
    galleryRef4.current.classList.add("slide-in");
  }, []);

  return (
    <div className="thc__landingPage">
      <div className="section__padding thc__gallery">
        <h2>Gallery</h2>
        <p className="thc__gallery-category">Weekly Online Classes</p>
        <div className="gallery-container" ref={galleryRef1}>
          {galleryImgs.slice(0, 5).map((img) => (
            <img src={img.imageUrl} alt={img.tag} key={img.tag} />
          ))}
        </div>
        <p className="thc__gallery-category">
          Feedbacks taken after every class
        </p>
        <div className="gallery-container" ref={galleryRef2}>
          {galleryImgs.slice(5, 11).map((img) => (
            <img src={img.imageUrl} alt={img.tag} key={img.tag} />
          ))}
        </div>
        <p className="thc__gallery-category">Sample notes used for teaching</p>
        <div className="gallery-container" ref={galleryRef3}>
          {galleryImgs.slice(11, 15).map((img) => (
            <img src={img.imageUrl} alt={img.tag} key={img.tag} />
          ))}
        </div>
        <p className="thc__gallery-category">
          Samples of feedback given during mock interviews
        </p>
        <div className="gallery-container" ref={galleryRef4}>
          {galleryImgs.slice(15, 16).map((img) => (
            <img src={img.imageUrl} alt={img.tag} key={img.tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
