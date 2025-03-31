import CompanyLogo from "@/assets/company-logo.svg";
import Eye from "@/assets/eye.svg";
import Preview from "@/assets/preview.webp";
import { GoBack } from "@/components/GoBack";
import { Layout } from "@/components/Layout";
import { ApartmentCard } from "../components/ApartmentCard";
import { ApartmentCarousel } from "../components/ApartmentCarousel";
import { ApartmentCommonInfo } from "../components/ApartmentCommonInfo";
import { ApartmentConditions } from "../components/ApartmentConditions";
import { ApartmentDescription } from "../components/ApartmentDescription";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { ApartmentInfo } from "../components/ApartmentInfo";
import { AvailablePrograms } from "../components/AvailablePrograms";
import { BuilderInfo } from "../components/BuilderInfo";
import { BuildingDuration } from "../components/BuildingDuration";
import { QuestionBlock } from "../components/QuestionBlock";
import {
  APARTMENT_INFO,
  AVAILABLE_PROGRAMS,
  COMMON_INFO,
  CONDITIONS,
} from "../components/mockData";

const description =
  "В составе квартир предусматриваются жилые комнаты, кухни, санузлы, балконы. Фундаменты – монолитные железобетонные, стены тех подполья - железобетонные монолитные. Наружные стены и перегородки – сборные трехслойные наружные стеновые несущие панели, перекрытия – сборные железобетонные панели, лестницы - монолитные железобетонные.";

export const ApartmentDetailsPage = () => {
  // Mock data for description

  return (
    <Layout>
      <GoBack />
      <div className="mt-5 flex w-full grow justify-center">
        <div className="flex w-full flex-col">
          <ApartmentHeader
            title='ЖК "Жас Канат"'
            address="Казахстан, Жамбылская область, Тараз, 15-й микрорайон"
            viewCount={200}
            eyeIcon={Eye}
          />
          <div className="flex gap-10">
            <div className="max-w-[800px]">
              <ApartmentCarousel images={[Preview, Preview, Preview]} />
              <ApartmentInfo info={APARTMENT_INFO} />
              <AvailablePrograms programs={AVAILABLE_PROGRAMS} />
              <ApartmentConditions conditions={CONDITIONS} />
              <ApartmentDescription description={description} />
              <ApartmentCommonInfo commonInfo={COMMON_INFO} />
              <BuilderInfo
                companyLogo={CompanyLogo}
                companyName="ТОО «Service СМУ»"
                info={APARTMENT_INFO}
              />
              <QuestionBlock
                title="Остались вопросы?"
                description="Получите консультацию на прямую от строительной компании"
                buttonText="Получить консультацию"
                onButtonClick={() => console.log("Consultation requested")}
              />
              <BuildingDuration
                images={[
                  {
                    url: Preview,
                    date: "15 октября 2021",
                  },
                  {
                    url: Preview,
                    date: "15 октября 2021",
                  },
                  {
                    url: Preview,
                    date: "15 октября 2021",
                  },
                ]}
                description="В составе квартир предусматриваются жилые комнаты, кухни, санузлы, балконы. Фундаменты – монолитные железобетонные, стены тех подполья - железобетонные монолитные. Наружные стены и перегородки – сборные трехслойные наружные стеновые несущие панели, перекрытия – сборные железобетонные панели, лестницы - монолитные железобетонные. "
                lastUpdated="Обновлено 15 октября 2021"
                startYear={2021}
                endYear={2025}
              />
            </div>
            <ApartmentCard
              apartmentTypes={[
                {
                  label: "1-комнатные",
                  roomCount: 1,
                  minArea: 30,
                  maxArea: 40,
                  price: 1000000,
                  pricePerSquareMeter: 100000,
                  availableCount: 10,
                  schemeUrl: Preview,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
