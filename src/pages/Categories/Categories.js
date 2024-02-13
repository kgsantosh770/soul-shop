import { characters } from "../../utils/constants";
import CardGroup from "../../components/CardGroup/CardGroup";

const Categories = () => {
    return (
        <>
            <div className="banner-text" style={{marginTop: '110px'}}>
                <p>Discover AI - Generated</p>
                <p className="highlight">Characters for Virtual</p>
                <p>Companionship and Friendship</p>
            </div>
            <CardGroup
                groupTitle='Characters'
                cards={characters}
                filters={['Popular', 'Most view']}
            />
        </>
    )
}

export default Categories