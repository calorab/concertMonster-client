import React from 'react';
import {shallow, mount} from 'enzyme';
import spyOn from 'spyon';

import FollowedArtists from './FollowedArtists';
import Input from '../../Components/UI/Input/Input';
import Adapter from '../../setupTests';


describe('<SearchArtists />', () => {
    it('Renders without crashing', () => {
        shallow(<FollowedArtists />);
    });

    // it('Should NOT call submitHandler without entering input', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<SearchArtists submitHandler={callback}/> );
    //     wrapper.find('.testing3').simulate('click');
    //     expect(callback).toHaveBeenCalledTimes(0);
    // });
    // // HELP - can't get "value" from component - when I change from submit to click changes error
    // it('Should call submitHandler when search submitted', () => {
    //     const wrapper = mount(<SearchArtists event={() => {}}/> );
    //     const spy =  jest.spyOn(wrapper.instance(), 'submitHandler');
    //     wrapper.find('.testing3').simulate('submit');
    //     expect(spy).toHaveBeenCalledTimes(1);
    // });

    // test onAddArtist when results from submitHandler return and button clicked
    // it('should call onAddArtist when result return from search')
});