import React from 'react'
import { render } from 'react-testing-library'
import ReceiptComponent from '../ReceiptComponent'

const receipt = {
    id: 'uRiL30MvGKG6fh9ERXSJ',
    name: 'Kafka',
    nit: '319823-9',
    address: 'Guatemala',
    date_created: {
        seconds: 100000000000
    },
    receiptItems: [
        { id: '6Wukpz6leyWxig1DPa9P', quantity: 2 },
        { id: 'JGyMjYUoi1ierSYpbZLx', quantity: 3 }
    ],
    total: 115
}

describe('<ReceiptComponent />', () => {
    it('renders the ReceiptComponent component and matches snapshot', async () => {
        const { container } = await render(
            <ReceiptComponent 
                receipt={receipt}
            />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})