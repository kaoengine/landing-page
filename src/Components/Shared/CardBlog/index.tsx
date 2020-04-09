import React, { FunctionComponent } from "react";
import { Badget, Color } from "../Badget";
import './CardBlog.css';

type CardBlogProps = {
  comment: string;
  color: Color;
  date: string;
  description: string;
  header: string;
  share: string;
  title: string;
};

export const CardBlog: FunctionComponent<any> = (props: CardBlogProps) => {
  const { comment, color, date, description, header, share, title } = props;
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img />
          {/* <img src="/images/avatar2/large/matthew.png" /> */}
          <Badget title={title} color={color} />
        </div>
        <div className="content">
          <div className="meta">
            <a>{date}</a>
            <a>{comment}</a>
            <a>{share}</a>
          </div>
          <div className="header">{header}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          Read more
        <i className="arrow right icon"></i>
        </div>
      </div>
    </div>
  );
};
