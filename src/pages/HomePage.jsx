import MovieCard from "../components/MovieCard"

const HomePage = () => {
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
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </section>
    )
}

export default HomePage