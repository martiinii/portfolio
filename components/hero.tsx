import avatar from "@/public/me.png";
import { LogoImage } from "./logo-image";

export const Hero = () => {
  return (
    <header className="space-y-4 max-w-xl text-lg/relaxed">
      <h1 className="flex gap-4 items-center font-bold text-5xl">
        <LogoImage
          draggable={false}
          src={avatar}
          alt=""
          className="size-20 rotate-3 hover:-rotate-3 hover:scale-110 transition-transform"
        />
        Martin
      </h1>
      <h2>
        I am a professional fullstack web developer based in Poland, Bydgoszcz,
        with over three years of experience crafting high-performance web
        applications using modern tools and technologies.
      </h2>
      <p>
        Specialized in writing clean, maintainable code with a keen eye for
        details, ensuring seamless and efficient user experiences that meet both
        technical and business goals.
      </p>
    </header>
  );
};
