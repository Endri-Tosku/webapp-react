const MovieDetailPage = () => {
    return (
        <section className="py-5">
            <div className="container">

                <div className="row justify-content-center">

                    {/* colonna immagine */}
                    <div className="col-md-4 mb-4">
                        <div className="bg-light rounded d-flex align-items-center justify-content-center">
                            <span className="text-muted">Poster film</span>
                        </div>
                    </div>

                    {/* colonna dettagli */}
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-3">Titolo del Film</h1>
                        <p className="text-muted">
                            Qui andrà la descrizione del film.
                        </p>

                        <button className="btn btn-outline-primary mt-3">
                            Torna alla Home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetailPage