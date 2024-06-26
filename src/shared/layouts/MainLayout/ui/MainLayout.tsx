import { FC, ReactElement, memo, useState } from 'react';
import cls from './MainLayout.module.scss';
import { Window, classNames } from '@tr271v0r/ui-tool-kit';

interface MainLayoutProps {
    content: ReactElement;
    sidebar?: ReactElement;

    className?: string;
}

export const MainLayout: FC<MainLayoutProps> = memo((props) => {
    const { content, sidebar, className } = props;

    const [window, setWindow] = useState(true);
    const closeWindow = () => {
        setWindow(false);
    };

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <Window
                isOpen={window}
                onClose={closeWindow}
                sidebar={sidebar}
                content={content}
                closable={false}
                minContentWidth="600px"
                maxContentWidth="600px"
                minContentHeight="800px"
                maxContentHeight="800px"
                lazy
            />
        </div>
    );
});
