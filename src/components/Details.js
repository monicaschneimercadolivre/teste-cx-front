import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'antd';
import { Button, Typography } from 'antd';
const { Text } = Typography;


function Details({ isDetail, selectedItem }) {


    return (
        <>
            {isDetail && (
                <Container style={{ margin: '3rem 10rem', backgroundColor: 'white', height: '100vh' }}>
                    <Row style={{ display: 'grid', gridTemplateColumns: '6fr 3fr' }} >
                        <Col style={{ textAlign: 'center' }}>
                            <h1 style={{ height: '40rem' }}>photo</h1>
                            <Card style={{display:'flex', boxShadow:'none'}} bordered={false}>
                                <h2 style={{ fontWeight: '500' }}>Descripción del producto</h2>
                                <Text type="secondary" style={{aligItems:'initial'}}>{selectedItem.description}</Text>
                            </Card>
                        </Col>
                        <Col >
                            <Card bordered={false}>
                                <Text type="secondary">{selectedItem.condition}:{selectedItem.stock} en stock</Text>
                                <h2>{selectedItem.title}</h2>
                                <h1 style={{ fontQeigth: 400 }}>{selectedItem.price.currency + ' ' + selectedItem.price.amount + ',' + selectedItem.price.decimals}</h1>
                                <Button type="primary" size={'large'} style={{ width: '100%' }}>
                                    Comprar
                                </Button>
                            </Card>

                        </Col>
                    </Row>
                </Container>

            )}
        </>

    )

}

export default Details;