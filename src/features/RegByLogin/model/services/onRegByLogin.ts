import { post } from '@/shared/api/post';

export const onRegByLogin = (
    login: string,
    password: string,
    confirmPassword: string,
    isCheckRules: boolean,
) => {
    post('f:c:onRegByLogin', login, password, confirmPassword, isCheckRules);
};
