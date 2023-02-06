import styled from 'styled-components';
import { Menu, MenuButton } from '@szhsin/react-menu';
import { GB, UA } from 'country-flag-icons/react/3x2';


export const StyledMenu = styled(Menu)`
width: 100px;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    background: rgba(47, 48, 58, 0.4);
}
.szh-menu {
    margin-top: 5px;
    min-width: 0px;
    left: -21.5px !important;
    top: 15px !important;
}
`;

export const StyledMenuButton = styled(MenuButton)`
padding: 0;  
border: none;
background-color: transparent; 
width: 40px; 
height: auto; 
border-radius: 30%; 
overflow: hidden;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const StyledItemButton = styled.button`
padding: 0;  
border: none; 
background-color: transparent; 
width: 35px; 
min-height: 5px; 
border-radius: 30%; 
overflow: hidden;
`;

export const UaLanguageButton = styled(UA)`
display: block;
width: 100%;
`;
export const GbLanguageButton = styled(GB)`
display: block;
width: 100%;
`;