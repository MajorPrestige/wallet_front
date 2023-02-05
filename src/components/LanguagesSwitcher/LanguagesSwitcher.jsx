import React from "react";
import { useTranslation } from "react-i18next";
import { GB, UA } from 'country-flag-icons/react/3x2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setLanguage} from 'redux/language/language-slice';

export const LanguagesSwitcher = () => {
const [lng, setLng] = useState('en');
const dispatch = useDispatch();
const { i18n } = useTranslation();

const handleThemeChange = () => {
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
  };

    if(lng === "en") {
      changeLanguage("ua");
      setLng('ua');
      dispatch(setLanguage('ua'));
    }

    if(lng === "ua") {
      changeLanguage("en");
      setLng('en');
      dispatch(setLanguage('en'));
    };
  };


return (
<>
<div style={{widt: "200px", display: "flex", gap: "25px" }}>
<button type="button" style={{padding: "0",  border: "none", backgroundColor: "transparent", width: "50px", minHeight: "5px", borderRadius: "30%", overflow: "hidden"}} onClick={() => handleThemeChange()}><GB title="GB" style={{ display: "block", width: "50px" }}/></button>
<button type="button" style={{padding: "0",  border: "none", backgroundColor: "transparent", width: "50px", minHeight: "5px", borderRadius: "30%", overflow: "hidden"}} onClick={() => handleThemeChange()}><UA title="UA" style={{ display: "block", width: "50px" }}/></button>
</div>
</>

);

};
