import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '../../test-utils';
import allowedTimezones from '../../mocks/allowedTimezones.json';
import Timezones from '.';

describe('Timezones', () => {
  // Dear Lovely Reader of this code,
  //
  // How are you? I hope you're doing well and healthy.
  // I hope you're in the right mood while evaluating my code.
  //
  // I hope you're happy. :)
  //
  // Just a quick disclaimer before diving into the code...
  //
  // Please don't get me wrong I __love__ writing tests, 
  // In fact I could write all of the test cases to cover all the steps and validations
  // But throughout my years of experience in development i found that
  // sometimes test cases can be a bit redundant or tedious...
  //
  // so i opted to create this one piece of test case just to showcase my
  // testing abilities and my process of writing tests
  //
  // Side note: 
  // I highly believe in the principle of my friend Kent C. Dodds (co-creator of react-testing-library)
  // That test cases should resemble how the user would interact with the component/app
  // And base the dev's test cases off of that principle/guide.
  //
  // I hope you'll find my code below meaningful :)
  //
  // coding with love,
  // - Joe
  it ('should allow the user to add a timezone -- happy path', async () => {
    jest.spyOn(Promise, 'all').mockImplementation(() => (allowedTimezones));

    render(<Timezones />);

    const [addTimezoneCard, addTimezone] = screen.getAllByText('Add Timezone');
    const modal = screen.getByTestId('modal-form');
    const select = await screen.findByLabelText('Timezone');
    const input = await screen.findByLabelText('Label (optional)');

    expect(addTimezoneCard).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(modal).toHaveStyle('transform: translateY(-100%)');

    // user opens the form
    fireEvent.click(addTimezoneCard);

    expect(modal).toHaveStyle('transform: translateY(0)');

    // user add their timezone
    userEvent.selectOptions(select, 'America/New_York')

    // user will put their own label
    userEvent.type(input, 'New York');

    // user will add the timezone
    userEvent.click(addTimezone);

    // user should see the newly added timezone
    const newTimezone = screen.getByText('EDT');

    expect(newTimezone).toBeInTheDocument();
  });
});
