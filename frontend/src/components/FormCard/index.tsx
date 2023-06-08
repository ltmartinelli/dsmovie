import { Link, useNavigate } from 'react-router-dom';
import './styles.css'
import { Movie } from '../../models/movie';
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import { validateEmail } from '../../utils/validate';


type Props = {
    movieId: number,
}

type FormData = {
    email: string;
    score: number;
}


export default function FormCard({ movieId }: Props)
{

    const [movie, setMovie] = useState<Movie>();

    const [formData, setFormData] = useState<FormData>({ email: "", score: 0 });

    const navigate = useNavigate();


    useEffect(() =>
    {
        axios.get(`${BASE_URL}/movies/${movieId}`).then(response => setMovie(response.data))
    }, [movieId])

    function handleSubmit(event: any)
    {
        event.preventDefault();
        const email = formData.email
        const score = formData.score
        if (!validateEmail(email)) { return }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => { navigate("/") })
    }

    function handleChange(event: any)
    {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form onSubmit={handleSubmit} className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score" name="score" value={formData.score} onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/"><button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button></Link>
            </div >
        </div >
    );
}