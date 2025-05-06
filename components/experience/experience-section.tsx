import { ArticleContainer } from "../article-container";
import { CompanyWithLogo } from "../company-with-logo";
import { SectionTitle } from "../typography";
import { Separator } from "../ui/separator";
import { ExperienceTime } from "./experience-time";
import { experience } from "./experience.data";

export const ExperienceSection = () => {
  return (
    <section className="space-y-5">
      <header>
        <SectionTitle>Experience</SectionTitle>
      </header>
      <div className="space-y-10">
        {experience
          .map((experience) => (
            <ArticleContainer
              key={`${experience.company}-${experience.position}-${experience.dateStart.toLocaleDateString()}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <CompanyWithLogo
                  alt=""
                  src={experience.imageSrc}
                  position={experience.position}
                  company={experience.company}
                />
                <ExperienceTime
                  fromDate={experience.dateStart}
                  toDate={experience.dateEnd}
                />
              </div>
              <p className="text-lg/loose">{experience.description}</p>
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
