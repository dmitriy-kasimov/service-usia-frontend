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
        <div
            id="MainLayout"
            className={classNames(cls.MainLayout, {}, [className])}
        >
            <Window
                isOpen={window}
                onClose={closeWindow}
                sidebar={sidebar}
                content={content}
                closable={false}
                // portalElement={document.getElementById('MainLayout')!}
                fullscreen
                lazy
            />
        </div>
    );
});
