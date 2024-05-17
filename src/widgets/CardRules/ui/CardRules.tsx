import { Rules } from '@/features/Rules';
import { AppCard } from '@/shared/ui/AppCard/ui/AppCard';
import { memo } from 'react';

export const CardRules: React.FC = memo(() => {
    return (
        <AppCard>
            <Rules />
        </AppCard>
    );
});
