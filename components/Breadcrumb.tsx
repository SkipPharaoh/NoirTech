import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
}

const Breadcrumb = ({ children }: Props) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <React.Fragment key={index}>
          {child}
          <span>/</span>
        </React.Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="mx-8 mt-2" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;
