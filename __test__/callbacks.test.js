import { callbackHello } from '../callbacks';

describe('Probando un Callback', () => {
    test('Callback', (done) => {
        function otherCallBack(data) {
            expect(data).toBe('Hello javascripters');
            done();
        }
        callbackHello(otherCallBack);
    })
})