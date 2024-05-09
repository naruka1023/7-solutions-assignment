import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {mockData, mockResult} from '../src/app/todoData'
import {aggregateData} from '../src/app/getData'
 
describe('Page', () => {
  it('test if aggregated data is correct', () => {
    expect(aggregateData((mockData))).toEqual(mockResult)
  })
})