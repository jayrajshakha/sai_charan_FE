import styled from "styled-components";
import Flex from "../../lib/helper/flex";

const MainWrapper = styled(Flex)`
  // width: 90%;
  margin: 0 auto;
  // padding: 10px 0;
  // max-width: 1200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainWrapper;

export const MainContainer = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
