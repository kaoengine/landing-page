import React, { Fragment, FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FetchVideo } from "../../../Actions";
const PopUpWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 10rem 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const PopUpInner = styled.div`
  position: absolute;
  left: 50%
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const _Button = styled.button`
  color: #ffffff;
  background: #888;
  padding-right: 8px;
  text-align: center;
`;

type PopUpProps = {
  url: any;
  FetchVideo: any;
  isDisplay: any;
};

const PopUp: FunctionComponent<PopUpProps> = ({
  url,
  isDisplay,
  FetchVideo,
}) => {
  return (
    <Fragment>
      <PopUpWrapper>
        <PopUpInner>
          <FlexWrapper>
            <_Button onClick={() => FetchVideo(isDisplay)}>X</_Button>
          </FlexWrapper>
          <iframe src={url} width="500" height="500" />
        </PopUpInner>
      </PopUpWrapper>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state,
    FetchVideo,
  };
};
export default connect(mapStateToProps, { FetchVideo })(PopUp);
