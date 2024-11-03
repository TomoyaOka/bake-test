export const parameter = {
  width: window.innerWidth,
  height: window.innerHeight,
  aspect: window.innerWidth / window.innerHeight,
  mobile: "ontouchstart" in document.documentElement,
};

export const updateParameter = () => {
  parameter.width = window.innerWidth;
  parameter.height = window.innerHeight;
  parameter.aspect = parameter.width / parameter.height;
  parameter.mobile = "ontouchstart" in document.documentElement;
};
