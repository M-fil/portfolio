import React from 'react';

import CommentsStyle from './styled/CommentsStyle';
import CommentItem from './Comment';

import { ICommentAuthor } from '../../interfaces/interfaces';
import useDataWithReducer from '../../custom-hooks/useDataWithReducer';
import useStateCondition from '../../custom-hooks/useStateCondition';
import { getDataByURL } from '../../service/service';
import { urls } from '../../constants/constants';

const Comments: React.FC = () => {
  const { state: commentsState } = useDataWithReducer(
    getDataByURL.bind(null, urls.COMMENTS_URL), 'comments',
  );
  const commentsData = useStateCondition(commentsState, (
    commentsState.data && Object
      .entries(commentsState.data as { [propName: string]: ICommentAuthor })
      .map((author, index) => (
        <CommentItem
          key={author[0]}
          personKey={author[0]}
          index={index}
          author={author[1]}
        />
      ))
  ));

  return (
    <CommentsStyle>
      {commentsData}
    </CommentsStyle>
  );
};

export default Comments;
