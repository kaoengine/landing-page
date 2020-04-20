import * as React from "react";
import IconImage from "../IconImage/IconImage";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 10px 25px 0;
  justify-content: row;
`;
class CardFancy extends React.Component {
  public render() {
    return (
      <Wrapper>
        <IconImage />
        <IconImage />
        <IconImage />
        <IconImage />
      </Wrapper>
    );
  }
}

export default CardFancy;
