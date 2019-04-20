import React, { Component } from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Query extends Component
{
    render() {

        const {
            Label,
            Control
        } = Form

        return (
            <>
                <Row>
                    <Col md="3">
                        <Label>Query :</Label>
                    </Col>
                    <Col>
                        <Control type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <Label>Projection :</Label>
                    </Col>
                    <Col>
                        <Control type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Skip :</Label>
                    </Col>
                    <Col>
                        <Control type="text" />
                    </Col>
                    <Col>
                        <Label>Limit :</Label>
                    </Col>
                    <Col>
                        <Control type="text" />
                    </Col>
                </Row>
            </>
        )
    }
}

export { Query }