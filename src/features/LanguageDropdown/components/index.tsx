import React, {useState} from 'react';
import {Dropdown} from 'components';
import {LANGS_LIST} from '../services/constants';

const LanguageDropdown = (): JSX.Element => {
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);

  console.log(selectedLangs);

  return <Dropdown onChange={(langs) => setSelectedLangs(langs)} items={LANGS_LIST} />;
};

export default LanguageDropdown;
