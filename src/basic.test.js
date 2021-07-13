import * as index from './index';

test('attack stoned', () => {
    const gena = new index.Magician('Gena');
    gena.stoned = true;
    gena.distance = 1;
    console.log(gena.attack);
    expect().toBe(175);

});
