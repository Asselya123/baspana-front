import { Button, Divider, Form, Radio, Space, Typography } from "antd";
import { FC } from "react";

const { Title, Text } = Typography;

interface ApplicationTemplateProps {
  onSubmit: () => void;
}

export const ApplicationTemplate: FC<ApplicationTemplateProps> = ({
  onSubmit,
}) => {
  return (
    <div className="p-5 mb-10 bg-white rounded-lg">
      <Title level={5}>Заявление</Title>
      <p className="mb-5 text-base text-gray-500">
        Ознакомьтесь с Заявлением и подпишите его с ЭЦП
      </p>
      <div className="rounded-lg bg-[#F6F7F8] p-5">
        <div className="mb-4">
          <Text className="block text-sm">
            <span className="text-gray-500">Приложение 1</span>
            <br />
            к Правилам постановки на учет нуждающихся в жилище
            <br />
            граждан Республики Казахстан, кандасов в электронную
            <br />
            базу «Центр обеспечения жилищем»
          </Text>
        </div>

        <Title level={5} className="mb-10">
          Заявление на постановку на учет в электронную базу
          <br />
          «Центр обеспечения жилищем»
        </Title>

        <Form layout="vertical" className="space-y-4">
          <div className="mb-6">
            <div className="flex items-end">
              <p>Настоящим я,</p>
              <div className="flex-grow mx-2 border-b border-black"></div>
            </div>
            <p className="block text-sm text-gray-500">
              (указывается полностью Фамилия, Имя, Отчество (при наличии), дата
              рождения, номер и дата выдачи документа, удостоверяющего личность,
              адрес проживания (регистрации) производится автозаполнение после
              ввода ИИН), ИИН)
            </p>
          </div>

          <div className="mb-4">
            <div className="flex items-end">
              <p>Настоящим я,</p>
              <div className="flex-grow mx-2 border-b border-black"></div>
            </div>
            <p className="block text-sm text-gray-500">
              (указывается полностью Фамилия, Имя, Отчество (при наличии), дата
              рождения, номер и дата выдачи документа, удостоверяющего личность,
              адрес проживания (регистрации), ИИН),
            </p>
            являясь доверенным лицом/законным представителем, а также действуя
            от имени и в интересах ___________________ (указывается ФИО
            доверителя/несовершеннолетнего лица) прошу Вас поставить меня на
            учет в электронную базу "Центр обеспечения жилищем", в качестве
            нуждающегося в жилье.
          </div>

          <div className="p-3 mb-6 bg-white rounded">
            <p className="block mb-4 font-medium">
              Согласие либо отказ при распределении жилья, не соответствующего
              квадратуре (меньше положенного), комплектности и этажности <br />
              <span className="font-normal text-gray-500">
                (выбрать нужное):
              </span>
            </p>

            <Radio.Group className="block my-4">
              <Space direction="vertical">
                <Radio value="agree">согласен (-на)</Radio>
                <Radio value="disagree">не согласен (-на)</Radio>
              </Space>
            </Radio.Group>
          </div>

          <Divider />

          <div className="my-6">
            <ul className="list-disc list-inside">
              <li>
                Не возражаю против проверки наличия или отсутствия у меня и
                постоянно проживающих со мной членов семьи жилища в постоянном
                пользовании в Республике Казахстан.
              </li>

              <li>
                Согласен (-на) на сбор и обработку сведений и использование
                сведений, составляющих охраняемую законом тайну, содержащихся в
                информационных системах. Согласен (-на) на публикацию данных на
                интернет-ресурсе АО "Отбасы банк" в соответствии с требованиями
                статей 71 и 78 Закона Республики Казахстан "О жилищных
                отношениях".
              </li>

              <li>
                Уведомлен и согласен с постановкой на учет нуждающихся в жилье
                без принадлежности к лицам определенных пунктом 1 статьи 74
                Закона в случае отсутствия подтверждающих сведений в
                государственных базах данных.
              </li>
            </ul>
          </div>

          <div className="flex items-end">
            <p className="">Номер мобильного телефона:</p>
            <div className="ml-2 max-w-[200px] flex-grow border-b border-black"></div>
            ;
          </div>
          <div className="flex items-end">
            <p className="">Электронная почта</p>
            <div className="ml-2 max-w-[273px] flex-grow border-b border-black"></div>
            .
          </div>

          <div className="flex justify-end mt-8">
            <Button
              type="primary"
              onClick={onSubmit}
              size="large"
              className="bg-blue-600"
            >
              Подать заявление
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
