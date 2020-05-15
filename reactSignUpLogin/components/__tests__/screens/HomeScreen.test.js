import React from 'react';
import renderer from 'react-test-renderer';

import SignUpScreen from '../../../screens/SignUpScreen';

describe('<SignUpScreen />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<SignUpScreen />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});
