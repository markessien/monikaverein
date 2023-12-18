export const AppRoutes = {
  Home: "/",
  Projects: "/projects",
  Philosophy: "/our_philosophy",
  Donate: "/donate",
  GetInvolved: "/get_involved",
  About: "/about",
} as const;

export const AboutRoutes = {
  History: `${AppRoutes.About}/#history`,
  Goals: `${AppRoutes.About}/#goals`,
  Partners: `${AppRoutes.About}/#partners`,
  Organization: `${AppRoutes.About}/#organization`,
} as const;
