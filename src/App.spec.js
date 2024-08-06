import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test('Verify the title', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('Signup Today!');
});

//TODO: Add additional test

