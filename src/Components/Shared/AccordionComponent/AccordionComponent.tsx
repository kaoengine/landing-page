import * as React from "react";

import faker from "faker";
import _ from "lodash";
import { Accordion } from "semantic-ui-react";

type IState = {
  activeIndex: boolean;
};
const panels = _.times(1, i => ({
  key: `panel-${i}`,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs()
}));

export default class AccordionComponent extends React.Component<IState> {
  state: IState = { activeIndex: true };

  public handleTitleClick = (val: boolean) => {
    this.setState({ activeIndex: !val });
  };
  public render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <Accordion
          value={this.props.children}
          panels={panels}
          onClick={() => this.handleTitleClick(activeIndex)}
        />
      </div>
    );
  }
}
