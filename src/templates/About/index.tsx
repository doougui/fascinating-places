import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        totam dolor harum illo. Fugiat corrupti sunt natus itaque facilis fugit
        odit error consectetur numquam. Libero, laboriosam. Dolores minus magnam
        sapiente.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
