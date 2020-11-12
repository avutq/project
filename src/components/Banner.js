import React from "react";
import {
  BannerContainer,
  BannerStartups,
  BannerProfessionals,
  MainText,
  SubText,
  CenteredBanner,
  FemaleProfessional,
  BannerCard,
  StartUp,
} from "../styles/Banner";

import FemaleImage from "../../public/images/fp.jpg";
import StartupImage from "../../public/images/sp.jpg";

function Banner() {
  return (
    <div className="container-full">
      <BannerContainer>
        <BannerStartups>
          <CenteredBanner>
            <StartUp src={StartupImage} alt="Startup Space" />
            <BannerCard>
              <MainText>For Startups</MainText>
              <SubText>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </SubText>
            </BannerCard>
          </CenteredBanner>
        </BannerStartups>

        <BannerProfessionals>
          <CenteredBanner>
            <FemaleProfessional src={FemaleImage} alt="Female Progessional" />

            <BannerCard>
              <MainText>For Female Professional</MainText>
              <SubText>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </SubText>
            </BannerCard>
          </CenteredBanner>
        </BannerProfessionals>
      </BannerContainer>
    </div>
  );
}

export default Banner;
