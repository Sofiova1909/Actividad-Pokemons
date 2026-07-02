import { Link } from "react-router-dom";

interface PokemonCardProps {
  name: string;
  image: string;
  type: string;
}

function PokemonCard({ name, image, type }: PokemonCardProps) {
  return (
    <Link
      to={`/pokemon/${name}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card h-100 shadow-sm">

        <img
          src={image}
          className="card-img-top p-3"
          alt={name}
          style={{ height: "180px", objectFit: "contain" }}
        />

        <div className="card-body text-center">

          <h5 className="card-title text-capitalize">
            {name}
          </h5>

          <p
            className="card-text"
            style={{ fontSize: "20px", color: "#333" }}
>
            Tipo: {type}
          </p>

        </div>

      </div>
    </Link>
  );
}

export default PokemonCard;