export const getUrlParameter = (c) => {
  const url = new URL(window.location);
  return url.searchParams.get(c);
};

export const getUrlParameterOld = () => {
  var sPageURL = window.location.search.substring(1);
  if (sPageURL !== "") {
    var location = sPageURL.indexOf("=");
    return sPageURL.substring(location + 1);
  } else {
    return false;
  }
};
