import React from "react";
import { useTranslation } from "react-i18next";
import { GB, UA } from 'country-flag-icons/react/3x2';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {setLanguage} from 'redux/language/language-slice';
import { MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { StyledMenuButton, StyledItemButton, UaLanguageButton, GbLanguageButton, StyledMenu } from "./LanguagesSwitcher.styled";

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
    <StyledMenu menuButton={<StyledMenuButton>
      {lng === "en" ? <GB style={{display: "block", width: "100%", height: "auto"}} title="GB"/> : <UA style={{display: "block", width: "100%", height: "auto"}}  title="UA"/>}
</StyledMenuButton>} transition>
      <MenuItem><StyledItemButton type="button" onClick={() => handleThemeChange('en')}><GbLanguageButton title="GB"/></StyledItemButton></MenuItem>
      <MenuItem><StyledItemButton type="button" onClick={() => handleThemeChange('ua')}><UaLanguageButton title="UA"/></StyledItemButton></MenuItem>
    </StyledMenu>
    </>
  );
};