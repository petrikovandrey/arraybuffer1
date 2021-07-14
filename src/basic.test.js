import * as index from './index';

test('attack stoned', () => {
    const gena = new index.Magician('Gena');
    gena.stoned = true;
    gena.distance = 2;
    gena.attack = 100;
    expect(gena.attack).toBe(85);

});

test('attack not stoned 4', () => {
    const gena = new index.Magician('Gena');
    gena.stoned = false;
    gena.distance = 4;
    gena.attack = 100;
    expect(gena.attack).toBe(60);

});

test('attack not stoned 1', () => {
    const gena = new index.Magician('Gena');
    gena.stoned = false;
    gena.distance = 1;
    gena.attack = 100;
    expect(gena.attack).toBe(100);

});


test('attack not stoned 0', () => {
    const gena = new index.Magician('Gena');
    gena.stoned = false;
    gena.distance = 0;
    gena.attack = 100;
    expect(gena.attack).toBe(100);

});