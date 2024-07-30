import bookstore from "../assets/bookstore.jpg";
import headshot from "../assets/headshot.JPG";
import soccer from "../assets/soccer.jpg";
import victoriaBc from "../assets/victoria-bc.JPG";
import wedding from "../assets/wedding.jpg";

const images = [bookstore, headshot, soccer, victoriaBc, wedding];

const handleImages = () => {
  const imageToShow = images[Math.floor(Math.random() * images.length)];
  return imageToShow;
};

export default handleImages;
