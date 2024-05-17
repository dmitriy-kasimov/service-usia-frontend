import { FC, memo } from 'react';
import { RegForm } from '@/features/RegByLogin';
import { AppCard } from '@/shared/ui/AppCard/ui/AppCard';

export const CardReg: FC = memo(() => {
    return (
        <AppCard>
            <RegForm />
        </AppCard>
    );
});
