import React from 'react';
import { useTranslation } from 'react-i18next';
import { Comment, Avatar, Rate } from 'antd';

import CommentsStyle from './styled/CommentsStyle';
import { commentsAuthorsLinks } from '../../constants/constants';
import { ICommentAuthor } from '../../interfaces/interfaces';

const CommentItem: React.FC<{
  personKey: string;
  author: ICommentAuthor;
}> = ({
  personKey, author,
}) => {
  const [t] = useTranslation();

  return (
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
  );
};

const Comments: React.FC = () => (
  <CommentsStyle>
    {Object.entries(commentsAuthorsLinks).map((author) => (
      <CommentItem key={author[0]} personKey={author[0]} author={author[1]} />
    ))}
  </CommentsStyle>
);

export default Comments;
