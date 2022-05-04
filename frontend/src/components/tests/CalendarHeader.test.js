import { CalendarHeader } from "../../CalendarHeader";
// import { shallow } from 'enzyme';

//   describe("MyComponent", () => {
//     it("should render my component", () => {
//         const wrapper = shallow(<CalendarHeader />);
//     });
//   });
  import {cleanup, fireEvent, render} from '@testing-library/react';


// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('test for calendar header file', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CalendarHeader />,
  );

//   expect(queryByLabelText(/off/i)).toBeTruthy();

//   fireEvent.click(getByLabelText(/off/i));

//   expect(queryByLabelText(/on/i)).toBeTruthy();
});