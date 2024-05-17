import { Suspense } from 'react';
import './styles.css';

import AppRouter from './providers/router/ui/AppRouter';
import { AppSidebar } from '@/widgets/AppSidebar';
import { MainLayout } from '@/shared/layouts/MainLayout';

export const App = () => {
    return (
        <div className="App">
            <Suspense fallback="Suspense Loading...">
                <MainLayout content={<AppRouter />} sidebar={<AppSidebar />} />
            </Suspense>
        </div>
    );
};
