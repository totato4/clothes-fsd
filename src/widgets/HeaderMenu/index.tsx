import Menu from "./desktop/Menu";
import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";
import HeaderMobile from "./mobile/HeaderMobile";

function HeaderMenu() {
  const { isMobile }: MatchMediaProps = useMatchMedia();
  return <>{isMobile ? <HeaderMobile /> : <Menu />}</>;
}

export default HeaderMenu;
