import styled from 'styled-components'

export const MainContainer = styled.div`
  place-content: center;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 15rem;
  margin-botton: 15rem;
`

export const PlayerCardContainer = styled.div`
  background-color: ${(props) => props.theme['background-player']};

  height: 45rem;
  width: 70rem;

  padding: 5rem;

  border-radius: 1rem;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: espace-between;
  gap: 4.8rem;
`

export const ImageContainer = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;

  border-radius: 0.6rem;
`

export const TitleContainer = styled.div`
  h1 {
    font-size: 4.8rem;
    margin-bottom: 1rem;
  }

  p {
    opacity: 0.67;
    font-size: 3.8rem;
  }
`

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  padding-inline: 9rem;
`

export const TrackContainer = styled.div`
  margin-top: 4rem;
  position: relative;

  ::before {
    content: '';
    height: 1.2rem;
    width: 100%;
    display: block;
    background: ${(props) => props.theme['track-color']};
    opacity: 0.3;
    border-radius: 1rem;

    position: absolute;
  }

  ::after {
    content: '';
    height: 1.2rem;
    width: 80%;
    display: block;
    background: ${(props) => props.theme['track-color']};
    border-radius: 1rem;
  }
`
export const TimeContainer = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme['time-color']}
  opacity: 0.7;

  display: flex;
  justify-content: space-between;

  margin-top: 1.5rem;
`
