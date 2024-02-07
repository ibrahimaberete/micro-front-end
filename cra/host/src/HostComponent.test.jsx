// HostLandingPage.test.js
import { render, screen, test} from 'vitest';
import HostLandingPage from './HostLandingPage';
import React from 'react';

test('renders HostLandingPage with correct content', async () => {
  render(<HostLandingPage />);

  // Assert Header is rendered
  expect(screen.getByText('Header')).toBeInTheDocument();

  // Assert Host Component is rendered with the correct title
  expect(screen.getByText('Host Component Title')).toBeInTheDocument();

  // Assert Remote Button is rendered
  expect(await screen.findByText('Remote Button')).toBeInTheDocument();

  // Assert Footer is rendered
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
