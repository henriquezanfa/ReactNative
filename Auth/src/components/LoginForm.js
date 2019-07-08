import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {

    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>

                    <TextInput
                        value={this.state.text}
                        style={{ height: 30, width: 100, fontSize: 20 }}
                        onChangeText={(text => this.state({text }))}
                    />

                </CardSection>

                <CardSection />
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;