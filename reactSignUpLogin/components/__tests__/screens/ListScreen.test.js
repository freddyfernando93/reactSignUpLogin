import React from 'react';
import renderer from 'react-test-renderer';

import ListScreen from '../../../screens/ListScreen';

describe('<ListScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ListScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
