import { Mail } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SectionTitle } from "../typography";
import { Button } from "../ui/button";
export const LinksSection = () => {
  return (
    <section className="flex flex-col gap-5 lg:items-end w-fit">
      <SectionTitle>Let&apos;s connect</SectionTitle>
      <div className="flex flex-row flex-wrap lg:flex-col lg:flex-nowrap gap-2 w-fit lg:*:justify-start">
        <Button asChild>
          <Link target="_blank" href={"https://github.com/martiinii"}>
            <FiGithub /> martiinii
          </Link>
        </Button>

        <Button asChild>
          <Link
            target="_blank"
            href={
              "https://www.linkedin.com/in/marcin-g%C4%85sienica-makowski-990a4923a/"
            }
          >
            <FaLinkedinIn /> LinkedIn profile
          </Link>
        </Button>

        <Button asChild>
          <Link target="_blank" href={"mailto:me.martiinii@gmail.com"}>
            <Mail /> me.martiinii@gmail.com
          </Link>
        </Button>
      </div>
    </section>
  );
};
