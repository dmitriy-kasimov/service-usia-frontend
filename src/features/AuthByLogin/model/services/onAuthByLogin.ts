import { post } from '@/shared/api/post';

export const onAuthByLogin = (login: string, password: string) => {
    post('f:c:onAuthByLogin', login, password);
};
