import CompanyLogo from "@/assets/company-logo.svg";
import Eye from "@/assets/eye.svg";
import Preview from "@/assets/preview.webp";
import { GoBack } from "@/components/GoBack";
import { Layout } from "@/components/Layout";
import { ApartmentCarousel } from "../components/ApartmentCarousel";
import { ApartmentCommonInfo } from "../components/ApartmentCommonInfo";
import { ApartmentConditions } from "../components/ApartmentConditions";
import { ApartmentDescription } from "../components/ApartmentDescription";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { ApartmentInfo } from "../components/ApartmentInfo";
import { AvailablePrograms } from "../components/AvailablePrograms";
import { BuilderInfo } from "../components/BuilderInfo";
import { QuestionBlock } from "../components/QuestionBlock";
import {
  APARTMENT_INFO,
  AVAILABLE_PROGRAMS,
  COMMON_INFO,
  CONDITIONS,
} from "../components/mockData";

export const ApartmentDetailsPage = () => {
  // Mock data for description
  const description =
    "В составе квартир предусматриваются жилые комнаты, кухни, санузлы, балконы. Фундаменты – монолитные железобетонные, стены тех подполья - железобетонные монолитные. Наружные стены и перегородки – сборные трехслойные наружные стеновые несущие панели, перекрытия – сборные железобетонные панели, лестницы - монолитные железобетонные.";

  return (
    <Layout>
      <GoBack />
      <div className="flex justify-center w-full mt-5 grow">
        <div className="flex flex-col w-full">
          <ApartmentHeader
            title='ЖК "Жас Канат"'
            address="Казахстан, Жамбылская область, Тараз, 15-й микрорайон"
            viewCount={200}
            eyeIcon={Eye}
          />
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
          </div>
        </div>
      </div>
    </Layout>
  );
};
