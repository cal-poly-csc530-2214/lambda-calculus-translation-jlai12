import {lcc} from '../../src/lcc/lcc';

describe('test lcc', () => {
  it('converts factorial.lc to javascript', async () => {
    const consoleSpy = jest.spyOn(console, 'log');

    // (println (* 5 (* 4 (* 3 2))))
    const factorial = 'tst/test-data/factorial.lc';
    await lcc(factorial);
    expect(console.log).toBeCalledWith('console.log((5 * (4 * (3 * 2))))');
    consoleSpy.mockRestore();
  });

  it('converts tip.lc to javascript', async () => {
    const consoleSpy = jest.spyOn(console, 'log');

    // (println ((/ subtotal => (* (* subtotal 1.08) 0.2)) 100))
    const tip = 'tst/test-data/tip.lc';
    await lcc(tip);
    expect(console.log).toBeCalledWith(
      'console.log(((subtotal => ((subtotal * 1.08) * 0.2))(100)))'
    );
    consoleSpy.mockRestore();
  });
});
