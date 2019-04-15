import React, { Component } from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import { Collections } from '../Collections';
import { Builder } from '../Builder';

class Main extends Component
{
    render() {
        return(
            <>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Collections/>
                    </Col>
                    <Col md="8">
                        <Builder/>
                    </Col>
                </Row>
            </>
        )
    }
}
export { Main }
