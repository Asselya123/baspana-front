import { Carousel, Typography } from "antd";
import Preview from "@/assets/preview.webp";
import { GoBack } from "@/components/GoBack";
import { Layout } from "@/components/Layout";

const info = [
  {
    title: "Код объекта”",
    value: "1610",
  },
  {
    title: "Этажность”",
    value: "5",
  },
  {
    title: "Зданий",
    value: "1",
  },
  {
    title: "Материал",
    value: "Панельный",
  },
  {
    title: "Начало строительства",
    value: "23.03.2020",
  },
  {
    title: "Завершение строительства",
    value: "31.03.2022",
  },
];

const ProgramLabel = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-[#008F91] bg-[#E7F5EE] px-4 py-1">
      <span className="text-sm">{label}</span>
    </div>
  );
};
const AVAILABLE_PROGRAMS = [
  {
    label: "Нурлы жер",
  },
];
const ConditionLabel = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-[#D1D4D7] bg-[#EBEFF1] px-4 py-1">
      <span className="text-sm whitespace-nowrap">{label}</span>
    </div>
  );
};
const CONDITIONS = [
  { label: "Дети-сироты и дети, оставшиеся без попечения родителей" },
  { label: "Неполные семьи" },
  { label: "Лица с инвалидностью I и II группы" },
  { label: "В семье ребенок с ограниченными возможностями" },
  { label: "Многодетная семья" },
];

const CommonInfoBlock = ({
  propertyName,
  value,
}: {
  propertyName: string;
  value: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-1">
      <p className="text-sm text-[#7A7E81]">{propertyName}</p>
      <div className="h-full grow border-b border-dotted border-[#ADB0B2]"></div>
      <p className="text-sm font-medium text-[#333839]">{value}</p>
    </div>
  );
};

const COMMON_INFO = [
  {
    propertyName: "Код объекта",
    value: "1610",
  },
  {
    propertyName: "Этажность",
    value: "5",
  },
  {
    propertyName: "Зданий",
    value: "1",
  },
  {
    propertyName: "Материал",
    value: "Панельный",
  },
  {
    propertyName: "Начало строительства",
    value: "23.03.2020",
  },
  {
    propertyName: "Завершение строительства",
    value: "31.03.2022",
  },
];
export const ApartmentDetailsPage = () => {
  return (
    <Layout>
      <GoBack />
      <div className="flex justify-center w-full mt-5 grow">
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full mb-4">
            <div>
              <Typography.Title level={3}>ЖК “Жас Канат”</Typography.Title>
              <p className="text-[#7A7E81]">
                Казахстан, Жамбылская область, Тараз, 15-й микрорайон
              </p>
            </div>
            <div className="flex items-center gap-2 h-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6673 8.00016C14.6673 8.66683 12.0007 12.6668 8.00065 12.6668C4.00065 12.6668 1.33398 8.66683 1.33398 8.00016C1.33398 7.3335 4.00065 3.3335 8.00065 3.3335C12.0007 3.3335 14.6673 7.3335 14.6673 8.00016ZM8.00065 5.3335C9.47341 5.3335 10.6673 6.5274 10.6673 8.00016C10.6673 9.47292 9.47341 10.6668 8.00065 10.6668C6.52789 10.6668 5.33398 9.47292 5.33398 8.00016C5.33398 6.5274 6.52789 5.3335 8.00065 5.3335Z"
                  fill="#7A7E81"
                />
                <path
                  d="M9.33394 8.00012C9.33394 7.26374 8.73699 6.66679 8.00061 6.66679C7.26423 6.66679 6.66728 7.26374 6.66728 8.00012C6.66728 8.7365 7.26423 9.33346 8.00061 9.33346C8.73699 9.33346 9.33394 8.7365 9.33394 8.00012Z"
                  fill="#7A7E81"
                />
              </svg>
              <span className="text-[#7A7E81]">200 просмотров</span>
            </div>
          </div>
          <div className="max-w-[800px]">
            <Carousel className="max-w-[800px]">
              <div>
                <img src={Preview} alt="" />
              </div>
              <div>
                <img src={Preview} alt="" />
              </div>
            </Carousel>
            <div className="flex flex-wrap items-center justify-between gap-2 py-5">
              {info.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-2"
                >
                  <p>{item.title}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            <div className="border-y border-[#D1D4D7] py-4">
              <Typography.Title level={3}>Доступные программы</Typography.Title>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_PROGRAMS.map((program) => (
                  <ProgramLabel key={program.label} label={program.label} />
                ))}
              </div>
            </div>
            <div className="border-b border-[#D1D4D7] py-4">
              <Typography.Title level={3}>Условия участия</Typography.Title>
              <Typography.Paragraph>
                По данному объекту в конкурсе могут участвовать только следующие
                категории:
              </Typography.Paragraph>
              <div className="flex flex-wrap gap-2">
                {CONDITIONS.map((condition) => (
                  <ConditionLabel
                    key={condition.label}
                    label={condition.label}
                  />
                ))}
              </div>
            </div>
            <div className="border-b border-[#D1D4D7] py-4">
              <Typography.Title level={3}>Описание</Typography.Title>
              <Typography.Paragraph>
                В составе квартир предусматриваются жилые комнаты, кухни,
                санузлы, балконы. Фундаменты – монолитные железобетонные, стены
                тех подполья - железобетонные монолитные. Наружные стены и
                перегородки – сборные трехслойные наружные стеновые несущие
                панели, перекрытия – сборные железобетонные панели, лестницы -
                монолитные железобетонные.
              </Typography.Paragraph>
            </div>
            <div className="border-b border-[#D1D4D7] py-4">
              <Typography.Title level={4}>Общая информация</Typography.Title>
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                {COMMON_INFO.map((item) => (
                  <CommonInfoBlock
                    key={item.propertyName}
                    propertyName={item.propertyName}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
