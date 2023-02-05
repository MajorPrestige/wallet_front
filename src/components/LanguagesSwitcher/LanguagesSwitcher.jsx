import React from "react";
import { useTranslation } from "react-i18next";
import { GB, UA } from 'country-flag-icons/react/3x2';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {setLanguage} from 'redux/language/language-slice';

export const LanguagesSwitcher = () => {
const [lng, setLng] = useState('');
const dispatch = useDispatch();
const { i18n } = useTranslation();

const changeLanguage = useCallback((value) => {
  i18n.changeLanguage(value);
}, [i18n]);

const saveInLocalStorage = (key, value) => {
  try {
    const prepearedValue = JSON.stringify(value);
    localStorage.setItem(key, prepearedValue);
  } catch (error) {
    console.error("Set prepearedValue error: ", error.message);
  }
};

const loadFromLocalStorage = key => {
  try {
    const parsedValue = localStorage.getItem(key);
    return parsedValue === null ? undefined : JSON.parse(parsedValue);
  } catch (error) {
    console.error("Get parsedValue error: ", error.message);
  }
};

const handleThemeChange = (lng) => {
      changeLanguage(lng);
      setLng(lng);
      dispatch(setLanguage(lng));
      saveInLocalStorage("language", lng);
  };

useEffect(() => {
  const currentLanguage = loadFromLocalStorage("language");
  if(currentLanguage){
  setLng(currentLanguage);
  changeLanguage(lng);
  return;
  };
  changeLanguage('en');
  setLng('en');
  saveInLocalStorage("language", lng);
},[changeLanguage, lng]);


return (
<>
<div style={{widt: "200px", display: "flex", gap: "25px" }}>
<button type="button" style={{padding: "0",  border: "none", backgroundColor: "transparent", width: "50px", minHeight: "5px", borderRadius: "30%", overflow: "hidden"}} onClick={() => handleThemeChange('en')}><GB title="GB" style={{ display: "block", width: "50px" }}/></button>
<button type="button" style={{padding: "0",  border: "none", backgroundColor: "transparent", width: "50px", minHeight: "5px", borderRadius: "30%", overflow: "hidden"}} onClick={() => handleThemeChange('ua')}><UA title="UA" style={{ display: "block", width: "50px" }}/></button>
</div>
</>
);
};
