import { Link } from "react-router-dom"

const MovieCard = (props) => {

    const { id, title, director, genre, release_year, abstract, image, } = props.filmProp;

    return (
        <div className="card mb-4">
            <img src={image}
                className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>Directed by {director}</i></address>
                <p className="card-text">{abstract}</p>
                <Link to={`/film/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard