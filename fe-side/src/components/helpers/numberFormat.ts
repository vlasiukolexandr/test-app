const billion = 1000000000;
const million = 1000000;
const thousand = 1000;

const numberFormatter = (num: number): string => {
  return num >= billion ? `${(num / billion).toFixed(1)} B`
    : num >= million ? `${(num / million).toFixed(1)} M`
    : num >= thousand ? `${(num / thousand).toFixed(1)} K`
    : num.toString();
}

export {
  numberFormatter
};