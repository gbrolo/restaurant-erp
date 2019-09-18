import React from 'react'
import { render } from 'react-testing-library'
import ListUserComponent from '../ListUserComponent'

const user = {
    userId: '1fmmrx1d1QaWYKsP0vhglCNISjm2',
    userEmail: 'bar15800@uvg.edu.gt',
    userName: 'Rodrigo',
    userPermissions: ['all-access']
}

describe('<ListUserComponent />', () => {
    it('renders the ListUserComponent component and matches snapshot', async () => {
        const { container } = await render(
            <ListUserComponent 
                user={user}
            />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})