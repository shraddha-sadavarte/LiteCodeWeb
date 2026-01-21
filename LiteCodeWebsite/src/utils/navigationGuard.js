export const allowNavigation = () => {
  sessionStorage.setItem("nav_allowed", "true");
};

export const isNavigationAllowed = () => {
  return sessionStorage.getItem("nav_allowed") === "true";
};

export const clearNavigation = () => {
  sessionStorage.removeItem("nav_allowed");
};
