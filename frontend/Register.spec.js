import RegisterPage from '../RegisterPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

 
it('Register Page page render', () => {
  const {} = render(
    <MemoryRouter>
      <RegisterPage />
     </MemoryRouter>
  );
});
