"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../theme");
const StyledPushButton = styled_components_1.default.button `
  font-size: ${(p) => p.fontSize ? p.fontSize : '13px'};
  min-width: ${(p) => p.size ? p.size : '78px'};
  min-height: ${(p) => p.size ? p.size : '32px'};
  font-family: inherit;
  position: relative;
  display: inline-block;
  text-align: center;
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 2px;
  background-size: 16px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: none;
  line-height: 1.25;
  width: auto;
  white-space: nowrap;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  -webkit-app-region: no-drag;
  cursor: pointer;
  user-select: none;
  transition: .1s opacity, .1s background;

  &:active {
    bottom: -1px;
  }

  ${(p) => p.disabled
    ? styled_components_1.css `
    pointer-events: none;
    animation: none;
    opacity: 0.25;
    ` : ''}

  ${(p) => p.color === 'default'
    ? styled_components_1.css `
      color: ${theme_1.default.pushButton.default.color};
      background-color: ${theme_1.default.pushButton.default.bg};

      &:hover {
        color: ${theme_1.default.pushButton.default.hoverColor};
      }
    `
    : ''}

  ${(p) => p.color === 'primary'
    ? styled_components_1.css `
      background: linear-gradient(
        ${theme_1.default.pushButton.primary.gradient1},
        ${theme_1.default.pushButton.primary.gradient2}
      );
      border-left: 2px solid ${theme_1.default.pushButton.primary.borderColor};
      border-right: 2px solid ${theme_1.default.pushButton.primary.borderColor};
      border-top: 2px solid ${theme_1.default.pushButton.primary.gradient1};
      border-bottom: 2px solid ${theme_1.default.pushButton.primary.gradient1};
      color: ${theme_1.default.pushButton.primary.color};

      &:hover {
        border: 2px solid ${theme_1.default.pushButton.primary.borderHoverColor};
        color: ${theme_1.default.pushButton.primary.hoverColor};
      }
    ` : ''}

  ${(p) => p.color === 'secondary'
    ? styled_components_1.css `
      background: linear-gradient(
        ${theme_1.default.pushButton.secondary.gradient1},
        ${theme_1.default.pushButton.secondary.gradient2}
      );
      border: 1px solid ${theme_1.default.pushButton.secondary.borderColor};
      color: ${theme_1.default.pushButton.secondary.color};

      &:hover {
        border: 1px solid ${theme_1.default.pushButton.secondary.borderHoverColor};
        color: ${theme_1.default.pushButton.secondary.hoverColor};
      }
    ` : ''}
`;
exports.StyledPushButton = StyledPushButton;
//# sourceMappingURL=style.js.map