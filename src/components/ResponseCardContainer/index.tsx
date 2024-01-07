import React, { useRef, useEffect } from "react";
import { IResponse } from "../../interfaces/Response";
import ResponseCard from "../ResponseCard";
import autoAnimate from "@formkit/auto-animate";

interface IProps {
  responses: IResponse[];
  title: string;
}

const ResponseCardContainer = ({ responses, title }: IProps) => {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) autoAnimate(parentRef.current);
  }, [parentRef]);
  return (
    <div ref={parentRef}>
      <h3>{title} Responses</h3>

      {responses
        .sort(
          (response1, response2) =>
            new Date(response2.date).getTime() -
            new Date(response1.date).getTime()
        )
        .map((response) => (
          <ResponseCard key={response._id} response={response} />
        ))}
    </div>
  );
};

export default ResponseCardContainer;
