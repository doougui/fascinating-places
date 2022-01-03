import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Fascinating Places"
        description="A simple project to show the most riveting places in the entire world."
        canonical="https://fascinating-places.douglasgoulart.com"
        openGraph={{
          url: 'https://fascinating-places.douglasgoulart.com',
          title: 'Fascinating Places',
          description:
            'A simple project to show the most riveting places in the entire world.',
          images: [
            {
              url: 'https://fascinating-places.douglasgoulart.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Fascinating Places'
            }
          ],
          site_name: 'Fascinating Places'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} arial-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
