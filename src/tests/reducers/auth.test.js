import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'abc123';
    const state = authReducer(undefined, { 'type': 'LOGIN', uid });
    expect(state).toEqual({ uid });
});

test('should clear uid for logout', () => {
    const state = authReducer({uid: 'anything'}, { 'type': 'LOGOUT' });
    expect(state).toEqual({ });
});

test('should default to empty object', () => {
    const state = authReducer(undefined, { 'type': '' });
    expect(state).toEqual({ });
});