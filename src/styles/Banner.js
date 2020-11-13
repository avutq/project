import styled from "styled-components";

export const BannerContainer = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  padding-bottom: 80px;
`;

export const BannerStartups = styled.div`
  position: relative;
  background: #CAD0D3;
  width: 50%;
  height: 100%;
  border: 5px solid white;
  border-radius: 18px;
  margin: 10px;
  transition: 0.3s;

  :hover {
    background: #DCECF9;
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
  background: #80BB96;
  margin: 10px;
  border-radius: 18px;
  height: 100%;
  border: 1px solid #ecedef;
  border-left: none;
  transition: 0.3s;

  :hover {
    background: #DCECF9;
    cursor: pointer;
  }
`;

export const MainText = styled.div`
  font-size: 41px;
  font-weight: bold;
  color: black;
  width: 450px;
  padding: 5px;
`;

export const BannerCard = styled.div`
  padding: 15px;
  background: white;
  border-radius: 10px;
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
  border-radius: 10px;
`;

export const StartUp = styled.img`
  position: absolute;
  width: 75%;
  z-index: -10;
  bottom: -20px;
  left: -10px;
  border-radius: 10px;
`;
