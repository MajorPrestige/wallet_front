import React from "react";
import { useTranslation } from "react-i18next";
import { GB, UA } from 'country-flag-icons/react/3x2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setLanguage} from 'redux/language/language-slice';

export const LanguagesSwitcher = () => {
const [setLng] = useState('');
const dispatch = useDispatch();
const { i18n } = useTranslation();

const handleThemeChange = (lng) => {
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
  };
      changeLanguage(lng);
      setLng(lng);
      dispatch(setLanguage(lng));
  };


return (
<>
<div style={{widt: "200px", display: "flex", gap: "25px" }}>
<button type="button" style={{padding: "0",  border: "none", backgroundColor: "transparent", width: "50px", minHeight: "5px", borderRadius: "30%", overflow: "hidden"}} onClick={() => handleThemeChange('en')}><GB title="GB" style={{ display: "block", width: "50px" }}/></button>
<button type="button" style={{padding: "0",  border: "none", backgroundColor: "transparent", width: "50px", minHeight: "5px", borderRadius: "30%", overflow: "hidden"}} onClick={() => handleThemeChange('ua')}><UA title="UA" style={{ display: "block", width: "50px" }}/></button>
</div>
</>

);

};
