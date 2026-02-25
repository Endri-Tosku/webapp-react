import axios from "axios";
import { useState } from "react"

const ReviewForm = (props) => {

    const { movie_id } = props;

    // creiamo stringa di ref all'endpoint del BE
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // creo oggetto per valori di default form
    const initialFormData = {
        name: "",
        text: "",
        vote: 0
    };

    // var di stato per gestire oggetto dei valori input form
    const [formData, setFormData] = useState(initialFormData);

    // funzione di gestione dei dati del form
    function setFieldValue(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }

    // funzione per gestione della chiamata al submit del form
    const handleSubmit = e => {
        // inibiamo comportamento di base del form
        e.preventDefault();
        // gestisci la chiamata in post all'endpoint in axios
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => { setFormData(initialFormData) })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Leave a review</legend>
                <div className="mb-3">
                    <label>Review</label>
                    <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                </div>
                <div className="mb-3">
                    <label>Your vote</label>
                    <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                </div>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </fieldset>
        </form>
    )
}

export default ReviewForm