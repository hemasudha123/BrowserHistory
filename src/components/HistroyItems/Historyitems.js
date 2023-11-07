import './historyitems.css';
export default function Historyitems({ filterditems, state }) {

    const handledelete = (id) => {
        const alldelete = filterditems.filter((eachdelete) => eachdelete.id !== id);
        state(alldelete)
    };


    return (
        <div className='histroy-container'>
            {filterditems.map((eachitem, index) => (
                <div key={index} className='itemsContainer'>
                    <div className='domain-details-container'>
                        <div className='domain-details'>
                            <p className='time-stamp'>{eachitem.timeAccessed}</p>
                            <img src={eachitem.logoUrl} alt="logo-url" className='applofogs' />
                            <p className='title'>{eachitem.title}</p>
                            <p className='dominurl'>{eachitem.domainUrl}</p>
                        </div>
                        <button className='delete-button' type="button" onClick={() => handledelete(eachitem.id)}>
                            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}
