import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CardSubtitle, CardText } from 'reactstrap';
import ServiceSelectionType from '../ServiceSelectionType';

function ServiceSelectionRow(props) {
    return (
        <>
            <Card
                className="shadow-none"
                style={{ borderBottom: "2px solid #dee2e6" }}>
                <Row>
                    <Col xs={11}>
                    <ServiceSelectionType
                        image={props.image}
                        title={props.title}
                        description={props.description}
                        averagePrice={props.averagePrice} 
                      />
                        </Col>
                        <Col xs={1}>
                         radio butotn here
                        </Col>
                </Row>
            </Card>
        </>
    );
}

export default ServiceSelectionRow;