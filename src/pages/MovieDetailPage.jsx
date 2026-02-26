import { Link, useParams, useNavigate } from "react-router-dom"

// import dell'axios
import axios from "axios"

// import dell' useState e useEffect
import { useState, useEffect } from "react"

// import componente per il listato delle reviews
import MovieReviewCard from "../components/MovieReviewCard"

// import componente per form review
import ReviewForm from "../components/ReviewForm";

// import hook custom del contesto globale
import { useGlobal } from "../contexts/GlobalContext";

// endpoint
const endpoint = "http://localhost:3000/api/movies/"

const MovieDetailPage = () => {

    // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { setIsLoading } = useGlobal();

    // prendiamo id libro da url rotta
    const { id } = useParams();

    // settiamo la var di stato per il libro
    const [film, setFilm] = useState({});

    // creiamo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    const titleToImage = {
        "The Godfather": "the_godfather.jpg",
        "Interstellar": "interstellar.jpg",
        "Titanic": "titanic.jpg",
        "The Matrix": "matrix.jpg",
        "Inception": "inception.jpg"
    };

    const fetchFilm = () => {

        // parte la chimata cambio var stato context di conseguenza
        setIsLoading(true);

        axios.get(endpoint + id)
            .then(res => {
                const film = res.data;
                film.image = `http://localhost:3000/images/movies_cover/${titleToImage[film.title]}`;
                setFilm(film);
            })
            .catch(err => {
                console.log(err);
                if (err.response?.status === 404) redirect('/404');
            })

            .finally(() => {
                setIsLoading(false);
            });

    }
    useEffect(() => {
        fetchFilm();
    }, [id]);

    // funzione di rendering del listato dei film
    const rederReviews = () => {
        return film.reviews?.map(review => {
            return (
                <MovieReviewCard key={review.id} reviewProp={review} />
            )
        })
    }

    return (
        <>
            <header id="film" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img className="img-fluid" src={film.image} alt={film.title} />
                </div>
                <h1>{film.title}</h1>
                <h3 className="text-muted"><i>By {film.director}</i></h3>
                <p>{film.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Reviews qui */}
                {rederReviews()}
            </section>

            <section>
                <ReviewForm movie_id={film.id} reloadReviews={fetchFilm} />
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>


        </>
    )
}

export default MovieDetailPage