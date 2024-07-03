import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return <div className="bg-indigo mt-52">page {params.id}</div>;
}
