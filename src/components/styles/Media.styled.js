const size = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1280px",
};

export const device = {
  mobileOnly: `(max-width: ${size.mobile - 0.02})`,
  mobile: `(min-width: ${size.mobile})`,
  tabletBefore: `(max-width: ${size.tablet - 0.02})`,
  tablet: `(min-width: ${size.tablet})`,
  desktopBefore: `(max-width: ${size.desktop - 0.02})`,
  desktop: `(min-width: ${size.desktop})`,
  retina: `(min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx)`,
};
