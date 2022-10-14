import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../Rocket/Rocket';
import RocketList from '../RocketList/RocketList';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketList>
        <Rocket
          id={1}
          name="Falcon 1"
          description="The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009"
          image="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
          reserved={false}
        />
      </RocketList>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <RocketList>
        <Rocket
          id={1}
          name="Falcon 1"
          description="The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009"
          image="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
          reserved={false}
        />
      </RocketList>
    </Provider>,
  );

  const rocket = screen.getByTestId('rocket-list-container');

  expect(rocket).toBeInTheDocument();
});
