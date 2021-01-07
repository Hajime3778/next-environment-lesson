import { render, screen } from '@testing-library/react';
import { Header } from 'src/components/Header';

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<Header title="Title" />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render title only', () => {
    render(<Header title="Title" />);
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.queryByText('+')).toBeNull();
  });

  it('Should render register button', () => {
    render(<Header title="Title" visibleRegister={true} />);
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.getByText('+')).toBeTruthy();
  });
});