export const validateNode = (data) => {
  if (!data?.nodes | !data?.links) {
    return false;
  }

  for (const item of data.nodes) {
    if (!item?.id) {
      return false;
    }
  }

  for (const item of data.links) {
    if (!item?.source || !item?.target) {
      return false;
    }
  }
  return true;
};
