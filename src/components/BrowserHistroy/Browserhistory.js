import React, { useState, useEffect } from 'react'
import './Browserhistory.css'
import Historyitems from '../HistroyItems/Historyitems';

const initialItems = [
    {
        id: 0,
        timeAccessed: '07:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
        title: 'Instagram',
        domainUrl: 'instagram.com',
    },
    {
        id: 1,
        timeAccessed: '05:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
        title: 'Twitter. It’s what’s happening / Twitter',
        domainUrl: 'twitter.com',
    },
    {
        id: 2,
        timeAccessed: '04:35 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
        title: 'Facebook – log in or sign up',
        domainUrl: 'facebook.com',
    },
    {
        id: 3,
        timeAccessed: '04:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
        title: 'LinkedIn: Log In or Sign Up',
        domainUrl: 'linkedin.com',
    },
    {
        id: 4,
        timeAccessed: '04:00 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
        title: 'Hashnode: Everything you need to start blogging as a developer!',
        domainUrl: 'hashnode.com',
    },
    {
        id: 5,
        timeAccessed: '03:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
        title: 'GitHub: Where the world builds software · GitHub',
        domainUrl: 'github.com',
    },

    {
        id: 6,
        timeAccessed: '02:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
        title: 'React – A JavaScript library for building user interfaces',
        domainUrl: 'reactjs.org',
    },
    {
        id: 7,
        timeAccessed: '01:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
        title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
        domainUrl: 'stackoverflow.com',
    },

    {
        id: 8,
        timeAccessed: '09:25 AM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
        title: 'Gmail',
        domainUrl: 'mail.google.com',
    },
    {
        id: 9,
        timeAccessed: '09:00 AM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
        title: 'Google',
        domainUrl: 'google.com',
    },

]

export default function Browserhistory() {
    const [searchValue, setSearchvalue] = useState('');
    const [filteredHistoryList, setFilteredHistoryList] = useState([]);
    const [items, setitems] = useState(initialItems);

    const handleSearch = (e) => {
        const inputvalue = e.target.value;
        setSearchvalue(inputvalue)

        const text = items.filter((eachfilter) =>
            eachfilter.title.toLowerCase().includes(inputvalue.toLowerCase())
        );

        setFilteredHistoryList(text)

    };

    useEffect(() => {
        setFilteredHistoryList(items)
    }, [items])

    return (
        <div className='Browser-Container'>
            <div className='Browser-history-header'>
                <div className='header'>
                    <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="app-logo" className='app-logo' />
                    <div className='browser-search'>
                        <div className='broweser-search-container'>
                            <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" className='search' />
                        </div>
                        <div className='search-container'>
                            <input type="text" placeholder='Search history' value={searchValue} onChange={handleSearch} className='search-input' />
                        </div>
                    </div>
                </div>
            </div>
            {filteredHistoryList.length === 0 ? (
                <p>There is no history to show</p>
            ) : (
                <div className='history-container'>
                    <Historyitems filterditems={filteredHistoryList} state={setitems} />
                </div>
            )}
        </div>
    )
}
