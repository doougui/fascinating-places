import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Jaguaruna',
          slug: 'jaguaruna',
          location: {
            latitude: 45,
            longitude: -10
          }
        }
      ]}
    />
  )
}
