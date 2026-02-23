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
                <div className="row g-4">
                    <div className="col-12">
                        <div className="p-5 bg-light text-center rounded">
                            <h5 className="mb-0">Qui verranno mostrati i film</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage