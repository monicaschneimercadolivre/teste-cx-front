import React from 'react';
import { Input, Space } from 'antd';
import { Menu } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'antd';
import logo from '../images/meliimage.png';
import api from "../services/api"
import debounce from 'debounce'
import { AutoComplete } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { findItemByName } from '../utils'
const PropTypes = require('prop-types');


const Navbar = ({search, setSearch, item, setItem, locale, setLocale, setIsSearch, setIsDetail}) => {
    
    const [autoCompleteValues, setAutoCompleteValues] = useState({
        title: '',
        price: null,
        picture: null
    });

    const searchItems = useCallback(
 
        debounce((value) => {
            // setAutoCompleteValues(()=>({
            //     title: ''
            // }))
            setIsDetail(false)
            setIsSearch(true)
            api.get('/items', { params: { search: value } })
                .then((response) =>{
                const options =  response.data.map((item)=> item.items) || []; 
                setAutoCompleteValues(() => ({items: options }))
                setSearch(response.data)
                setItem(response.data.map((item)=> item.items))
                setLocale(search.map((locale)=> locale.author.locale))
              
            })
        }, 500)
        , [])

    return (
        <>
            <Menu style={{ backgroundColor: 'yellow' }}>
                <Row style={{ display: 'grid', margin: '0 10rem', gridTemplateColumns: '3fr 8fr' }}>
                    <Col style={{ textAlign: 'end', alignSelf: 'center' }}>
                        <Image
                            preview={{ visible: false }}
                            width={50}
                            src={logo}
                        />
                    </Col>
                    <Col style={{}}>
                        <AutoComplete
                            //onSelect={select}
                            options={autoCompleteValues.title}
                            filterOption={true}
                            onSearch={searchItems}
                        >
                            <Space
                                direction="vertical"
                                style={{ display: 'flex', width: '100%', padding: '0', textAlign: 'start', paddingLeft: '2rem', verticalAlign: 'middle', height: '10vh', justifyContent: 'center' }}>
                                <Input.Search
                                    placeholder="Nunca dejes de buscar"
                                    onChange={(event) => {
                                        setAutoCompleteValues(event.target.value);
                                    }
                                    }
                                    style={{ width: '77vw' }}
                                />
                            </Space>
                        </AutoComplete>
                    </Col>
                </Row>
            </Menu>
        </>
    )

}

Navbar.prototypes = {
    search: PropTypes.shape([]),
    setSearch: PropTypes.func.isRequired,
    item: PropTypes.shape([]),
    setItem: PropTypes.func.isRequired,
    locale: PropTypes.shape([]),
    setLocale: PropTypes.func.isRequired,
    setIsSearch: PropTypes.func.isRequired,
    setIsDetail: PropTypes.func.isRequired,
}

export default Navbar;