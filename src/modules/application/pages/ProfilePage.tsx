import { HeartOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import PreviewCard from "@/assets/card-preview.png";

const AppartmentCard = ({
  title,
  price,
  label,
  image,
  isLiked,
}: {
  title: string;
  price: JSX.Element | string;
  label: string;
  image: string;
  isLiked: boolean;
}) => {
  return (
    <div className="overflow-hidden rounded-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="absolute right-4 top-4">
          <Button icon={<HeartOutlined />} />
        </div>
        <div className="absolute left-4 top-4 rounded-2xl bg-white px-4 py-1 text-xs">
          {label}
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-[#EBEFF1] p-4">
        <Typography.Title level={5}>{title}</Typography.Title>
        <Typography.Paragraph>{price}</Typography.Paragraph>
      </div>
    </div>
  );
};

const APPARTMENT_PREVIEW_LIST = [
  {
    label: "Прием заявлений",
    price: (
      <span>
        от 390 300 ₸ м<sup>2</sup>
      </span>
    ),
    image: PreviewCard,
    title: "40 квартирный жилой дом по ул. Кабанбай батыра 186",
  },
  {
    label: "Прием заявлений",
    price: (
      <span>
        от 390 300 ₸ м<sup>2</sup>
      </span>
    ),
    image: PreviewCard,
    title: "40 квартирный жилой дом по ул. Кабанбай батыра 186",
  },
  {
    label: "Прием заявлений",
    price: (
      <span>
        от 390 300 ₸ м<sup>2</sup>
      </span>
    ),
    image: PreviewCard,
    title: "40 квартирный жилой дом по ул. Кабанбай батыра 186",
  },
];

export const ProfilePage = () => {
  return (
    <>
      <div className="flex gap-8 rounded-xl bg-white p-5">
        <div
          className="flex flex-col items-center justify-center rounded-xl px-8 py-5"
          style={{
            background:
              "linear-gradient(141deg, #008F91 15.18%, #003D3E 86.41%)",
          }}
        >
          <p className="text-white opacity-70">Дата постановки</p>
          <h5 className="text-2xl font-medium text-white">28.12.2015</h5>
        </div>
        <div>
          <Typography.Title level={3}>Жумажан Жанна Бериковна</Typography.Title>
          <p className="mb-3 text-[#7A7E81]">
            Алматинская область, Талгарский район, поселок Туздыбастау, улица
            Нурмагамбетова, дом 9{" "}
          </p>
          <div className="rounded-lg bg-[#F5F6F8] px-5 py-3">
            <p className="text-xs text-[#7A7E81]">Категория</p>
            <p className="text-sm text-[#333839]">
              Многодетная семья, инвалидность
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-xl bg-white p-5">
        <div
          className="flex gap-5 rounded-xl px-8 py-5"
          style={{
            background:
              "linear-gradient(262deg, #DBFBDA 5.93%, #D1EEFF 68.26%)",
          }}
        >
          <div>
            <Typography.Title level={5}>Льготная ипотека 5%</Typography.Title>
            <Typography.Paragraph>
              Согласно лестнице доступности жилья Вы можете получить
              государственную поддержку в виде льготного ипотечного займа со
              ставкой вознаграждения 5%. Ниже мы подобрали подходящие объекты
              недвижимости в вашем регионе.
            </Typography.Paragraph>
            <Button color="primary">Подробнее </Button>
          </div>
          <Button>
            <div className="flex items-center justify-center gap-1">
              Показать все объекты
              <RightOutlined />
            </div>
          </Button>
        </div>
        <div>
          <div className="flex justify-between gap-5">
            {APPARTMENT_PREVIEW_LIST.map((item) => (
              <AppartmentCard key={item.label} {...item} isLiked={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
