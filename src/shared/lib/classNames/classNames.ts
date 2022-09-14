type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  addition: string[],
  mods?: Mods
): string => {
  const classNamesResult: string[] = [];
  classNamesResult.push(cls, ...addition);

  if (mods) {
    classNamesResult.push(
      ...Object.entries(mods)
        .filter(([_, value]) => value)
        .map(([className]) => className)
    );
  }
  return classNamesResult.join(" ");
};
