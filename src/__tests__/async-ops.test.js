const { processBatch } = require('../src/batchProcessor');

describe('batch processing', () => {
  test('processes all items', async () => {
    const items = Array.from({ length: 10 }, (_, i) => i);
    const results = await Promise.all(items.map(item => processBatch(item)));
    expect(results).toHaveLength(10);
  });
});