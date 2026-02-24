import { Link } from "react-router-dom"

const MovieCard = () => {
    return (
        <div className="card mb-4">
            <img src="https://www.jdandj.com/uploads/8/0/0/8/80083458/s611371146998849390_p82_i2_w1600.jpeg"
                className="card-img-top" alt="titolo del film" />
            <div className="card-body">
                <h5 className="card-title">Titolo del film</h5>
                <address><i>Autore</i></address>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ratione veritatis sunt molestias nihil odit totam, quis corporis laboriosam excepturi. Labore vero molestiae eveniet explicabo esse iure laborum nemo odio.</p>
                <Link to={`film/1`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard