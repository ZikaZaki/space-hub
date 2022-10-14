import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProfilePage from '../ProfilePage/ProfilePage';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ProfilePage />
    </Provider>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render the page container', () => {
  render(
    <Provider store={store}>
      <ProfilePage />
    </Provider>,
  );

  const container = screen.getByTestId('page-container');

  expect(container).toBeInTheDocument();
});
