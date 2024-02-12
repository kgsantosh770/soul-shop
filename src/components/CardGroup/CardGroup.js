
import Card from '../../components/Card/Card';
import './CardGroup.css';

const CardGroup = ({ groupTitle, filters, cards, singleColumn }) => {
    return (
        <div className='cards-container'>
            {
                (groupTitle || filters) &&
                <div className='cards-header'>
                    {groupTitle && <h4 className='heading'>{groupTitle}</h4>}
                    {filters &&
                        <select className='filters'>
                            {
                                filters.map((filter, index) =>
                                    <option key={index} value={filter.toLowerCase()}>
                                        {filter}
                                    </option>)
                            }
                        </select>
                    }
                </div>
            }
            <div className={`cards-wrapper ${singleColumn ? 'single' : ''}`}>
                {
                    cards &&
                    cards.map(
                        character =>
                            <Card
                                key={character.id}
                                id={character.id}
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