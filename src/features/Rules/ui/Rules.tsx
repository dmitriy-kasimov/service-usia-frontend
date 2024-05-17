import { Disclosure, DisclousureItem } from '@tr271v0r/ui-tool-kit';
import React, { memo } from 'react';

export const Rules: React.FC = memo(() => {
    const items: DisclousureItem[] = [
        {
            title: 'Rule #1',
            defaultOpen: true,
            description:
                'The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. ',
        },
        {
            title: 'Rule #2',
            description:
                'The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. ',
        },
        {
            title: 'Rule #3',
            description:
                'The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. ',
        },
        {
            title: 'Rule #4',
            description:
                'The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. ',
        },
        {
            title: 'Rule #5',
            description:
                'The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. The purpose of this rule is just to exist. ',
        },
    ];

    return <Disclosure items={items} />;
});
