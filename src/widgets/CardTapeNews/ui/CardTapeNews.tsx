import { TapeNews } from '@/features/TapeNews';
import { AppCard } from '@/shared/ui/AppCard/ui/AppCard';
import { memo } from 'react';

export const CardTapeNews: React.FC = memo(() => {
    return (
        <AppCard>
            <TapeNews />
        </AppCard>
    );
});
