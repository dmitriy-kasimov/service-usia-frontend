import { FC, memo, useState } from 'react';
import { Button, Text, TextField, VStack } from '@tr271v0r/ui-tool-kit';
import { Form } from '@/shared/ui/Form/ui/Form';
import { onAuthByLogin } from '../model/services/onAuthByLogin';

export const LoginForm: FC = memo(() => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = () => {
        onAuthByLogin(login, password);
    };

    return (
        <Form>
            <VStack gap="s">
                <TextField
                    value={login}
                    onChange={setLogin}
                    label="Login"
                    limit={32}
                />

                <TextField
                    value={password}
                    onChange={setPassword}
                    label="Password"
                    limit={128}
                    masked
                />
            </VStack>
            <Button fullWidth onClick={onLoginClick}>
                <Text size="l">Play</Text>
            </Button>
        </Form>
    );
});
