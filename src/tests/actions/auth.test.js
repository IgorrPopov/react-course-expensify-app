import { login, logout } from '../../actions/auth';

test('login action should return valid object', () => {
    const uid = 'adsfj;alsdfasdf';
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('logout action should return valid object', () => {
    const uid = 'adsfj;alsdfasdf';
    expect(logout()).toEqual({
        type: 'LOGOUT',
    });
});