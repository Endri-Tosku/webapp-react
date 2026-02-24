import { Link } from "react-router-dom"

// import componente per il listato delle reviews
import MovieReviewCard from "../components/MovieReviewCard"

const MovieDetailPage = () => {
    return (
        <>
            <header id="film" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img className="img-fluid" src="https://www.jdandj.com/uploads/8/0/0/8/80083458/s611371146998849390_p82_i2_w1600.jpeg" alt="titolo del libro" />
                </div>
                <h1>Titolo film</h1>
                <h3 className="text-muted"><i>By Nome autore</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Reviews qui */}
                <MovieReviewCard />
                <MovieReviewCard />
                <MovieReviewCard />
                <MovieReviewCard />
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MovieDetailPage