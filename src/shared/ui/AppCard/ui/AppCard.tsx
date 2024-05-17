import { Card } from '@tr271v0r/ui-tool-kit';
import React, { memo } from 'react';

interface AppCard {
    children: React.ReactNode;
}

export const AppCard: React.FC<AppCard> = memo((props) => {
    return <Card padding="m">{props.children}</Card>;
});
