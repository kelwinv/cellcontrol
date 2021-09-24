import "./styles.css";

export function GameBanner({ name, url, imgUrl,descripiton }) {
  return (
    <li className="gameBanner-container">
      <button>
        <div className="imgBox">
          <img src={imgUrl} alt="snake" />
        </div>
        <div className="descripiton">
          <h2>{name}</h2>
          <span>{descripiton}</span>
        </div>
      </button>
    </li>
  );
}
