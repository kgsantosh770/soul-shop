import { characters } from "../../features/utils/constants";
import CardGroup from "../../components/CardGroup/CardGroup";
import Banner from "../../components/Banner/Banner";

const Categories = () => {
    return (
        <>
            <Banner
                beforeHighlightText="Discover AI - Generated"
                highlightText="Characters for Virtual"
                afterHighlightText="Companionship and Friendship"
                style={{marginTop: '90px'}}
            />
            <CardGroup
                groupTitle='Characters'
                cards={characters}
                filters={['Popular', 'Most view']}
                showOptions={true}
                singleColumn={true}
            />
            <Banner
                beforeHighlightText="More Characters"
                highlightText="Coming Soon ..."
            />
        </>
    )
}

export default Categories