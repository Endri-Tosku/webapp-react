const MovieReviewCard = (props) => {

    const { text, vote, name } = props.reviewProp;

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    {text}
                </p>
                <strong>Vote: {vote}</strong>
                <address><i>{name}</i></address>
            </div>
        </div>
    )
}

export default MovieReviewCard