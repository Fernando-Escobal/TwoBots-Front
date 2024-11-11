import React from "react";
import "./Content.css";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Content;
