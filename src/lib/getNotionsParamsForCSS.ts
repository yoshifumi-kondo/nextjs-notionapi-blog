type Colors =
  | 'default'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';
type Luminance = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type BgColor = `bg-${Colors}-${Luminance}`;
type TextColor = `text-${Colors}-${Luminance}`;

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
    case 'gray': {
      const color: TextColor = 'text-gray-700';
      return color;
    }
    case 'brown': {
      const color: TextColor = 'text-amber-700';
      return color;
    }
    case 'orange': {
      const color: TextColor = 'text-orange-700';
      return color;
    }
    case 'yellow': {
      const color: TextColor = 'text-yellow-700';
      return color;
    }
    case 'blue': {
      const color: TextColor = 'text-blue-700';
      return color;
    }
    case 'purple': {
      const color: TextColor = 'text-purple-700';
      return color;
    }
    case 'pink': {
      const color: TextColor = 'text-pink-700';
      return color;
    }
    case 'red': {
      const color: TextColor = 'text-red-700';
      return color;
    }

    default:
      return 'text-gray-900';
  }
};

export type notionColor =
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
  | 'red_background';

export const getBgColor = (color: notionColor) => {
  switch (color) {
    case 'gray': {
      const color: BgColor = 'bg-gray-500';
      return color;
    }
    case 'brown': {
      const color: BgColor = 'bg-amber-500';
      return color;
    }
    case 'orange': {
      const color: BgColor = 'bg-orange-500';
      return color;
    }
    case 'yellow': {
      const color: BgColor = 'bg-yellow-500';
      return color;
    }
    case 'blue': {
      const color: BgColor = 'bg-blue-500';
      return color;
    }
    case 'purple': {
      const color: BgColor = 'bg-purple-500';
      return color;
    }
    case 'pink': {
      const color: BgColor = 'bg-pink-500';
      return color;
    }
    case 'red': {
      const color: BgColor = 'bg-red-500';
      return color;
    }

    default:
      return 'bg-gray-900';
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
