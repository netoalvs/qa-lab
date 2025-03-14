const utils = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

describe('Utils Unit Tests', () => {
  it('should add numbers correctly', () => {
    expect(utils.add(1, 2)).to.equal(3);
  });

  it('should subtract numbers correctly', () => {
    expect(utils.subtract(5, 3)).to.equal(2);
  });
});
