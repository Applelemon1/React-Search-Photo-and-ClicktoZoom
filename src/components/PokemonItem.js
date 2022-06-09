import './PokemonItem.css'

function PokemonItem(props) {
     const { pokemon,onClick }=props;

    return (
        <div className='pokemon-item'>
        <img src={pokemon.imgsrc}  width={300} height={300} onClick={()=>{onClick(pokemon)}}/>
          <p>{pokemon.name}</p>
        </div>
    );
}

export default PokemonItem;