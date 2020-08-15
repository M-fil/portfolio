import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const { about } = colors;

const AboutStyle = styled('div')`
  color: ${about.textColor};

  & .about__name {
    text-align: left;
    font-size: 2.5rem;
    margin: 0;
  }

  & .about__short-info {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  & .about__description {
    text-align: left;
    font-size: 1.3rem;
  }

  & .about__skills {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    flex-basis: 40%
  }

  & .about__skill {
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: ${about.textColor};

    margin: 5px;
    margin-bottom: 20px;
    flex-basis: 40%;
  }

  & .skill__name {
    margin-left: 10px;
  }

  & .about__download-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 0;
  }

  & .about__download-button {
    font-size: 1.5rem;
  }
`;

export default AboutStyle;
