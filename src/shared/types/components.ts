import {
  CheckboxProps,
  DropdownProps,
  InputProps,
  RadioProps,
  SelectProps,
  SwitchProps,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { TooltipPlacement } from 'antd/es/tooltip';
import { AriaRole, ReactNode, MouseEventHandler } from 'react';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

import { EAlbumKeys, TAlbum } from './album';
import { EArtistKeys, TArtist } from './artist';
import { EMusicTrackKeys, TMusicTrack } from './music-track';

export type TAlbumInformation = Pick<
  TAlbum,
  EAlbumKeys.COLLECTION_NAME | EAlbumKeys.RELEASE_DATE | EAlbumKeys.ARTIST_NAME
>;

export type TCustomAddToFavoriteButton = {
  title: string;
  isAddedToFav: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};

export type TCustomArtistSection = Pick<TArtist, EArtistKeys.ARTIST_NAME | EArtistKeys.ARTIST_ID>;

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
  testId?: string;
};

export type TCustomMainContentWrapper = {
  className?: string;
};

export type TCustomSection = {
  title: string;
  redirectionUrl: string;
};

export type TCustomSectionItem = {
  href: string;
  items?: ItemType[];
};

export type TCustomContextMenu = {
  items: ItemType[];
  position?: DropdownProps['placement'];
  wrapperClassName?: string;
  onOpenChange?: (open: boolean) => void;
};

export type TCustomSectionItemImage = { imageUrl: string };

export type TCustomSectionItemPlayButton = {
  isActive: boolean;
  isPlaying: boolean;
  onClick: () => void;
};

export type TCustomSongPlayButton = {
  song: TMusicTrack;
};

export type TCustomSubheader = {
  title: string | JSX.Element;
};

export type TCustomTooltip = {
  title: string;
  open?: boolean;
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

export type TMusicTrackInformationProps = {
  trackName: string;
  artistName: string;
  artistId: number;
};

export type TSongItem = Pick<
  TMusicTrack,
  | EMusicTrackKeys.ARTIST_NAME
  | EMusicTrackKeys.COLLECTION_NAME
  | EMusicTrackKeys.TRACK_NAME
  | EMusicTrackKeys.PREVIEW_URL
  | EMusicTrackKeys.ARTWORK_URL_60
  | EMusicTrackKeys.ARTIST_ID
  | EMusicTrackKeys.COLLECTION_ID
  | EMusicTrackKeys.TRACK_ID
  | EMusicTrackKeys.TRACK_TIME_MILLIS
>;

export type ResultPage = {
  params: { id: string };
};
