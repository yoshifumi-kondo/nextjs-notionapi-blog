export const getAnnotationColor = (
  color:
    | 'default'
    | 'gray'
    | 'brown'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red'
    | 'gray_background'
    | 'brown_background'
    | 'orange_background'
    | 'yellow_background'
    | 'green_background'
    | 'blue_background'
    | 'purple_background'
    | 'pink_background'
    | 'red_background',
) => {
  switch (color) {
    case 'yellow':
      return 'text-yellow-500';

    default:
      return 'text-gray-900';
  }
};

export const getStrikethrough = (strikethrough: boolean) => {
  if (strikethrough) {
    return 'line-through';
  }
  return '';
};

export const getUnderline = (underline: boolean) => {
  if (underline) {
    return 'underline';
  }
  return '';
};

export const getBold = (underline: boolean) => {
  if (underline) {
    return 'font-bold';
  }
  return '';
};
