/// Algo to generate random color

export const randomColorGenerator = () => {
  const letters = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export const randomLimitedColorGenerator = (count) => {
  const colors = [
    "#FF0000", // red
    "#00FF00", // green
    "#0000FF", // blue
    "#FFFF00", // yellow
    "#FF00FF", // magenta
    "#00FFFF", // cyan
    "#FFA500", // orange
    "#800080", // purple
    "#FFC0CB", // pink
  ]; // add different type of vibrent color for eye catch

  // return one by one serially
  const color = colors[count];

  if (count >= colors.length) {
    return {
      color: color,
      count: 0,
    };
  }
  return {
    color: color,
    count: count,
  };
};

export default { randomColorGenerator };
