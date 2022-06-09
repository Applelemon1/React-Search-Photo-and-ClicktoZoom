import './PokemonExpand.css'

function PokemonExpand(props) {
               const{pokemon , onbgClick} =props;

    return (
        <div className='pokemon-expand'>
        <div className="pokemon-expand-bg" onClick={onbgClick}>
        <div className="pokemon-expand-content">
                <img src={pokemon.imgsrc}></img>
                <h4>{pokemon.name}</h4>
        </div>
        </div>
        </div>
    );
}

export default PokemonExpand;