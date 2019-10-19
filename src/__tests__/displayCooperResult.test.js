import React from 'react';
import { shallow } from 'enzyme';

import DisplayCooperResult from '../Components/DisplayCooperResult';
import DisplayCooperChart from '../Components/DisplayCooperChart';

describe('<DisplayCooperResult />', () => {
  it('evaluates the correct result for female/poor', () => {
    const describedComponent = shallow(<DisplayCooperResult distance="1000" gender="female" age="23"/>);
    const response = <p>Result: Poor</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('evaluates the correct result for female/average', () => {
    const describedComponent = shallow(<DisplayCooperResult distance="2000" gender="female" age="23"/>);
    const response = <p>Result: Average</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })

  describe('<DisplayCooperChart />', () => {
    it('evaluates the correct chart for female/poor', () => {
      const describedComponent = shallow(<DisplayCooperChart distance="1000" gender="female" age="23"/>);
      const response = <p>Chart x: Poor</p>
      expect(describedComponent.contains(response)).toEqual(true)
    })

    it('evaluates the correct chart for female/average', () => {
      const describedComponent = shallow(<DisplayCooperChart distance="2000" gender="female" age="23"/>);
      const response = <p>Chart x: Average</p>
      expect(describedComponent.contains(response)).toEqual(true)
    })
  })
})
