import React from 'react';
import {ApolloProvider, useMutation} from "@apollo/client";
import {Col, Container, FormInput, Row, Button} from "shards-react";

import client from "../config/appolloClient";
import {POST_MESSAGE} from "../actions/messages";
import Messages from "./Messages";


const Chat = () => {
    const [state, setState] = React.useState({
        user: "test",
        content: ""
    });
    const [postMessage] = useMutation(POST_MESSAGE);

    const onSend = () => {
        if (state.content.length > 0) {
            postMessage({
                variables: state,
            });
        }
        setState({
            ...state,
            content: ""
        })
    }

    return (
        <Container>
            <Messages user={state.user}/>
            <Row>
                <Col xs={2} style={{padding: 0}}>
                    <FormInput
                        label="Username"
                        value={state.user}
                        onChange={e => setState({
                            ...state,
                            user: e.target.value
                        })}
                    />
                </Col>
                <Col xs={8}>
                    <FormInput
                        pill
                        label="Content"
                        value={state.content}
                        onChange={e => setState({
                            ...state,
                            content: e.target.value
                        })}
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                onSend()
                            }
                        }}
                    />
                </Col>
                <Col xs={2} style={{padding: 0}}>
                    <Button pill block onClick={() => onSend()}>Send Message</Button>
                </Col>
            </Row>
        </Container>
    )
};
export default () => <ApolloProvider client={client}><Chat/></ApolloProvider>
