import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const { about } = colors;

const AboutStyle = styled('div')`
  color: ${about.textColor};

  & .about__name {
    text-align: left;
    font-size: 2.5rem;
    margin: 0;

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }

  & .about__short-info {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  & .about__description {
    text-align: left;
    font-size: 1.3rem;

    margin-bottom: 20px;
  }

  & .about__skills {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding-right: 30px;
  }

  & .about__skill {
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: ${about.textColor};

    margin: 5px;
    margin-bottom: 30px;
    flex-basis: 40%;
  }

  & .skill__name {
    display: flex;
    align-items: center;
  
    margin-left: 10px;

    & i {
      font-size: 3rem;
    }
  }

  & .about__download-button {
    font-size: 1.5rem;
  }

  & .skill__icon {
    margin-left: 5px;
  }

  & .skill__icon-image {
    width: 40px;
    height: 40px;
  }
`;

export default AboutStyle;
