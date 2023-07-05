import * as React from "react";

export default function StorySummary({
  summary,
}: {
  summary: string | null;
}): React.ReactElement {
  return (
    <div className="story__summary">
      <p>{summary ?? "There is no summary"}</p>
    </div>
  );
}
