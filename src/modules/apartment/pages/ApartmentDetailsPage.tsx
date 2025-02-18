import { Carousel, Typography } from "antd";
import Preview from "@/assets/preview.webp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

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
export const ApartmentDetailsPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex w-full grow justify-center">
        <div className="flex w-full max-w-7xl flex-col">
          <div className="flex w-full justify-between">
            <div>
              <Typography.Title level={3}>ЖК “Жас Канат”</Typography.Title>
              <p className="text-[#7A7E81]">
                Казахстан, Жамбылская область, Тараз, 15-й микрорайон
              </p>
            </div>
            <div className="flex h-max items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
          <div>
            <Carousel className="max-w-2xl">
              <div>
                <img src={Preview} alt="" />
              </div>
              <div>
                <img src={Preview} alt="" />
              </div>
            </Carousel>
            <div className="flex items-center justify-between gap-2">
              {info.map((item) => (
                <div key={item.title}>
                  <p>{item.title}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
