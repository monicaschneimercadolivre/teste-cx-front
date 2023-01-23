import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button, Typography } from 'antd';
import { v4 } from 'uuid'
import { NoStyleItemContext } from 'antd/es/form/context';
const PropTypes = require('prop-types');
const { Text } = Typography;


function Searchs({ search, item, setItem, setIsSearch, setIsDetail, isSearch, setSelectedItem, selectedItem }) {

    const verDetalhes = (item, flag) => {
        if (flag) {
            setSelectedItem(item)
            setIsDetail(flag)
            setIsSearch(false)
        } return null
    }


    return (
        <Container style={{ margin: '3rem 10rem', backgroundColor: 'white', height: '100vh' }}>
            <Card >
                {search && item.map((item) => (
                    <Row key={item._id} style={{ display: 'grid', gridTemplateColumns: '3fr 6fr 3fr' }} >
                        <Col style={{marginBottom :'1rem', marginTop :'1rem'}} >
                            <Text>image</Text>
                        </Col>
                        <Col >
                            <Row style={{marginBottom :'1rem', marginTop :'1rem'}}>
                                <Text>{item.price.currency + ' ' + item.price.amount + ',' + item.price.decimals}</Text>
                            </Row>
                            <Row>
                                <Text type="secondary" >{item.description}</Text>
                            </Row>
                        </Col>
                        <Col >
                            <Row style={{marginBottom :'1rem', marginTop :'1rem'}}>
                                <Text>{item.locale}</Text>
                            </Row>
                            <Row>
                            <Button
                                onClick={() => verDetalhes(item, true)}
                            >
                                Ver detalhes
                            </Button>
                            </Row>
                        </Col>
                    </Row>
                ))}
            </Card>
        </Container>
    )
}

Searchs.prototypes = {
    search: PropTypes.shape([]),
    item: PropTypes.shape([]),
    setIsDetail: PropTypes.func.isRequired,
    setIsSearch: PropTypes.func.isRequired,
    selectedItem: PropTypes.shape({}),
    setSelectedItem: PropTypes.func.isRequired
}

export default Searchs;