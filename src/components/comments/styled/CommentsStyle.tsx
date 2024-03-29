import styled from 'styled-components';
import { mediaQueries } from '../../../constants/constants';

const { mediaTablet } = mediaQueries;

const CommentsStyle = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  padding-right: 30px;

  @media ${mediaTablet} {
    padding-right: 0;
  }

  .comment:not(:last-child) {
    margin-bottom: 30px;
  }

  .comments__rate {
    font-size: 2rem;

    @media ${mediaTablet} {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }

  .ant-comment-content-author-name {
    font-size: 2rem;
    line-height: 2.5rem;

    @media ${mediaTablet} {
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
  }

  .ant-comment-content-detail {
    font-size: 1.4rem;
    
    @media ${mediaTablet} {
      font-size: 1.1rem;
    }
  }

  .comment__avatar, .comment__avatar img {
    width: 50px;
    height: 50px;
  }

  .ant-comment-content-author {
    display: flex;
    flex-direction: column;
  }

  .comment__rate-container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 20px;
    font-size: 1.3rem;

    @media ${mediaTablet} {
      margin-top: 5px;
      display: flex;
      flex-direction: column;

      font-size: 1rem;
    }
  }

  .ant-comment-content-detail {
    white-space: pre-line;
  }
`;

export default CommentsStyle;
