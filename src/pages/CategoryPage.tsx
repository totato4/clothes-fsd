import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";
import Header from "../entities/product/ui/Header";
import { useGetCategoryProductQuery } from "entities/product/api/productApi";
import ProductCard from "entities/product/ui/ProductCard";
import ItemPageLoader from "entities/product/ui/ItemPageLoader";
import { SidebarFilter } from "features/product/SidebarFilter/LeftSidebar";
import { PaginationComponent } from "features/product/PaginationComponent/PaginationComponent";
import TagsList from "features/product/tagsList";
import { useLocation } from "react-router-dom";
import SortComponent from "widgets/SortComponent/SortComponent";
import ResetButton from "features/ResetButton/ResetBtn";

export const CategoryPage = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();
  const location = useLocation();
  console.log(location.search);
  const { data, isError, isLoading, isSuccess } =
    useGetCategoryProductQuery(location);
  console.log(data);
  return (
    <>
      <div
        className={`${
          isMobile && "mt-[90px] max-w-[1144px] min-h-screen mx-auto"
        } ${isTablet && "mt-[90px] max-w-[1144px] min-h-screen mx-auto"}
          ${isDesktop && "mt-[90px] max-w-[1144px] min-h-screen mx-auto"}
          `}
      >
        <div className="grid grid-cols-Category1 gap-10">
          {!isMobile && <SidebarFilter />}

          <div>
            <div className="grid gap-[30px] mb-[23px] ">
              <Header totalCount={data?.totalCount && data.totalCount} />
              <TagsList />
              <SortComponent />
            </div>
            <div className="flex flex-wrap gap-x-[5px] gap-y-[30px] min-h-[500px] ">
              {isSuccess &&
                data &&
                data.product.map((obj, i) => (
                  <ProductCard item={obj} key={obj.title + i} />
                ))}
              {isSuccess && !data && (
                <div className="w-full h-full mx-auto pt-5">
                  Товары по запросу не найдены...
                </div>
              )}
              {isLoading &&
                [...new Array(8)].map((_, index) => (
                  <ItemPageLoader key={index} />
                ))}
              {isError && (
                <div className="m-auto max-h-300px max-w-300px">
                  <ResetButton />
                </div>
              )}
            </div>
            <PaginationComponent totalPages={16} />
            <CategoryFooter />
          </div>
        </div>
      </div>
    </>
  );
};

const CategoryFooter = () => {
  return (
    <div className="max-w-[911px] mx-auto text-[11px] leading-[13.41px] text-gc1 font-normal grid gap-y-[10px]">
      <p>
        Как только на улице становится прохладно, на смену футболкам и рубашкам
        приходят уютные джемперы и кардиганы. Впрочем, последние могут прийти не
        на смену, а в дополнение к легкой одежде. Пожалуй, главным преимуществом
        кардиганов является возможность создавать с их помощью модные
        многослойные образы, а при необходимости, если станет жарко, например, в
        помещении, их можно снять.
      </p>
      <p>
        Джемпером называют любую вязаную одежду плечевой группы с длинным
        рукавом. В отличие от кардигана, джемпер не распашной, то есть
        надевается через голову. Воротник или вырез у джемпера может иметь
        разную форму. Джемпер с высоким горлом называется свитер.
      </p>
      <p>Классика и фэшн</p>
      <p>
        В гардеробе каждой женщины есть однотонные джемперы и кардиганы простого
        кроя, которые можно отнести к категории must have. Их легко
        комбинировать с другой одеждой, к тому же они не выходят из моды. Однако
        настоящие модницы следят за трендами и предпочитают иметь и ультрамодные
        джемперы. В этом сезоне стоит обратить внимание на объемные свитера в
        стиле oversize, просторные кардиганы-накидки. В моде удлиненные модели и
        длинные рукава. В отношении цветовой гаммы прослеживается тенденция к
        моде на однотонные джемперы спокойных оттенков.
      </p>
    </div>
  );
};
