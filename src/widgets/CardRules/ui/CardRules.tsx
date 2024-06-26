import { Rules } from '@/features/Rules';

import { memo } from 'react';
import { Card } from '@tr271v0r/ui-tool-kit';

export const CardRules: React.FC = memo(() => {
    return (
        <Card
            contentMargin={'s'}
            style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                backdropFilter: 'blur(5px)',
            }}
        >
            <Rules />
        </Card>
    );
});
