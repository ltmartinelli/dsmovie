import Arrow from '../../assets/img/arrow.svg'
import { MoviePage } from '../../models/movie';
import './styles.css'

type Props = {
    page: MoviePage
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function;
}


export default function Pagination({ page, onChange }: Props)
{
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <img src={Arrow} alt="previous" />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <img className="dsmovie-flip-horizontal" src={Arrow} alt="next" />
                </button>
            </div>
        </div>
    );
}