import { FC } from "react";
import Icon0 from "@/assets/icon-0.png";
import Icon1 from "@/assets/icon-1.png";
import Icon2 from "@/assets/icon-2.png";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
      className={`relative flex h-[200px] w-[400px] justify-between rounded-3xl p-5 ${className}`}
    >
      <div className="self-center">{title}</div>
      <div className="absolute bottom-[40px] right-[40px] h-[100px] w-[100px]">
        <img src={iconSrc} />
      </div>
      <div className="flex h-max w-max items-center justify-center self-end rounded-full bg-[rgba(0,0,0,0.22)] p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 17L15 12L10 7"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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

export const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center grow">
        <div className="flex w-full max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            {links.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
