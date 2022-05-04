import LoginPage from '../LoginPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

 
it('Login page render', () => {
  const {} = render(
    <MemoryRouter>
      <LoginPage />
     </MemoryRouter>
  );
});
