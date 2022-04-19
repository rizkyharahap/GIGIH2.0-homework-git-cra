import { render } from '@testing-library/react';
import Description from './index';

describe('Track Item', () => {
  test('should render h1 as a title', () => {
    const { getByRole } = render(
      <Description title="Title" artist="Artist" year={2020} duration="3:00" />,
    );

    expect(getByRole('heading')).toHaveTextContent(/Title/i);
  });

  test('should render p as a description from artist, year and duration', () => {
    const { getByText } = render(
      <Description title="Title" artist="Artist" year={2020} duration="3:00" />,
    );

    expect(getByText(/Artist/i)).toBeInTheDocument();
    expect(getByText(/2020/i)).toBeInTheDocument();
    expect(getByText(/3:00/i)).toBeInTheDocument();
  });
});
