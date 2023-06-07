import Arrow from '../../assets/img/arrow.svg'

export default function Pagination(){
    return(
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <img src={Arrow} alt="previous" />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <img className="dsmovie-flip-horizontal" src={Arrow} alt="next" />
                </button>
            </div>
        </div>
    );
}