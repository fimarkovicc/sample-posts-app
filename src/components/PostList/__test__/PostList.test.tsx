import React from 'react'
import { render, cleanup } from '@testing-library/react';
import PostList from './../PostList'

afterEach(cleanup)

it('renders PostList component', () => {
    render(<PostList />);
})