import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


function ServiceSelectionType(props) {
    return (
        <>
            <Card.Body className="m-0">
            <Row className="align-items-center">
                <Col xs={1}>
                    <img src={props.image} height='90px' width='90px' />
                </Col>
                <Col xs={4}>
                    <Card.Title
                        style={{
                            fontFamily: 'Poppins, san-serif',
                            fontWeight: '600',
                            color: '#414141'
                        }}>
                        {props.title}
                    </Card.Title>
                    <Card.Text
                        style={{
                            fontFamily: 'Poppins, san-serif',
                            fontWeight: '400',
                            color: '#414141'
                        }}
                    >
                        {props.description}
                    </Card.Text>
                    <Card.Text
                        style={{
                            fontFamily: 'Poppins, san-serif',
                            fontWeight: '400',
                            fontSize: '16px',
                            color: '#979696'
                        }}>
                        {props.averagePrice}
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>

        </>
    );
}

export default ServiceSelectionType;