import PageHeader from "@/components/PageHeader";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" subtitle="Open a project to see its dashboard: numbers, pipeline, tools and screens" />
      <ProjectsExplorer />
    </>
  );
}
