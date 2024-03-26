import type { NextPage } from "next";
import BannerHome from "../../../components/home-page/BannerHome";
import Category from "../../../components/Category";

const MisiunePage: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black flex flex-col justify-center items-center">
        <Category />
        <div className="flex flex-col w-full">
          <BannerHome textPrimary="misiune&" textSecondary="valori" />
        </div>
        <div className="max-w-[1126px] flex mx-8">
          <p className="w-full text-11xl mt-2 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum...
          </p>
        </div>
      </div>
    </>
  );
};

export default MisiunePage;
