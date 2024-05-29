"use client";
import React, { useState, useEffect } from "react";
import { ReactJs, NextJs, Laravel } from "@/data/projects/projects";
import CardProjects from "@/components/pages/Projects/cards";
function page({ params }: { params: any }) {
  const [projects, setProjects] = useState<any>([]);
  useEffect(() => {
    switch (params.ProjectsId) {
      case "ReactJs":
        setProjects(ReactJs);
        break;
      case "NextJs":
        setProjects(NextJs);
        break;
      case "Laravel":
        setProjects(Laravel);
        break;
      default:
        break;
    }
  }, [params.tech]);
  return <CardProjects stacks={projects} />;
}

export default page;
