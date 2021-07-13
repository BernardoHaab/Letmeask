import React, { ReactNode } from 'react';
import cx from 'classnames';

import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

const Question: React.FC<QuestionProps> = ({
  content,
  author,
  isHighlighted,
  isAnswered,
  children
}: QuestionProps) => (
  <div
    className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered }
    )}
  >
    <p>{content}</p>
    <footer>
      <div className="user-info">
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
      </div>
      <div>{children}</div>
    </footer>
  </div>
);

Question.defaultProps = {
  isHighlighted: false,
  isAnswered: false,
  children: undefined
};

export default Question;
