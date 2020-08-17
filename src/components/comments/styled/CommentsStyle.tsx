import styled from 'styled-components';

const CommentsStyle = styled('div')`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  padding-right: 30px;

  & .comment:not(:last-child) {
    margin-bottom: 30px;
  }

  & .comment__rate-container {
    font-size: 1.3rem;
  }

  & .comments__rate {
    font-size: 2rem;
  }

  & .ant-comment-content-author-name {
    font-size: 2rem;
  }

  & .ant-comment-content-detail {
    font-size: 1.4rem;
  }

  & .comment__avatar, .comment__avatar img {
    width: 50px;
    height: 50px;
  }

  & .ant-comment-content-author {
    display: flex;
    flex-direction: column;
  }

  & .comment__rate-container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 20px;
  }
`;

export default CommentsStyle;
