const FilmCard = ({ title, poster, description }) => {
  return (
    <div className="card bg-base-200 w-96 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
    <figure>
    <img
      src={poster}
      alt={title} />
    </figure>
    <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    </div>
    </div>
  );
};

export default FilmCard;
