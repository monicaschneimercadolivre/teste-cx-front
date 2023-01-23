import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Searchs from './Searchs'
import Details from './Details'


function Home() {
    const [isDetail, setIsDetail] = useState(false)
    const [isSearch, setIsSearch] = useState(true)
    const [search, setSearch] = useState([])
    const [item, setItem] = useState([])
    const [selectedItem, setSelectedItem] = useState({})
    
    const tabs = [
        {
            id: 'searchs',
            component: <Searchs search={search} item={item} isSearch={isSearch} setIsDetail={setIsDetail} setIsSearch={setIsSearch} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
            shouldRender: isSearch
        },
        {
            id: 'details',
            component: <Details item={item} isDetail={isDetail} setIsDetail={setIsDetail} selectedItem={selectedItem}/>,
            shouldRender: isDetail
        }
    ]

    return (
        <Container >
            <Navbar search={search} setSearch={setSearch} item={item} setItem={setItem} setIsDetail={setIsDetail} setIsSearch={setIsSearch}/>
            {tabs.filter((tab) => tab.shouldRender).map((tab) => (
                    tab.id,
                    tab.component
               
                ))}  
        </Container>
    )

}

export default Home;