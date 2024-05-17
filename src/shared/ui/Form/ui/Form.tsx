import { VStack } from '@tr271v0r/ui-tool-kit';
import { memo } from 'react';

interface FormProps {
    children?: React.ReactNode;
}

export const Form: React.FC<FormProps> = memo((props) => {
    return (
        <form>
            <VStack gap="l">{props.children}</VStack>
        </form>
    );
});
