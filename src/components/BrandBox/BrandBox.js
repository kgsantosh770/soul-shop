import './BrandBox.css';

const BrandBox = ({ boxtitle, brands, showNames = false }) => {
    return (
        <div className="brand-box">
            {boxtitle && <p className="title">{boxtitle}</p>}
            {brands && brands.length > 0 &&
                <ul className='brands'>
                    {
                        brands.map((brand, index) => (
                            <li key={index}>
                                <img alt={brand.name} title={brand.name} src={brand.image} />
                                {showNames && <p className="brand-name">{brand.name}</p>}
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default BrandBox