import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    FormControl
} from 'react-bootstrap';
import {Collections} from "../Collections";

class Pagination extends Component
{
    render() {
        return (
            <Row>
                <Col sm={9}>
                    <Button> &lt;&lt; </Button>
                    <Button> &lt; </Button>

                    <FormControl type="text"  />

                    <Button> &gt; </Button>
                    <Button> &gt;&gt; </Button>
                </Col>
                <Col sm={3}>
                    <Button> i </Button>
                    <Button> u </Button>
                    <Button> d </Button>
                </Col>
            </Row>
        )
    }
}

export { Pagination }