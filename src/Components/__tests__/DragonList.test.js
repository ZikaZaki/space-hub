import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragon from '../Dragon/Dragon';
import DragonList from '../DragonList/DragonList';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <DragonList>
        <Dragon
            id="dragon1"
            name="Dragon 1"
            description="Dragon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009"
            image="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
            reserved={false}
        />
      </DragonList>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <DragonList>
        <Dragon
            id="dragon1"
            name="Dragon 1"
            description="Dragon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009"
            image="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
            reserved={false}
        />
      </DragonList>
    </Provider>,
  );

  const dragon = screen.getByTestId('dragon-list-container');

  expect(dragon).toBeInTheDocument();
});
