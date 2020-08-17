import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face { 
    font-family: 'Justicman'; 
    src: url('../../../fonst/Justicman.ttf')  format('truetype'),
    font-weight: 400; 
    font-style: normal; 
  }

  html {
    font-size: 17px;
    line-height: 17px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Justicman';
  }

  button, input, textarea {
    font-family: 'Justicman';
  }

  .ant-modal-title {
    font-size: 2.5rem;
  }

  .ant-modal-header {
    padding-bottom: 0;
  }

  .offer-pop-up {
    width: 100%;
    padding: 20px 30px;
  }

  .ant-notification-notice-message {
    font-size: 1.5rem;
  }
`;

export default GlobalStyles;
