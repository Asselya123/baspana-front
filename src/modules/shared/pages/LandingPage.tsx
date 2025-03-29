import { Typography } from "antd";
import { FC, ReactNode } from "react";
import BannerImage from "@/assets/banner.webp";
import Icon0 from "@/assets/icon-0.png";
import Icon1 from "@/assets/icon-1.png";
import Icon2 from "@/assets/icon-2.png";
import ProgramImage1 from "@/assets/program1.png";
import ProgramImage2 from "@/assets/program2.png";
import ProgramImage3 from "@/assets/program3.png";
import { Layout } from "@/components/Layout";

interface LandingPageProps {}

const LinkCard = ({
  title,
  iconSrc,
  className,
}: {
  title: JSX.Element;
  href: string;
  iconSrc: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex h-[180px] w-[300px] justify-between rounded-3xl p-5 ${className}`}
    >
      <div className="self-center">{title}</div>
      <div className="absolute bottom-[15px] right-[15px] h-[100px] w-[100px]">
        <img src={iconSrc} />
      </div>
    </div>
  );
};

const links = [
  {
    title: (
      <div>
        <h3 className="text-2xl font-medium text-white">Мой банк</h3>
        <p className="text-sm text-white">Счета, Депозиты, Займы</p>
      </div>
    ),
    href: "/profile",
    iconSrc: Icon0,
    className: "background-0",
  },
  {
    title: (
      <div>
        <h3 className="text-2xl font-medium">BaspanaMarket</h3>
        <p className="text-sm">Маркет недвижимости</p>
      </div>
    ),
    href: "/applications",
    iconSrc: Icon1,
    className: "background-1",
  },
  {
    title: (
      <h3 className="max-w-[200px] text-2xl font-medium text-white">
        Центр обеспечения жильем
      </h3>
    ),
    href: "/statements",
    iconSrc: Icon2,
    className: "background-2",
  },
];

const programs = [
  {
    title: "Бақытты Отбасы",
    percent: "10%",
    image: <img src={ProgramImage1} />,
  },
  {
    title: "Әскери Баспана",
    percent: "10%",
    image: <img src={ProgramImage2} />,
  },
  {
    title: "Женская Ипотека «ҰМАЙ»",
    percent: "10%",
    image: <img src={ProgramImage3} />,
  },
];

const ProgramCard = ({
  title,
  percent,
  image,
}: {
  title: ReactNode;
  percent: string;
  image: ReactNode;
}) => {
  return (
    <div
      className={`relative flex h-[180px] w-[300px] flex-col justify-between rounded-3xl bg-white p-5`}
    >
      <div className="relative z-10 max-w-[150px] text-xl font-semibold">
        {title}
      </div>
      <div className="relative z-10 text-sm text-gray-500">
        Ставка от <br />{" "}
        <span className="font-semibold text-black">{percent}</span>
      </div>
      <div className="absolute bottom-0 right-0 w-[70%]"> {image}</div>
    </div>
  );
};

export const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <Layout>
      <div className="grow bg-[#F6F7F8]">
        <div className="mx-auto max-w-[1280px] px-10 py-10">
          <div className="flex items-center justify-center w-full gap-4">
            {links.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </div>

          <div className="py-10">
            <Typography.Title level={3} className="text-center">
              Наши программы
            </Typography.Title>
            <div className="flex items-center justify-center w-full gap-4 mt-10">
              {programs.map((program) => (
                <ProgramCard key={program.title} {...program} />
              ))}
            </div>
          </div>
          <img src={BannerImage} alt="" className="w-full" />
        </div>
      </div>
    </Layout>
  );
};
