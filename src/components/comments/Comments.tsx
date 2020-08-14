import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  Comment,
} from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import CommentsStyle from './styled/CommentsStyle';

const CommentItem: React.FC<{
  personKey: string;
}> = ({
  personKey,
}) => {
  const [t] = useTranslation();

  return (
    <Comment
      author={t(`comments.${personKey}.author`)}
      content={t(`comments.${personKey}.comment`)}
      avatar={`https://avatars0.githubusercontent.com/u/8600988?s=400&u=0ab0529ad7e6b7013dbeee0c78ba77b71a3eff74&v=4`}
    />
  );
};

const Comments: React.FC = () => {
  return (
    <CommentsStyle>
      <Carousel
        className="comments__slider"
        autoplay
        infinite
        arrows
        prevArrow={<CaretLeftOutlined />}
        nextArrow={<CaretRightOutlined />}
      >
        <CommentItem personKey="person-1" />
        <CommentItem personKey="person-2" />
        <CommentItem personKey="person-3" />
        <CommentItem personKey="person-4" />
      </Carousel>
    </CommentsStyle>
  )
}

export default Comments;
