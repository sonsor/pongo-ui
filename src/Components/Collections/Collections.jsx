import React, { Component } from 'react';
import {
    ListGroup
} from 'react-bootstrap';

class Collections extends Component
{
    render() {
        const { Item } = ListGroup

        return (
            <ListGroup as="ul">
                <Item as="li" active>MoveIn4Course-Course</Item>
                <Item as="li">MoveIn4DereeTyope-DereeTyope</Item>
                <Item as="li">MoveIn4Person-Person</Item>
            </ListGroup>
        )
    }
}

export { Collections }