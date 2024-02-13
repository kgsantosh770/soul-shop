import { useState } from 'react';
import Card from '../../components/Card/Card';
import './CardGroup.css';

const CardGroup = ({ groupTitle, filters, cards, singleColumn }) => {
    const [characters, setCharacters] = useState(cards ? cards : []);

    const handleChange = (e) => {
        const filterName = e.target.value;
        if (filterName === 'allcharacters') setCharacters(cards);
        else {
            const filteredCharacters = cards.filter(character => character.tags.includes(filterName));
            setCharacters(filteredCharacters);
        }
    }

    return (
        <div className='cards-container'>
            {
                (groupTitle || filters) &&
                <div className='cards-header'>
                    {groupTitle && <h4 className='heading'>{groupTitle}</h4>}
                    {filters &&
                        <select className='filters' onChange={(e) => handleChange(e)}>
                            {
                                ['All Characters', ...filters].map((filter, index) =>
                                    <option key={index} value={filter.toLowerCase().split(' ').join('')}>
                                        {filter}
                                    </option>)
                            }
                        </select>
                    }
                </div>
            }
            <div className={`cards-wrapper ${singleColumn ? 'single' : ''}`}>
                {
                    characters.length > 0 &&
                    characters.map(
                        character =>
                            <Card
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                backImage={character.imageWithName}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default CardGroup