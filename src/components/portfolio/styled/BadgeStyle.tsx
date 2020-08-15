import styled from 'styled-components';

interface IBadgeStyle {
  childrenCount?: number;
}

const BadgeStyle = styled('div')<IBadgeStyle>`
  & .project__badges {
    display: flex;
    justify-content: space-between;
  }

  & .project__badge {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }

  & .project__links {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 20px;
    margin-top: 10px;
  }

  & .project__link {
    font-size: 1.5rem;
    flex-grow: 1;
  }

  & i {
    margin-left: 10px;
  }

  .project__teammates {
    margin: 20px 0;
  }
`;

export default BadgeStyle;
