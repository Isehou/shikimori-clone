import "../style.css";
function DetailsImage(props) {
  return (
    <img
      className="aniManga-image__block"
      src={"https://shikimori.one" + props.src}
      alt="#"
    ></img>
  );
}
export default DetailsImage;
