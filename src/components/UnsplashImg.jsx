import React from "react";

const UnsplashImg = ({author, authorId, unsplashId, children, className}) => {
  return (
    <div className={`indicator group ${className ? className : ''}`}>
      <span className="indicator-item bottom-5 indicator-bottom indicator-center badge badge-secondary invisible group-hover:visible">
        <div className="text-[10px]">
          Photo by{" "}
          <a
            className="underline"
            href={authorId}
          >
            {author}
          </a>{" "}
          on{" "}
          <a
            className="underline"
            href={unsplashId}
          >
            Unsplash
          </a>
        </div>
      </span>
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default UnsplashImg;
