import { ArticleContainer } from "../article-container";
import { SectionTitle } from "../typography";
import { Separator } from "../ui/separator";
import { ProjectLink } from "./project-link";
import { projects } from "./projects.data";

export const ProjectsSection = () => {
  return (
    <section className="space-y-5">
      <header>
        <SectionTitle>Selected projects</SectionTitle>
      </header>
      <div className="space-y-10">
        {projects
          .map((project) => (
            <ArticleContainer key={project.title}>
              <div className="flex gap-2 justify-between">
                <span className="text-2xl font-medium tracking-tight">
                  {project.title}
                </span>

                <div className="flex gap-2">
                  {project.links?.map((link) => (
                    <ProjectLink key={link.href} {...link} />
                  ))}
                </div>
              </div>

              <p className="text-lg/loose">{project.description}</p>
            </ArticleContainer>
          ))
          .reduce<React.ReactNode[]>(
            // biome-ignore lint/suspicious/noArrayIndexKey: No other choice but to use index as key
            (acc, cur, i) => acc.concat(<Separator key={i} />, cur),
            [],
          )
          .slice(1)}
      </div>
    </section>
  );
};
