import * as React from "react";

import faker from "faker";
import times from "lodash/times";
import { Accordion } from "semantic-ui-react";

const panels = times(1, i => ({
  key: `panel-${i}`,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs()
}));

export default class AccordionComponent extends React.Component {

  private _handleTitleClick = (e: Event, data: any) => {
    e.preventDefault();
    const { active } = data;
    console.info('active', active);

  };

  public render() {
    return (
      <div>
        <Accordion
          value={this.props.children}
          panels={panels}

          onTitleClick={(e: any, data) => {
            this._handleTitleClick(e, data);
          }}

        />
      </div>
    );
  }
}
