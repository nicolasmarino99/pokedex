import React from 'react';
import {render, cleanup, waitForElement} from "@testing-library/react";
import UsePokemonSearch from './UsePokemonSearch';
import '@testing-library/jest-dom';

afterEach(cleanup)

it('fetches images and info from pokeapi and renders them in a card', async () => {
    const q = {name: "pika"}
    const { getByTestID } = render(<UsePokemonSearch query={q} />)

    expect(getByTestID('loading-div')).toHaveTextContent('Loding...')
})