import React from 'react'
import { render, cleanup } from '@testing-library/react';
import Post from './../Post'

afterEach(cleanup)

it('renders Post component', () => {
    render(<Post />);
})