// import dell'axios
import axios from "axios"

// import dell' useState e useEffect
import { useState, useEffect } from "react"

// importa componente per listato
import MovieCard from "../components/MovieCard"

// endpoint
const endpoint = "http://localhost:3000/api/movies"

const HomePage = () => {

    // impostiamo variabile di stato
    const [films, setFilms] = useState([]);

    // funzione che gestisce la chimata index
    const fetchFilms = () => {
        axios.get(endpoint)
            .then(res => { setFilms(res.data); })
            .catch(err => { console.log(err); })
    }

    // funzione di rendering del listato dei film
    const renderFilm = () => {
        return films.map(film => {
            return (
                <div className="col" key={film.id}>
                    <MovieCard filmProp={film} />
                </div>
            )
        })
    }

    // richiamo funzione di fetch
    useEffect(fetchFilms, [])

    return (
        <section className="py-5">
            <div className="container">

                {/* Header sezione */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Films</h1>
                    <p className="text-muted mb-0">I film del momento</p>
                </div>

                {/* Griglia film */}
                <div className="d-flex row row-cols-3 mt-4 justify-content-between container">
                    {renderFilm()}
                </div>
            </div>
        </section>
    )
}

export default HomePage