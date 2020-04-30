import * as React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledIcon = styled.div`
  padding: 15px;
  width: 65px;
  height: 65px;
  boxshadow: 0 30px 40px 0 rgba(52, 27, 159, 0.1);
  background: #fff;
  margin-right: 10px;
  text-align: center;
`;

class IconImage extends React.Component {
  public render() {
    return (
      <StyledIcon>
        <Image src="/img/image-icon-1.png" />
      </StyledIcon>
    );
  }
}

export default IconImage;
