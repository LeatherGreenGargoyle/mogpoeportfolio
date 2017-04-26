import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../client/components/App/App'

describe('App', () => {
  it('renders', () => {
    expect(
      shallow(
        <App />,
      ).length,
    ).toEqual(1)
  })
})
