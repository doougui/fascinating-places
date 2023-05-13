import { render, screen } from '@testing-library/react'
import Map from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/'
}))

describe('<Map />', () => {
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Jaguaruna',
      slug: 'jaguaruna',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Tubarão',
      slug: 'tubarao',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/jaguaruna/i)).toBeInTheDocument()
    expect(screen.getByTitle(/tubarão/i)).toBeInTheDocument()
  })
})
