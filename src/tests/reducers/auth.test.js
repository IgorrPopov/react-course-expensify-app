import authReducer from '../../reducers/auth';

test('the authReducer should return an object if login action has been trigered', () => {
    const action = {
        type: 'LOGIN',
        uid: 'asdfasdf8as0fasdf'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid: action.uid });
});

test('the authReducer should return an object if logout action has been trigerd', () => {
    expect(authReducer(undefined, { type: 'LOGOUT' })).toEqual({});
});