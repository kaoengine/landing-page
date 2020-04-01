import React, { FunctionComponent } from "react";
import { Item } from 'semantic-ui-react';

export enum Size {
  Tiny = 'tiny',
}

type TileProps = {
  imgSRC?: string;
  size?: Size;
  content: string;
}

export const Tile: FunctionComponent<TileProps> = ({imgSRC, size, content}) => {
  return (
    <Item>
      <Item.Image size={size} src={imgSRC} />
      <Item.Content verticalAlign='middle'>{content}</Item.Content>
    </Item>
	)
};
