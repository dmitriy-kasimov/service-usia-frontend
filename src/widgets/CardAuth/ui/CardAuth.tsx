import { FC, memo } from 'react';
import { LoginForm } from '@/features/AuthByLogin';
import { AppCard } from '@/shared/ui/AppCard/ui/AppCard';

export const CardAuth: FC = memo(() => {
    return (
        <AppCard>
            <LoginForm />
        </AppCard>
    );
});
