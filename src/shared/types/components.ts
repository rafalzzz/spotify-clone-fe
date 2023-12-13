import { CheckboxProps, InputProps, RadioProps, SelectProps, SwitchProps } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';
import { TooltipPlacement } from 'antd/es/tooltip';
import { AriaRole, ReactNode, MouseEventHandler } from 'react';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

import { EAlbumKeys, TAlbum } from './album';
import { EArtistKeys, TArtist } from './artist';

export type TAlbumInformation = Pick<
  TAlbum,
  EAlbumKeys.COLLECTION_NAME | EAlbumKeys.RELEASE_DATE | EAlbumKeys.ARTIST_NAME
>;

export type TCustomAddToFavoriteButton = {
  title: string;
  disabled?: boolean;
  isAddedToFav?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};

export type TCustomArtistSection = Pick<TArtist, EArtistKeys.ARTIST_NAME>;

export type TCustomButton = {
  htmlType: 'reset' | 'submit' | 'button' | undefined;
  text: ReactNode;
  shape?: 'default' | 'circle' | 'round';
  type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed';
  className?: string;
  role?: AriaRole;
  disabled?: boolean;
  testId?: string;
  width?: string | number;
  size?: SizeType;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};

export type TOptionType = { label: string; value: string | number };

export interface ExtendedSelectProps extends SelectProps {
  options: TOptionType[];
}

export interface ExtendedRadioProps extends RadioProps {
  options: TOptionType[];
}

export interface ExtendedCheckboxProps extends CheckboxProps {
  label: string;
}

export interface ExtendedSwitchProps extends SwitchProps {
  label: string;
}

export type TCustomFormItem<T = string> = {
  type: EInputType | ENonStandardInputType;
  name: T;
  label?: string;
  rules?: Rule[];
  key?: T;
  selectProps?: ExtendedSelectProps;
  inputProps?: InputProps;
  radioProps?: ExtendedRadioProps;
  checkboxProps?: ExtendedCheckboxProps;
  switchProps?: ExtendedSwitchProps;
  setFieldValue?: (name: NamePath, value: string | number | boolean) => void;
};

type TCustomFormItemKeys = 'type' | 'key' | 'name' | 'label';
export type TNonStandardItemProps = Pick<TCustomFormItem, TCustomFormItemKeys>;

export type TCustomHeadSection = {
  title: string;
  icon?: string;
  description: string;
  keywords: string;
};

export type TCustomHeader = {
  title: string;
};

export type TCustomHyperlink = {
  href: string;
  hyperlinkText: string;
  textBeforeHyperlink?: string;
  textAfterHyperlink?: string;
  className?: string;
};

export type TCustomIconButton = {
  onClick?: () => void;
  isActive?: boolean;
};

export type TCustomMainContentWrapper = {
  className?: string;
};

export type TCustomSection = {
  title: string;
  redirectionUrl: string;
};

export type TCustomSectionItem = {
  collectionName: string;
  imageUrl: string;
  isActive: boolean;
  isPlaying: boolean;
  onClick: () => void;
};

export type TCustomSubheader = {
  title: string | JSX.Element;
};

export type TCustomTooltip = {
  title: string;
  mouseEnterDelay?: number;
  placement?: TooltipPlacement;
  testId?: string;
};

export type THookForm = {
  displayError: (description: string) => void;
};

export type TCustomSectionLoader = {
  SectionItemLoader: () => JSX.Element;
};