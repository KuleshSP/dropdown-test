import {
  IFlagDeutsch,
  IFlagEnglish,
  IFlagItalian,
  IFlagPolish,
  IFlagRussian,
  IFlagSpain,
} from 'icons';
import {ComponentBaseProps} from 'types/components';

export const LANGUAGES = {
  DEUTSCH: 'deutsch',
  ENGLISH: 'english',
  ITALIAN: 'italian',
  POLISH: 'polish',
  RUSSIAN: 'russian',
  SPAIN: 'spain',
};

export const LANGS_LIST: {
  id: string;
  Icon: React.FC<ComponentBaseProps>;
  title: string;
}[] = [
  {
    id: LANGUAGES.RUSSIAN,
    Icon: IFlagRussian,
    title: 'русский',
  },
  {
    id: LANGUAGES.ENGLISH,
    Icon: IFlagEnglish,
    title: 'английский',
  },
  {
    id: LANGUAGES.SPAIN,
    Icon: IFlagSpain,
    title: 'испанский',
  },
  {
    id: LANGUAGES.DEUTSCH,
    Icon: IFlagDeutsch,
    title: 'немецкий',
  },
  {
    id: LANGUAGES.ITALIAN,
    Icon: IFlagItalian,
    title: 'итальянский',
  },
  {
    id: LANGUAGES.POLISH,
    Icon: IFlagPolish,
    title: 'польский',
  },
];
