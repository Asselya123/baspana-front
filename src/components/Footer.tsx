import { FC } from "react";
import { Link } from "react-router-dom";
import AppleIcon from "../assets/apple.svg";
import GoogleIcon from "../assets/google.svg";
import HuaweiIcon from "../assets/huawei.svg";
import LogoIcon from "../assets/logo.svg";

const LinkGroup: FC<{
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}> = ({ title, links }) => {
  return (
    <div>
      <p className="mb-3 text-lg font-semibold">{title}</p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link className="!text-black" to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const bankLinks = [
  {
    label: "Отделения и терминалы",
    href: "#",
  },
  {
    label: "Обратная связь",
    href: "#",
  },
  {
    label: "Программы",
    href: "#",
  },
  {
    label: "Продукты банка",
    href: "#",
  },
];

const aboutLinks = [
  {
    label: "Госпрограммы",
    href: "#",
  },
  {
    label: "Вторичное жилье",
    href: "#",
  },
  {
    label: "Новостройки",
    href: "#",
  },
  {
    label: "Baspana.kz",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <div className="flex justify-between w-full gap-2 pt-8 pb-4 max-w-7xl">
        <div>
          <p className="font-medium">
            Мобильное приложение <br />
            Otbasy Bank
          </p>
          <div className="flex items-center gap-4 mt-3">
            <img src={GoogleIcon} alt="google" />
            <img src={AppleIcon} alt="apple" />
            <img src={HuaweiIcon} alt="huawei" />
          </div>
        </div>
        <div className="flex gap-[100px]">
          <LinkGroup title="Банк" links={bankLinks} />
          <LinkGroup title="Baspana" links={aboutLinks} />
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-xl font-semibold">
              300
              <span className="text-sm font-normal text-[#7A7E81]">
                (бесплатно с мобильного)
              </span>
            </p>
            <p className="flex items-center gap-1 text-xl font-semibold">
              8 800 080-18-80
              <span className="text-sm font-normal text-[#7A7E81]">
                (бесплатно для звонков по РК)
              </span>
            </p>
            <p className="flex items-center gap-3 py-3 text-xl font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                  fill="#333839"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 11.5065C5 7.91278 8.11522 5 11.958 5C15.8008 5 18.916 7.91278 18.916 11.5065C18.916 15.1003 15.8008 18.0131 11.958 18.0131C11.2635 18.0131 10.5926 17.9179 9.9597 17.7405L7.58508 19.0578V16.5675C6.00817 15.3749 5 13.5509 5 11.5065ZM15.7569 12.9568C15.7548 12.9336 15.7529 12.9136 15.7521 12.897C15.7441 12.7389 15.6021 12.7147 15.6021 12.7147C15.6021 12.7147 14.4386 12.1511 14.1994 12.0415C13.9605 11.932 13.8388 12.1107 13.8388 12.1107C13.8388 12.1107 13.486 12.5566 13.3724 12.7024C13.363 12.7145 13.354 12.7264 13.3452 12.7381C13.2468 12.8683 13.1697 12.9702 12.8982 12.8808C12.6022 12.7834 12.0087 12.4639 11.5237 12.0294C11.0391 11.595 10.6684 11.0201 10.5632 10.8458C10.4578 10.6712 10.5794 10.562 10.5794 10.562C10.5794 10.562 10.8864 10.2082 11.0333 10.0187C11.1771 9.83334 11.0925 9.62678 11.0559 9.5377C11.0551 9.53575 11.0536 9.53202 11.0536 9.53202C11.0186 9.44684 10.5468 8.3386 10.4779 8.18234C10.4092 8.02594 10.2592 8 10.2592 8H9.69973C9.59967 8 9.40786 8.12164 9.40786 8.12164C8.83294 8.48961 8.73552 9.34836 8.71867 9.53373C8.70182 9.71909 8.68497 10.1125 8.98829 10.7753C9.29161 11.4379 10.0331 12.3368 10.9488 13.1908C11.8315 14.0141 13.1685 14.385 13.6436 14.5168C13.6612 14.5217 13.6776 14.5263 13.6928 14.5305C14.1175 14.6491 15.0143 14.4385 15.4359 13.9831C15.8133 13.5759 15.7749 13.1541 15.7569 12.9568Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="#333839"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.43201 11.8734C8.93026 10.3493 11.263 9.34452 12.4301 8.85905C15.7627 7.47294 16.4551 7.23216 16.9065 7.22421C17.0058 7.22246 17.2277 7.24706 17.3715 7.36372C17.4929 7.46223 17.5263 7.5953 17.5423 7.6887C17.5583 7.78209 17.5782 7.99485 17.5623 8.16109C17.3817 10.0586 16.6003 14.6633 16.2028 16.7885C16.0346 17.6877 15.7034 17.9892 15.3827 18.0187C14.6858 18.0829 14.1567 17.5582 13.4817 17.1158C12.4256 16.4235 11.8289 15.9925 10.8037 15.3169C9.61896 14.5362 10.387 14.107 11.0622 13.4057C11.2389 13.2222 14.3093 10.4295 14.3687 10.1761C14.3762 10.1444 14.3831 10.0263 14.3129 9.96396C14.2427 9.9016 14.1392 9.92293 14.0644 9.93989C13.9585 9.96393 12.2713 11.0791 9.00276 13.2855C8.52385 13.6143 8.09007 13.7745 7.70141 13.7661C7.27295 13.7569 6.44876 13.5239 5.83606 13.3247C5.08456 13.0804 4.48728 12.9513 4.53929 12.5364C4.56638 12.3203 4.86395 12.0993 5.43201 11.8734Z"
                  fill="white"
                />
              </svg>
            </p>
            <p className="flex items-center gap-1 text-xl font-semibold">
              mail@hcsbk.kz
              <span className="text-sm font-normal text-[#7A7E81]">
                для вопросов и предложений
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-t border-[#D1D4D7] py-5">
        <div className="flex items-center justify-between w-full gap-2 max-w-7xl">
          <div className="flex items-center gap-8">
            © 2024 АО «Отбасы банк»
          </div>
          <div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M12.494 0C12.705 0.200172 12.9124 0.393615 13.1198 0.588741C14.0216 1.45335 14.9232 2.31796 15.8244 3.18257C17.0511 4.36005 18.2762 5.53893 19.4999 6.71922C20.1088 7.30796 20.7185 7.8967 21.3176 8.49133C22.4879 9.6562 23.5054 10.9254 24.2394 12.3812C24.5825 13.0408 24.8162 13.7459 24.9323 14.4721C24.9882 14.879 24.9981 15.2903 24.9618 15.6992C24.9325 16.1352 24.8616 16.5679 24.7499 16.9919C24.4495 18.0895 23.7781 18.9213 22.7579 19.5151C22.107 19.8961 21.3927 20.0912 20.6461 20.2031C20.0531 20.2922 19.4531 20.3344 18.8526 20.3292H18.681C18.7248 20.4007 18.7507 20.4461 18.7784 20.4899C19.0189 20.8726 18.9474 21.2132 18.5415 21.4394C18.3251 21.5561 18.0912 21.6412 17.8477 21.6917C17.3819 21.7918 16.9098 21.8701 16.4368 21.9357C15.2177 22.0946 14.074 22.5834 13.1448 23.3427C12.9455 23.5051 12.7711 23.6943 12.5861 23.8718C12.5574 23.8995 12.5315 23.9298 12.4752 23.9895C12.4483 23.9457 12.4185 23.9035 12.3858 23.8634C11.5087 22.9474 10.4465 22.3217 9.15996 22.0593C8.61547 21.9491 8.06204 21.8785 7.51755 21.7716C7.21828 21.7094 6.92304 21.631 6.63331 21.537C6.51976 21.4963 6.41541 21.4358 6.32574 21.3587C6.03696 21.1257 5.99047 20.8658 6.16571 20.5462C6.20058 20.4823 6.24081 20.4209 6.29177 20.336C6.19342 20.3318 6.11832 20.3267 6.04322 20.3259C5.13931 20.3191 4.23898 20.2552 3.3753 19.9945C1.69623 19.4899 0.589365 18.457 0.183455 16.8102C0.0187415 16.1208 -0.0355012 15.4121 0.0225232 14.7076C0.0716973 14.0347 0.278231 13.4006 0.550924 12.7824C1.05697 11.636 1.77312 10.6091 2.5912 9.64106C3.08018 9.07231 3.59971 8.52744 4.14778 8.00856C5.38876 6.8165 6.62794 5.62276 7.86534 4.42733C8.56511 3.75449 9.26606 3.08164 9.9682 2.40879L12.3733 0.0984037C12.4028 0.0672845 12.443 0.0403708 12.494 0ZM12.494 1.09338C12.4697 1.10661 12.4466 1.12181 12.4251 1.13879C11.7635 1.78977 11.1037 2.44412 10.4394 3.09341C9.56617 3.94625 8.69087 4.79824 7.81349 5.64939C7.01955 6.4156 6.21846 7.17423 5.42631 7.94212C4.59559 8.74036 3.82371 9.59096 3.11602 10.488C2.48123 11.2971 1.91349 12.1432 1.50669 13.0785C1.29541 13.5497 1.15285 14.0457 1.08289 14.5528C1.02188 15.0749 1.03662 15.6023 1.12671 16.1206C1.19882 16.5943 1.35667 17.0528 1.59341 17.4764C2.04045 18.267 2.74319 18.8052 3.59256 19.1812C4.24481 19.4581 4.93831 19.6393 5.64893 19.7186C5.8492 19.7439 6.05216 19.7523 6.3025 19.7724C6.22829 19.6883 6.18448 19.6438 6.1514 19.5958C6.07439 19.4996 6.00874 19.3959 5.9556 19.2863C5.92348 19.2128 5.90914 19.1334 5.91362 19.054C5.9181 18.9746 5.94129 18.8971 5.9815 18.8272C6.02172 18.7572 6.07795 18.6965 6.14615 18.6496C6.21434 18.6026 6.29279 18.5704 6.37581 18.5554C6.50048 18.529 6.62919 18.5239 6.75579 18.5403C6.93859 18.5652 7.11829 18.6072 7.29224 18.6656C7.67083 18.792 8.07462 18.8374 8.47421 18.7985C8.58819 18.7904 8.70162 18.7764 8.81395 18.7565C9.62846 18.6 10.3687 18.304 10.9597 17.7304C11.1958 17.4685 11.4178 17.1956 11.6249 16.9129C11.565 17.59 11.2613 18.2276 10.7639 18.7203C10.2755 19.1997 9.65175 19.5379 8.96595 19.6951C9.39153 19.7439 9.82605 19.7792 10.2552 19.8465C10.5583 19.8927 10.8024 20.0584 11.0241 20.267C10.8667 20.4729 10.6494 20.6315 10.3983 20.7237C10.1786 20.8065 9.94381 20.8482 9.70713 20.8465C9.40851 20.8465 9.11079 20.8364 8.81306 20.8305C9.51759 21.0652 10.206 21.3351 10.8203 21.7557C11.4345 22.1762 12.0085 22.6186 12.485 23.1855C13.4935 22.0778 14.7023 21.2561 16.1945 20.8305C16.1428 20.8203 16.0896 20.8183 16.0372 20.8246C15.6613 20.8732 15.2798 20.8686 14.9053 20.8112C14.5256 20.7542 14.1835 20.5624 13.9495 20.2754C14.207 20.01 14.5586 19.8423 14.9384 19.8036C15.2593 19.7682 15.5803 19.7405 15.9218 19.7077C15.6357 19.5841 15.3666 19.4814 15.1109 19.3553C14.6912 19.1554 14.3228 18.8719 14.0314 18.5245C13.74 18.177 13.5327 17.774 13.4238 17.3435C13.3862 17.2047 13.3719 17.06 13.3469 16.9187C13.5469 17.2054 13.7721 17.4758 14.0201 17.727C14.5369 18.2552 15.2075 18.5378 15.9326 18.706C16.5316 18.8448 17.1324 18.8633 17.7207 18.6429C17.8896 18.5884 18.0635 18.549 18.2402 18.5252C18.4111 18.4963 18.5873 18.5221 18.7409 18.5983C18.8657 18.6524 18.9643 18.7487 19.017 18.8681C19.0697 18.9875 19.0726 19.1212 19.0252 19.2426C18.9561 19.3818 18.8735 19.5147 18.7784 19.6396C18.7561 19.6749 18.7292 19.7085 18.681 19.775C18.9912 19.7413 19.2603 19.7178 19.5285 19.6808C20.267 19.5883 20.9824 19.3745 21.6421 19.0491C22.3574 18.6883 22.9475 18.2039 23.3409 17.5277C23.6417 16.9987 23.8242 16.4173 23.8773 15.8195C23.9718 15.0692 23.8972 14.3086 23.6583 13.5873C23.3704 12.737 22.9233 11.9573 22.4021 11.2164C21.5778 10.0389 20.6068 8.96905 19.5688 7.95473C18.3841 6.79575 17.178 5.65612 15.988 4.50135C14.8731 3.41974 13.7671 2.32973 12.6567 1.24308C12.603 1.19178 12.5467 1.14216 12.494 1.09338Z"
                  fill="#008F91"
                />
                <path
                  d="M0.0122929 28.9669V25.1822C0.622051 25.0981 1.22377 25.0392 1.82548 25.1712C1.98417 25.2084 2.13523 25.2701 2.27251 25.3537C2.40046 25.4288 2.50614 25.5331 2.57973 25.6569C2.65332 25.7807 2.69242 25.92 2.6934 26.0619C2.69438 26.2037 2.65721 26.3435 2.58534 26.4682C2.51347 26.5929 2.40924 26.6985 2.28235 26.7751C2.2135 26.8197 2.1393 26.8592 2.04184 26.9114L2.21082 26.9837C2.58633 27.1469 2.81254 27.416 2.83668 27.8096C2.85375 27.999 2.81364 28.1891 2.72095 28.358C2.62826 28.5268 2.48676 28.6677 2.31274 28.7642C2.07522 28.9057 1.8016 28.9844 1.5206 28.9922C1.05747 29.0098 0.592546 28.9922 0.128521 28.9922C0.0890307 28.9871 0.0501211 28.9787 0.0122929 28.9669ZM0.757953 28.4774C1.0673 28.4926 1.35788 28.517 1.63951 28.411C1.74202 28.3796 1.83328 28.3221 1.90319 28.2449C1.9731 28.1677 2.01892 28.0738 2.03558 27.9736C2.07045 27.834 2.04801 27.6871 1.97276 27.5624C1.8975 27.4377 1.77498 27.3442 1.62968 27.3008C1.34804 27.1957 1.05836 27.2268 0.757953 27.231V28.4774ZM0.757953 26.7011C0.94178 26.7096 1.12598 26.708 1.3096 26.6961C1.44347 26.6795 1.57258 26.6384 1.68958 26.5749C1.77762 26.5284 1.84838 26.4575 1.89234 26.372C1.9363 26.2864 1.95134 26.1902 1.93545 26.0964C1.92954 26.0049 1.8941 25.9174 1.83387 25.8454C1.77364 25.7734 1.69148 25.7204 1.59838 25.6935C1.32711 25.6079 1.03539 25.5974 0.757953 25.6632V26.7011Z"
                  fill="#008F91"
                />
                <path
                  d="M18.145 28.9737H17.3797C17.3314 28.8282 17.2724 28.6726 17.2259 28.5128C17.1794 28.353 17.1428 28.1763 17.0945 28.0039C17.0683 27.9065 17.0324 27.8116 16.9872 27.7205C16.9523 27.6424 16.896 27.5744 16.8241 27.5234C16.7521 27.4725 16.6671 27.4403 16.5777 27.4303C16.3989 27.4101 16.2201 27.4051 16.0243 27.3925V28.9695H15.2786V25.1796C15.512 25.1569 15.7426 25.1292 15.9751 25.1132C16.3738 25.0736 16.7767 25.0957 17.1678 25.1788C17.892 25.3537 18.2344 26.0333 17.909 26.6431C17.8109 26.8238 17.6577 26.9728 17.4691 27.0712C17.4199 27.0973 17.3699 27.1216 17.2903 27.1553C17.6667 27.3445 17.7811 27.6683 17.8705 28.0115C17.9564 28.3286 18.0494 28.6389 18.145 28.9737ZM16.0162 26.871C16.229 26.871 16.415 26.8794 16.5992 26.871C16.7057 26.8616 16.8097 26.8352 16.9067 26.7928C17.1651 26.6826 17.2867 26.4648 17.2644 26.1839C17.2596 26.0645 17.2125 25.95 17.1308 25.8586C17.049 25.7672 16.9371 25.704 16.8128 25.6792C16.5546 25.6225 16.2861 25.6205 16.027 25.6733C16.027 25.7322 16.0171 25.7785 16.0171 25.8247C16.0153 26.1712 16.0162 26.5119 16.0162 26.8752V26.871Z"
                  fill="#008F91"
                />
                <path
                  d="M22.9669 27.2335C22.8489 27.363 22.7407 27.4681 22.6504 27.5859C22.6161 27.6435 22.6 27.7092 22.6039 27.7751C22.6039 28.1048 22.6039 28.4345 22.6039 28.7642V28.9728H21.8636V25.1451H22.6003V26.8197L22.6432 26.8289L23.9745 25.1426H24.8981C24.4305 25.7053 23.9656 26.2276 23.5051 26.7751L25 28.982C24.7032 28.982 24.4358 28.9879 24.1685 28.977C24.1229 28.977 24.0702 28.908 24.0389 28.8601C23.7295 28.3924 23.4237 27.9223 23.1162 27.453C23.0706 27.3857 23.025 27.3193 22.9669 27.2335Z"
                  fill="#008F91"
                />
                <path
                  d="M6.78386 28.9745H5.96847C5.84688 28.6195 5.72439 28.2638 5.60011 27.9038H4.31533L3.96843 28.9719H3.19327C3.62421 27.6918 4.05962 26.4193 4.49593 25.1417H5.46332C5.89694 26.4075 6.33504 27.6767 6.78386 28.9745ZM5.46869 27.3529L4.95191 25.7448L4.4548 27.3529H5.46869Z"
                  fill="#008F91"
                />
                <path
                  d="M19.4996 26.707H21.0097V27.2738H19.4996V28.4009C20.0548 28.4084 20.6154 28.4009 21.1912 28.4059V28.9526C21.049 28.9913 19.0561 29.0047 18.7343 28.966V25.1619C18.888 25.1224 20.636 25.1064 21.0973 25.1426V25.7112H19.4996V26.707Z"
                  fill="#008F91"
                />
                <path
                  d="M12.1554 25.1401H14.5185C14.5288 25.3292 14.5288 25.5187 14.5185 25.7078H12.9333C12.8859 25.8659 12.8769 26.4294 12.9154 26.6977H14.4192V27.2738H12.9091V28.4017H14.6079V28.9703H12.1554V25.1401Z"
                  fill="#008F91"
                />
                <path
                  d="M9.73787 25.7322H8.58719V25.1477H11.6574V25.7213H10.4951V28.9728H9.74144C9.74144 28.7667 9.74144 28.5523 9.74144 28.342V25.7347L9.73787 25.7322Z"
                  fill="#008F91"
                />
                <path
                  d="M8.08923 28.9728H7.35787V25.1376C7.59748 25.1283 7.83621 25.1376 8.08923 25.1334V28.9728Z"
                  fill="#008F91"
                />
                <path
                  d="M11.9383 9.14567C11.9115 8.9211 11.8972 8.69318 11.8543 8.47282C11.7856 8.09459 11.6537 7.72897 11.4635 7.38953C11.0854 6.73687 10.5203 6.3155 9.72189 6.22299C9.43675 6.18301 9.14554 6.21018 8.8743 6.30205C8.95307 6.05271 9.09822 5.82643 9.29599 5.64466C9.49376 5.46288 9.73761 5.33162 10.0044 5.26334C10.1965 5.20974 10.3993 5.19925 10.5965 5.2327C10.7937 5.26614 10.9798 5.3426 11.1399 5.45594C11.3574 5.62033 11.5552 5.80645 11.73 6.01104C11.772 6.06402 11.8721 6.17925 11.8721 6.17925C11.8444 6.11533 11.6272 5.56023 11.5342 5.32053C11.3804 4.95756 11.2971 4.57155 11.2883 4.18089C11.2883 3.9587 11.3292 3.73819 11.409 3.52907C11.5878 3.05976 12.2253 2.33477 12.5132 1.95882C12.5302 1.96891 13.1972 2.79988 13.4439 3.25741C13.7132 3.75551 13.7649 4.33292 13.5879 4.86636C13.4815 5.21456 13.3339 5.55098 13.2097 5.89497C13.1837 5.98497 13.1668 6.07328 13.1453 6.16327C13.1453 6.16327 13.2293 6.05898 13.2749 6.0102C13.413 5.84749 13.5624 5.69352 13.722 5.5493C14.2763 5.09849 14.9996 5.11026 15.553 5.56275C15.7989 5.76211 15.9882 6.01588 16.1038 6.3012C16.0081 6.28102 15.9205 6.25915 15.8356 6.24317C15.3318 6.15221 14.8102 6.24902 14.3809 6.51315C14.0064 6.72728 13.7039 7.03663 13.5083 7.40551C13.2475 7.91441 13.0853 8.46294 13.0291 9.02539C13.0183 9.09016 13.0076 9.15492 12.9978 9.21968C13.0112 9.21968 13.2508 8.79494 13.3348 8.68645C13.5603 8.39152 13.8863 8.17805 14.2586 8.0815C14.6309 7.98496 15.0271 8.01115 15.3814 8.15574C15.4332 8.17592 15.4833 8.19863 15.5602 8.23059C15.5602 8.15237 15.5539 8.09602 15.5486 8.03967C15.4878 7.35673 15.975 6.94209 16.6975 7.06404C17.0396 7.11934 17.3496 7.28752 17.5719 7.5384C17.6948 7.67806 17.8086 7.82468 17.9125 7.97743C18.1168 8.28364 18.3902 8.54384 18.7132 8.73962C19.0363 8.93539 19.4012 9.06196 19.782 9.11034C19.8714 9.1238 19.9608 9.14062 20.0574 9.15576C19.4423 9.6974 18.2898 9.97243 16.8521 9.345C16.8579 9.38289 16.8669 9.42029 16.879 9.45685C17.1043 9.97158 16.9612 10.6579 16.5508 11.0305C16.043 11.4905 15.0792 11.4737 14.6286 10.9909C14.3353 10.6764 14.3371 10.3105 14.4354 9.91691C14.6268 10.2693 15.047 10.5738 15.4189 10.4897C15.4953 10.4727 15.5669 10.4402 15.6286 10.3946C15.6904 10.349 15.7408 10.2913 15.7766 10.2256C15.8454 10.1166 15.8874 9.99441 15.8994 9.8681C15.9113 9.7418 15.893 9.61458 15.8457 9.49583C15.7984 9.37708 15.7234 9.26984 15.6262 9.18201C15.5289 9.09418 15.412 9.02801 15.2839 8.98839C14.8065 8.83952 14.3308 8.84877 13.9249 9.17174C13.519 9.4947 13.3947 9.93794 13.4779 10.4333C13.5162 10.6393 13.6003 10.8353 13.7247 11.0086C13.9768 11.382 14.0492 11.7799 13.8802 12.2029C13.848 12.2828 13.7908 12.4258 13.7506 12.5065C13.7506 12.5065 13.8793 12.4182 13.924 12.3913C14.2691 12.1802 14.6286 12.0061 15.0452 11.9624C15.595 11.8945 16.1539 11.9778 16.6545 12.2021C16.9496 12.3375 17.2411 12.4821 17.5415 12.6058C17.9173 12.7742 18.3277 12.8635 18.744 12.8673C19.0696 12.8695 19.3843 12.7564 19.6255 12.5507C19.8668 12.3449 20.0171 12.0614 20.0467 11.7563C20.1012 11.2828 19.5397 10.8572 19.0632 11.017C19.0721 11.033 19.0766 11.0523 19.09 11.0616C19.343 11.2357 19.3582 11.4746 19.2912 11.7344C19.2608 11.85 19.1944 11.9544 19.1006 12.0342C19.0068 12.1141 18.8898 12.1658 18.7646 12.1827C18.6408 12.2067 18.513 12.2046 18.3902 12.1766C18.2674 12.1485 18.1528 12.0952 18.0546 12.0205C17.9563 11.9458 17.8769 11.8515 17.8221 11.7444C17.7672 11.6374 17.7382 11.5202 17.7373 11.4014C17.7297 11.154 17.807 10.9109 17.9577 10.7081C18.1084 10.5053 18.3246 10.3535 18.5741 10.2752C18.9495 10.1611 19.3499 10.1403 19.7364 10.2147C20.0579 10.278 20.3476 10.4408 20.5592 10.6771C20.7709 10.9133 20.8923 11.2095 20.9041 11.5183C20.9179 11.8621 20.867 12.2055 20.7539 12.5326C20.7315 12.6016 20.7092 12.6714 20.6743 12.7849C20.7539 12.7277 20.7986 12.6924 20.8469 12.6613C21.0543 12.5301 21.2546 12.3879 21.4727 12.2727C21.5799 12.2171 21.6984 12.1838 21.8204 12.175C21.9424 12.1661 22.065 12.182 22.1799 12.2214C22.3134 12.2546 22.4306 12.33 22.512 12.4349C22.5934 12.5398 22.634 12.6678 22.627 12.7975C22.6144 13.2694 22.399 13.4704 22.0136 13.5663C21.7945 13.609 21.573 13.6399 21.3502 13.6588C21.4056 13.6865 21.4629 13.7185 21.5228 13.7429C21.9358 13.9171 22.3023 14.1757 22.5957 14.4998C22.9398 14.8859 23.1116 15.3824 23.0749 15.8851C23.0159 17.0037 22.4124 17.7732 21.3663 18.2611C20.94 18.4522 20.4892 18.5907 20.0252 18.6732C19.9816 18.6786 19.9377 18.6814 19.8938 18.6816C19.9125 18.6143 19.9268 18.5596 19.9429 18.5058C19.9862 18.3832 19.9865 18.2508 19.9439 18.1281C19.9012 18.0053 19.8179 17.8986 19.706 17.8237C19.4977 17.6559 19.2345 17.5603 18.9604 17.5529C18.8173 17.5529 18.6743 17.5411 18.5312 17.547C18.4056 17.554 18.2801 17.5322 18.1654 17.4834C18.0508 17.4346 17.9505 17.3603 17.8732 17.2669C17.8088 17.1954 17.7462 17.1214 17.6648 17.0289C17.6586 17.0886 17.6532 17.1298 17.6514 17.171C17.651 17.3855 17.6369 17.5998 17.6094 17.8128C17.52 18.2686 17.1624 18.341 16.7618 18.2611C16.6723 18.2418 16.5881 18.2048 16.515 18.1525C16.4419 18.1002 16.3815 18.0338 16.3379 17.9577C16.2943 17.8816 16.2685 17.7977 16.2622 17.7115C16.2559 17.6253 16.2693 17.5388 16.3014 17.4578C16.3644 17.3228 16.4401 17.1934 16.5276 17.071C16.5571 17.0222 16.592 16.9768 16.6429 16.9027C16.6127 16.906 16.5828 16.9116 16.5535 16.9196C15.8052 17.2938 14.6956 16.9112 14.3237 16.0667C13.9947 15.3199 14.135 14.6453 14.7484 14.0894C14.9159 13.9364 15.1278 13.8335 15.3575 13.7938C15.5872 13.7542 15.8242 13.7795 16.0385 13.8665C16.2247 13.9345 16.375 14.0687 16.4568 14.2401C16.5386 14.4115 16.5454 14.6064 16.4757 14.7824C16.4433 14.8939 16.376 14.9936 16.2826 15.0685C16.1891 15.1435 16.0739 15.1904 15.9518 15.203C15.6505 15.24 15.3796 15.1836 15.2026 14.9212C15.1579 14.8548 15.1257 14.7799 15.064 14.6647C15.0094 15.0852 14.9996 15.4544 15.2669 15.7774C15.3706 15.9007 15.5208 15.9818 15.6863 16.0037C15.9981 16.0625 16.3221 16.0176 16.6027 15.8767C16.7551 15.8036 16.8867 15.6972 16.9862 15.5663C17.3582 14.9986 17.4556 14.3989 17.1043 13.7875C16.7529 13.176 16.0895 12.9203 15.3644 12.9943C15.1537 13.0132 14.9492 13.0715 14.7629 13.166C14.5766 13.2605 14.4124 13.3892 14.2799 13.5444C14.1855 13.662 14.084 13.7743 13.9759 13.8808C13.8745 13.9746 13.7584 14.0531 13.6317 14.1138C13.3867 14.2265 13.1802 14.1432 13.0756 13.9069C13.0461 13.8405 13.021 13.7706 12.9915 13.6975C12.9642 13.6991 12.9376 13.7061 12.9133 13.7181C12.8891 13.7301 12.8679 13.7467 12.851 13.767C12.8341 13.7872 12.822 13.8106 12.8154 13.8356C12.8088 13.8606 12.8079 13.8866 12.8127 13.9119C12.8215 14.0389 12.8445 14.1647 12.8815 14.2871C12.954 14.5394 13.0425 14.7917 13.114 15.044C13.1374 15.1489 13.1508 15.2556 13.1542 15.3628C13.1671 15.4467 13.1537 15.5323 13.1158 15.6092C13.0778 15.6861 13.017 15.751 12.9406 15.7959C12.7617 15.9044 12.7009 16.0482 12.7126 16.2577C12.7456 16.8355 12.7671 17.4124 12.8753 17.9844C12.9268 18.2493 13.0318 18.5026 13.1846 18.7304C13.3116 18.9247 13.4296 19.1248 13.5369 19.33C13.6496 19.5497 13.6921 19.7954 13.6594 20.0374C13.6505 20.1726 13.6031 20.3031 13.5223 20.4152C13.4414 20.5274 13.3301 20.6171 13.1998 20.6749C13.1355 20.7043 13.0702 20.7321 13.0058 20.759C12.7251 20.8843 12.692 20.9785 12.8601 21.2275C12.9495 21.3578 13.0559 21.4798 13.1569 21.5975C13.1954 21.6446 13.2383 21.6892 13.2812 21.738L12.4899 22.733L11.6987 21.7388C11.7792 21.648 11.8703 21.5538 11.9499 21.4529C12.0336 21.3523 12.1084 21.2454 12.1734 21.1333C12.2628 20.9777 12.2235 20.8868 12.0608 20.7969C12.0028 20.7679 11.9431 20.742 11.882 20.7195C11.4537 20.5513 11.2561 20.2502 11.3205 19.722C11.3512 19.5497 11.4075 19.3824 11.4877 19.2249C11.5558 19.0768 11.6403 18.9358 11.7398 18.8044C11.9739 18.4876 12.1134 18.1176 12.1439 17.7329C12.1949 17.1971 12.2208 16.6597 12.2593 16.1222C12.2644 16.0822 12.2589 16.0416 12.2433 16.004C12.2277 15.9665 12.2025 15.9331 12.1699 15.9069C12.1401 15.8771 12.1085 15.849 12.0751 15.8228C11.8069 15.663 11.7774 15.4242 11.8346 15.166C11.8811 14.9557 11.9526 14.7513 12.0134 14.5427C12.0742 14.3342 12.1234 14.1407 12.1636 13.9363C12.1767 13.8818 12.1663 13.8246 12.1346 13.7773C12.1029 13.73 12.0526 13.6965 11.9946 13.684C11.966 13.7496 11.9374 13.8127 11.9106 13.8766C11.797 14.1466 11.5825 14.2341 11.3133 14.0978C11.1841 14.0278 11.0664 13.9406 10.9638 13.8388C10.8431 13.7252 10.7465 13.5865 10.6294 13.4704C10.1144 12.9565 9.47602 12.8682 8.79563 13.0633C8.11524 13.2584 7.76207 13.7261 7.67177 14.3636C7.61643 14.7692 7.71729 15.18 7.95609 15.5217C8.23504 15.9339 8.91364 16.1349 9.40449 15.9675C9.52258 15.9273 9.62821 15.8602 9.71186 15.7721C9.79552 15.684 9.85457 15.5778 9.88371 15.4629C9.96239 15.2147 9.94809 14.9633 9.91232 14.6647C9.86494 14.7555 9.83901 14.8068 9.81129 14.8565C9.65394 15.1399 9.33565 15.2669 8.96997 15.1929C8.82673 15.1586 8.6995 15.0809 8.60801 14.9717C8.51651 14.8625 8.46587 14.728 8.46393 14.589C8.438 14.1542 8.74287 13.832 9.2364 13.7807C9.42855 13.7558 9.62425 13.7745 9.80716 13.8352C9.99007 13.8959 10.1549 13.9969 10.2878 14.1298C10.4693 14.2975 10.6114 14.4992 10.7048 14.7218C10.7983 14.9444 10.8411 15.1829 10.8305 15.422C10.8199 15.6612 10.7561 15.8955 10.6432 16.11C10.5303 16.3245 10.3709 16.5143 10.1752 16.6673C9.6593 17.06 9.07368 17.1988 8.43263 16.9263C8.40849 16.9154 8.38256 16.9078 8.31372 16.8826C8.35753 16.949 8.37988 16.9843 8.40313 17.0188C8.49337 17.1397 8.57491 17.2662 8.64721 17.3973C8.69407 17.4906 8.71547 17.5934 8.70946 17.6964C8.70345 17.7995 8.67024 17.8995 8.61281 17.9874C8.55538 18.0753 8.47556 18.1484 8.38057 18.2C8.28557 18.2516 8.1784 18.2801 8.06874 18.2829C7.62171 18.3115 7.39729 18.1425 7.34365 17.7211C7.31593 17.5092 7.31683 17.2938 7.30252 17.0483C7.25245 17.1012 7.21311 17.1391 7.17467 17.1828C6.97618 17.4284 6.72764 17.5739 6.38521 17.5462C6.25675 17.5406 6.12805 17.5425 5.99985 17.552C5.72543 17.5605 5.46271 17.6587 5.25688 17.8296C5.03694 18.0062 4.93591 18.2207 5.02711 18.494C5.04409 18.5445 5.05572 18.5975 5.07628 18.6707C5.029 18.6749 4.9814 18.6749 4.93412 18.6707C4.42805 18.5804 3.93843 18.4221 3.48035 18.2005C2.84824 17.8809 2.3574 17.4385 2.09454 16.7976C1.91584 16.3767 1.8543 15.9199 1.91572 15.4704C1.9953 14.9069 2.31269 14.4612 2.78745 14.1298C3.04315 13.9498 3.32925 13.8077 3.6091 13.6445C3.5538 13.6443 3.49856 13.6409 3.4437 13.6344C3.23177 13.6123 3.02233 13.5726 2.81785 13.5158C2.4325 13.3804 2.23938 12.9203 2.39048 12.5595C2.42508 12.478 2.47936 12.4052 2.54904 12.3468C2.61871 12.2884 2.70186 12.2461 2.79192 12.2231C2.9071 12.1841 3.02976 12.1685 3.15181 12.1774C3.27387 12.1862 3.39255 12.2193 3.50003 12.2744C3.69851 12.3787 3.88358 12.5065 4.07313 12.626C4.13124 12.663 4.1831 12.7101 4.27519 12.7765C4.25462 12.6924 4.24658 12.6411 4.23227 12.5948C4.108 12.2054 4.02753 11.8127 4.08117 11.4022C4.12068 11.0859 4.27624 10.7925 4.52105 10.5725C4.76586 10.3525 5.08458 10.2197 5.42229 10.197C5.70019 10.1817 5.97904 10.1978 6.25288 10.2449C6.54753 10.299 6.81029 10.4542 6.99007 10.6804C7.16986 10.9065 7.25382 11.1875 7.22563 11.4687C7.16931 11.9901 6.59978 12.3291 6.09731 12.1415C5.9891 12.1019 5.8934 12.0369 5.81924 11.9528C5.74508 11.8688 5.69491 11.7683 5.67344 11.6609C5.65197 11.5536 5.65992 11.4428 5.69654 11.3391C5.73315 11.2355 5.79723 11.1423 5.88273 11.0683C5.89704 11.0557 5.90866 11.0389 5.94711 10.996C5.85272 10.9798 5.75696 10.9716 5.661 10.9716C5.54974 10.9828 5.44218 11.0156 5.34518 11.0681C5.24818 11.1206 5.16389 11.1915 5.09767 11.2763C5.03146 11.3612 4.98478 11.4581 4.96062 11.5609C4.93646 11.6636 4.93535 11.77 4.95737 11.8732C5.01494 12.1429 5.16753 12.3864 5.39046 12.5643C5.61339 12.7423 5.89362 12.8443 6.18582 12.8539C6.54456 12.8664 6.9018 12.8041 7.23189 12.6714C7.58147 12.5351 7.92212 12.3779 8.26187 12.2206C8.87307 11.9272 9.57644 11.8516 10.2422 12.0078C10.5587 12.094 10.8561 12.233 11.1202 12.4182L11.249 12.5023L11.2758 12.5183L11.2588 12.4931L11.1819 12.3661C10.9235 11.8749 10.9745 11.4073 11.2892 10.9523C11.4182 10.7681 11.4996 10.5581 11.5271 10.3391C11.5546 10.1201 11.5273 9.89803 11.4475 9.69067C11.2463 9.11202 10.6294 8.79999 9.95256 8.91521C9.82605 8.93564 9.70286 8.97126 9.58599 9.02119C9.09783 9.23482 8.936 9.81767 9.23462 10.2609C9.43489 10.5578 9.93826 10.6032 10.2118 10.345C10.3283 10.2139 10.4318 10.0732 10.5212 9.92448C10.5595 10.0002 10.5874 10.0802 10.6043 10.1625C10.6821 11.0036 9.99369 11.3879 9.41164 11.3568C9.18275 11.3505 8.95701 11.3049 8.74556 11.2222C8.4797 11.1142 8.26835 10.9138 8.15547 10.6629C8.05797 10.4716 8.00299 10.2636 7.99392 10.0516C7.98485 9.83955 8.02187 9.62803 8.10272 9.42994C8.11613 9.39882 8.14206 9.32733 8.14832 9.31556L8.1054 9.32986C7.59405 9.59124 7.01782 9.71956 6.43616 9.7016C5.88452 9.69488 5.39278 9.50143 4.94485 9.20454C4.93501 9.19781 4.93233 9.18183 4.91713 9.15491C5.07806 9.12548 5.23453 9.09688 5.3901 9.06661C5.72397 9.00372 6.04121 8.87898 6.32333 8.69964C6.60546 8.5203 6.84684 8.28995 7.03341 8.02201C7.15663 7.84122 7.29222 7.66815 7.43932 7.50392C7.57394 7.35436 7.74281 7.23543 7.93327 7.15605C8.12373 7.07666 8.33083 7.03888 8.53903 7.04554C8.60317 7.04753 8.66695 7.05541 8.72947 7.06909C9.26591 7.18095 9.51089 7.52158 9.43579 8.03126C9.42684 8.0893 9.4179 8.14817 9.40985 8.19947C9.60745 8.13626 9.809 8.08458 10.0134 8.04472C10.7152 7.948 11.274 8.18349 11.6817 8.7285C11.7792 8.86139 11.9383 9.14567 11.9383 9.14567ZM20.1718 17.235C20.4268 17.2788 20.6874 17.2847 20.9443 17.2526C21.5961 17.1685 22.0422 16.7842 22.1531 16.2156C22.2446 15.7972 22.1895 15.3622 21.996 14.9757C21.8026 14.5892 21.4813 14.272 21.0802 14.0717C20.4195 13.7244 19.7221 13.6975 19.0015 13.843C18.9655 13.8552 18.9313 13.8716 18.8996 13.8918C19.0194 13.9279 19.1231 13.954 19.2223 13.9893C19.344 14.0307 19.4531 14.0994 19.5402 14.1893C19.6272 14.2793 19.6897 14.3879 19.7221 14.5057C19.75 14.5861 19.759 14.6713 19.7484 14.7553C19.7378 14.8392 19.7078 14.92 19.6607 14.9921C19.6136 15.0641 19.5504 15.1256 19.4754 15.1723C19.4005 15.2191 19.3157 15.2499 19.2268 15.2627C18.8557 15.3241 18.4901 15.1508 18.2764 14.8102L18.1566 14.621C17.9567 14.9696 17.8729 15.3666 17.9161 15.7606C18.0216 16.4023 18.5133 16.7522 19.1731 16.6538C19.3392 16.639 19.4926 16.5637 19.6003 16.4439C19.7081 16.3241 19.7618 16.1694 19.7498 16.0129C19.7498 15.9246 19.7337 15.8363 19.7248 15.7421C20.3301 15.9599 20.8165 16.6168 20.1718 17.235ZM5.2542 15.7211C5.23989 15.8186 5.22827 15.8834 5.22112 15.949C5.18357 16.2854 5.38026 16.5672 5.73342 16.6387C6.26271 16.7455 6.80005 16.5823 6.99585 15.9759C7.14963 15.5032 7.04771 15.0507 6.81704 14.5898C6.76965 14.6739 6.73479 14.7404 6.69545 14.8035C6.62034 14.9345 6.51135 15.0457 6.37853 15.1267C6.24571 15.2077 6.09334 15.2559 5.93548 15.2669C5.46878 15.3064 5.13082 14.9439 5.24347 14.5226C5.27142 14.4037 5.33021 14.2931 5.41461 14.2008C5.49901 14.1085 5.60639 14.0373 5.72716 13.9935C5.83177 13.9532 5.94263 13.9262 6.06691 13.8876C6.03445 13.8678 5.99965 13.8517 5.9632 13.8396C5.30427 13.7109 4.65875 13.7185 4.03736 14.0019C3.14329 14.409 2.69625 15.1618 2.80265 16.0886C2.86255 16.605 3.13971 16.9801 3.6699 17.1668C3.98289 17.265 4.3154 17.2955 4.64265 17.256C4.69445 17.2473 4.74554 17.2353 4.79554 17.2198L4.69451 17.1155C4.60798 17.03 4.54613 16.925 4.51484 16.8106C4.48354 16.6963 4.48384 16.5763 4.51569 16.462C4.60421 16.0911 4.89925 15.9036 5.2542 15.7219V15.7211Z"
                  fill="#008F91"
                />
              </svg>
              <img src={LogoIcon} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
