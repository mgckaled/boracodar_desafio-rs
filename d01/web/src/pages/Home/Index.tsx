import * as S from './styles'

import PlayBackIconSvg from '../../assets/play-back.svg'
import PlayForwardIconSvg from '../../assets/play-forward.svg'
import PlayIconSvg from '../../assets/play.svg'

export function Home () {
  return (
    <S.MainContainer>
      <S.PlayerCardContainer>
        <S.InfoContainer>
          <S.ImageContainer
            src='https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            alt='Capa do cd Rockeseat - Single - Acorda Devinho'
          />
          <S.TitleContainer>
            <h1>Acorda Devinho</h1>
            <p>Banda Rockeseat</p>
          </S.TitleContainer>
        </S.InfoContainer>
        <S.ControlsContainer>
          <img src={PlayBackIconSvg} width={50} height={50}></img>
          <img src={PlayIconSvg} width={50} height={50}></img>
          <img src={PlayForwardIconSvg} width={50} height={50}></img>
        </S.ControlsContainer>
        <S.TrackContainer></S.TrackContainer>
        <S.TimeContainer>
          <div className='total-time'>03:20</div>
          <div className='last-time'>00:12</div>
        </S.TimeContainer>
      </S.PlayerCardContainer>
    </S.MainContainer>
  )
}
