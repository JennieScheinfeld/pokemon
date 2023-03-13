import * as Styled from './style'
import {Button} from '../Button/Button'


export const PokemonTable =({pokemonData, onPokemonSelection, setRandomPokemons}) => {
    const data = pokemonData.map(pokemon => ({id: pokemon.id, name: pokemon.name.english, thumbnail: pokemon.thumbnail }))
    const calcImgNum = (id) => id < 10 ? "00" + id : (id > 99 ? id : "0" + id)

    return (
      <Styled.PageContainer>
        <Styled.Table>
          <thead>
            <tr>
              <th/>
              <th>Name</th>
            </tr>
          </thead>
          <tbody style={{}}>
            {data.map((item) => {
              const imgStr = calcImgNum(item.id)
                const image = require("../thumbnails/" + imgStr + ".png")
              return (
                <tr key={item.id} style={{ backgroundColor: "black"}}>
                  <td> <Styled.Icon src={image} alt={item.name}/></td>
                  
                  <Styled.InvisibleButton
                    onClick={(e) => onPokemonSelection(e, item.id)}>
                      <td style={{ color: "white", fontSize: "large", fontFamily: "Josefin Sans, sans-serif"}}>{item.name}</td>
                    </Styled.InvisibleButton>
                </tr>
              )
            })}
          </tbody>
        </Styled.Table>
        <Button text="Refresh" onClick={setRandomPokemons}/>
      </Styled.PageContainer>

      );
    };
