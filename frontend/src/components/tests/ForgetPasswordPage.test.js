import ForgetPasswordPage from '../ForgetPasswordPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

 
it('ForgetPassword page render', () => {
  const {} = render(
    <MemoryRouter>
      <ForgetPasswordPage />
     </MemoryRouter> 
  );
});
