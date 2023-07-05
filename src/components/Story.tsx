import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import PosterByline, { type Props as PosterBylineProps } from "./PosterByline";
import StorySummary from "./StorySummary";
import Image from "./Image";
import Timestamp from "./Timestamp";
import { graphql } from 'relay-runtime';
import { useFragment } from "react-relay";
import { StoryFragment$key } from "./__generated__/StoryFragment.graphql";

const StoryFragment = graphql`
  fragment StoryFragment on Story {
    title
    summary
    createdAt
  }
`;

type Props = {
  story: StoryFragment$key;
};

export default function Story({ story }: Props): React.ReactElement {
  const data = useFragment(
    StoryFragment,
    story,
  );
  return (
    <Card>
      <Heading>{data.title}</Heading>
      <Timestamp time={data.createdAt} />
      <StorySummary summary={data.summary} />
    </Card>
  );
}
