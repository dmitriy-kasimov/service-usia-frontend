import { PostType, Tape, Text } from '@tr271v0r/ui-tool-kit';
import { memo } from 'react';

export const TapeNews: React.FC = memo(() => {
    const tapePosts: PostType[] = [
        {
            id: '1',
            title: 'The born of idea',
            subtitle: '04/11/2023',
            description: (
                <Text>
                    The idea to create this project had borned on the 11th of
                    April.
                </Text>
            ),
        },
        {
            id: '2',
            title: 'The first steps',
            subtitle: '04/12/2023',
            description: (
                <Text>
                    The main developer had started to work on the concept of
                    this project.{' '}
                </Text>
            ),
        },
        {
            id: '3',
            title: 'USIA',
            subtitle: '05/16/2024',
            description: (
                <Text>
                    The united system identitication and authentication (USIA)
                    is activity developing. Due to you can to read this news!
                </Text>
            ),
        },
        {
            id: '4',
            title: 'The born of idea',
            subtitle: '04/11/2023',
            description: (
                <Text>
                    The idea to create this project had borned on the 11th of
                    April.
                </Text>
            ),
        },
        {
            id: '5',
            title: 'The first steps',
            subtitle: '04/12/2023',
            description: (
                <Text>
                    The main developer had started to work on the concept of
                    this project.{' '}
                </Text>
            ),
        },
        {
            id: '6',
            title: 'USIA',
            subtitle: '05/16/2024',
            description: (
                <Text>
                    The united system identitication and authentication (USIA)
                    is activity developing. Due to you can to read this news!
                </Text>
            ),
        },
        {
            id: '7',
            title: 'The born of idea',
            subtitle: '04/11/2023',
            description: (
                <Text>
                    The idea to create this project had borned on the 11th of
                    April.
                </Text>
            ),
        },
        {
            id: '8',
            title: 'The first steps',
            subtitle: '04/12/2023',
            description: (
                <Text>
                    The main developer had started to work on the concept of
                    this project.{' '}
                </Text>
            ),
        },
        {
            id: '9',
            title: 'USIA',
            subtitle: '05/16/2024',
            description: (
                <Text>
                    The united system identitication and authentication (USIA)
                    is activity developing. Due to you can to read this news!
                </Text>
            ),
        },
    ];
    return (
        <Tape
            header={<Text size="xl">The latest news</Text>}
            posts={tapePosts}
        />
    );
});
