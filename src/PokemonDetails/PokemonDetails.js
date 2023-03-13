import * as Styled from './style'
import {Button} from '../Button/Button'

export const PokemonDetails = ({pokemonData, onBackClick}) => {
    const { id, base, name, type } = pokemonData
    const calcImgNum = id < 10 ? "00" + id : (id > 99 ? id : "0" + id)
    const image = require("../thumbnails/" + calcImgNum + ".png")

    return <Styled.PageContainer>
        <Styled.Details>
        <Styled.Image src={image} />
        <Styled.TopSection >
            <h3>Name: {name.english}</h3>
            <h3>Type: {type.join(", ")}</h3>
            <h3>Base:</h3>
        </Styled.TopSection>
         <Styled.BottomSection >
            <div>HP: {base.HP}</div>
            <div>Attack: {base.Attack}</div>
            <div>Defense: {base.Defense}</div>
            <div>Sp.Attack: {base["Sp. Attack"]}</div>
            <div>Sp.Defense: {base["Sp. Defense"]}</div>
            <div>Speed: {base.Speed}</div>
        </Styled.BottomSection>

        </Styled.Details>
    <Button text="Back" onClick={onBackClick}/>
    </Styled.PageContainer>

}