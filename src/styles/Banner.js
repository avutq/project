import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  padding-bottom: 80px;
`;

export const BannerStartups = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid #ecedef;
  transition: 0.3s;

  :hover {
    background: #ecedef;
    cursor: pointer;
  }
`;

export const CenteredBanner = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
`;

export const BannerProfessionals = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid #ecedef;
  border-left: none;
  transition: 0.3s;

  :hover {
    background: #ecedef;
    cursor: pointer;
  }
`;

export const MainText = styled.div`
  font-size: 41px;
  font-weight: bold;
  background: #117259;
  color: white;
  width: 450px;
  padding: 5px;
`;

export const BannerCard = styled.div`
  padding: 15px;
  background: white;
`;

export const SubText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #060a14;
`;

export const ImageStartups = styled.div`
  position: absolute;
  height: 300px;
  width: 200px;
  background: #117259;
`;

export const FemaleProfessional = styled.img`
  position: absolute;
  width: 85%;
  z-index: -10;
  bottom: -10px;
  right: -40px;
`;

export const StartUp = styled.img`
  position: absolute;
  width: 75%;
  z-index: -10;
  bottom: -20px;
  left: -10px;
`;