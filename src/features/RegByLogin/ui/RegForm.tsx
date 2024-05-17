import { Form } from '@/shared/ui/Form/ui/Form';
import {
    Button,
    Checkbox,
    Text,
    TextField,
    VStack,
} from '@tr271v0r/ui-tool-kit';
import { FC, memo, useState } from 'react';

export const RegForm: FC = memo(() => {
    const [login, setLogin] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [checkRules, setCheckRules] = useState(false);

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
                <TextField
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    label="Confirm password"
                    limit={128}
                    masked
                />

                <Checkbox
                    id="rules"
                    checked={checkRules}
                    onChange={() => setCheckRules((state) => !state)}
                >
                    <Text>Agree with the rules</Text>
                </Checkbox>
            </VStack>
            <Button fullWidth>
                <Text size="l">Continue</Text>
            </Button>
        </Form>
    );
});
