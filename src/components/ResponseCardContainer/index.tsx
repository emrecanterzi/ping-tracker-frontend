import React from "react";
import { IResponse } from "../../interfaces/Responce";
import ResponseCard from "../ResponseCard";

interface IProps {
  responses: IResponse[];
  title: string;
}

const ResponseCardContainer = ({ responses, title }: IProps) => {
  return (
    <div>
      <h3>{title} Responses</h3>

      {responses
        .sort(
          (response1, response2) =>
            new Date(response2.date).getTime() -
            new Date(response1.date).getTime()
        )
        .map((response) => (
          <ResponseCard response={response} />
        ))}
    </div>
  );
};

export default ResponseCardContainer;
