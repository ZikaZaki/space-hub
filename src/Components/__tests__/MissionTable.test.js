import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../Mission/Mission';
import MissionTable from '../MissionTable/MissionTable';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionTable>
        <Mission
          id="9D1B7E0"
          name="FalconSat"
          description="The FalconSat is an American nanosatellite built by SpaceX"
          joined={false}
        />
      </MissionTable>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <MissionTable>
        <Mission
          id="9D1B7E0"
          name="FalconSat"
          description="The FalconSat is an American nanosatellite built by SpaceX"
          joined={false}
        />
      </MissionTable>
    </Provider>,
  );

  const mission = screen.getByTestId('missions-container');

  expect(mission).toBeInTheDocument();
});
