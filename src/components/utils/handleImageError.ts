export const handleOnError = (e: any) => {
  e.target.src = "/img/picturePlaceholder.svg";
  e.target.srcset = "/img/picturePlaceholder.svg";
};
