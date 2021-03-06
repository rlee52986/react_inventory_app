import { render, cleanup, waitFor, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

import Activities from '../views/Activities';

beforeAll(() => jest.spyOn(window, 'fetch'));

afterEach(cleanup); 

describe("Activities", () => {
    test("fetches data from the API and displays it", async () => {
        const data = [
            { name: 'reptar', "11/11/2020", description: 'Lorem Upsum' }
        ]
        const mockReq = window.fetch.mockResolvedValueOnce({
            json: () => ({
                data: data
            })
        })

        mockReq()

        render(<Activities />)

        const renderedData = await waitFor(() => screen.getByText('Date: 11/11/2020'));

        expect(renderedData).toBeInTheDocument()
    })
})
