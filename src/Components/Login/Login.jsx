import React, { Component } from 'react';
import {
    Modal,
    Button,
    Form,
    Row,
    Col
} from 'react-bootstrap'

class Login extends Component
{
    render() {

        const {
            Dialog,
            Header,
            Title,
            Body,
            Footer
        } = Modal

        const {
            Group,
            Control
        } = Form

        return (
            <Form>
                <Dialog aria-labelledby="contained-modal-title-vcenter" centered>
                    <Header>
                        <Title>Connection Details</Title>
                    </Header>
                    <Body>

                        <Row>
                            <Col md="8">
                                <Group>
                                    <Control type="text" placeholder="Host" />
                                </Group>
                            </Col>
                            <Col>
                                <Group>
                                    <Control type="number" placeholder="Port" value="27017" />
                                </Group>
                            </Col>
                        </Row>

                        <Group>
                            <Control type="text" placeholder="User Name" />
                        </Group>

                        <Group>
                            <Control type="password" placeholder="Password" />
                        </Group>

                        <Group>
                            <Control type="text" placeholder="Database Name" />
                        </Group>

                    </Body>

                    <Footer>
                        <Button variant="primary">Connect</Button>
                    </Footer>
                </Dialog>
            </Form>
        )
    }
}

export { Login }