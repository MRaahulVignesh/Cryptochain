const cryptoHash = require('./cryptoHash');
describe('cryptoHash',()=>{

    it('generate a SHA-256 hashed output',()=>{
        expect(cryptoHash('foo')).toEqual('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b');
    });

    it('produces the same output irrespective of the order of the input arguements',()=>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three','two','one'));
    });
});