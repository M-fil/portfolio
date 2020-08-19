import React from 'react';
import { useTranslation } from 'react-i18next';
import { Comment, Avatar, Rate } from 'antd';

import CommentsStyle from './styled/CommentsStyle';
import { commentsAuthorsData } from '../../constants/constants';
import { ICommentAuthor } from '../../interfaces/interfaces';

const Slide = require('react-reveal/Slide');

const CommentItem: React.FC<{
  personKey: string;
  author: ICommentAuthor;
  index: number;
}> = ({
  personKey, author, index,
}) => {
  const [t] = useTranslation();

  return (
    <Slide left={index % 2} right={!(index % 2)}>
      <Comment
        className="comment"
        author={t(`comments.commentators.${personKey}.name`)}
        datetime={(
          <span className="comment__rate-container">
            <span className="comment__content">
              {t(`comments.commentators.${personKey}.date`)}
            </span>
            <Rate className="comments__rate" value={5} disabled />
          </span>
      )}
        content={t(`comments.commentators.${personKey}.text`)}
        avatar={(
          <a href={author.personalPage} target="_blank">
            <Avatar className="comment__avatar" size="large" src={author.image} />
          </a>
      )}
      />
    </Slide>
  );
};

const Comments: React.FC = () => (
  <CommentsStyle>
    {Object.entries(commentsAuthorsData).map((author, index) => (
      <CommentItem
        key={author[0]}
        personKey={author[0]}
        index={index}
        author={author[1]}
      />
    ))}
  </CommentsStyle>
);

export default Comments;
