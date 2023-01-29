import styled from 'styled-components';
import { device } from 'styles/Media.variables';
import background from 'images/svgs/currency-bg.svg';

export const Container = styled.div`
display: flex;
justify-content: center;
height: 174px;
position: relative;

padding-bottom: 32px;
  color: #ffffff;
  border-radius: 30px;
  overflow: hidden;
  background: #4a56e2 url(${background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletBefore}{
    margin: 0 auto;
    margin-top: 28px;
    height: 182px;
  }

  @media ${device.desktop} {
    height: 331px;
      
    }
`;

export const Table = styled.table`
  /* color: #ffffff;
  border-radius: 30px;
  overflow: hidden; */
  /* background: #4a56e2 url(${background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain; */
  width: 100%;
  height: max-content;
  

  @media ${device.tabletBefore} {
    padding-left: 20px;
    padding-right: 20px;

    /* margin: 0 auto; */
    /* margin-top: 28px; */
  }

  & thead {
    
    font-weight: 700;
    font-size: 18px;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2) 5%,
      rgba(255, 255, 255, 0) 105%
    );
  }
  
  & th,
  td {
    padding: 15px;
    text-align: center;

    @media ${device.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media ${device.tablet} {
      padding-left: 30px;
      padding-left: 30px;
    }

    @media ${device.desktop} {
      padding-left: 35px;
      padding-right: 35px;
    }
  }

  /* & tr:last-child td {
    padding-bottom: 32px;

    @media ${device.tablet} {
    padding-bottom: 32px !important;
  }

  @media ${device.desktop} {
    padding-bottom: 179px !important;
  }
  } */
`;

// export const TdLastChild = styled.td`
//   @media ${device.tablet} {
//     padding-bottom: 32px !important;
//   }

//   @media ${device.desktop} {
//     padding-bottom: 197px !important;
//   }
// `;
