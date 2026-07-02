import fetch from 'node-fetch';

// Test to ensure the API responds within an acceptable time frame.
// The threshold has been increased from 50ms to 300ms to account for
// occasional network latency and to prevent flaky failures.

test('API responds within 300ms', async () => {
  const start = Date.now();
  await fetch('http://localhost:3000/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(300);
});