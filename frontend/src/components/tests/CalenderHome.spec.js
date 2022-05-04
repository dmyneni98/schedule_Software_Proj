import React from 'react';
import CalenderHome from '../pages/CalenderHome';
import {cleanup, fireEvent, render} from '@testing-library/react';


// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('test for calendar home file', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CalenderHome />,
  );
  
});