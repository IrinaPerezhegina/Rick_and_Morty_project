export type Mods = Record<string, boolean | string | undefined>;

type TypeArg = string | Mods | Array<string | undefined>;

export function classNames(
  arg1?: TypeArg,
  arg2?: TypeArg,
  arg3?: TypeArg
): string {
  const args = [arg1, arg2, arg3];

  const stringArg = args.find((arg) => typeof arg === "string");
  const objArg = args.find(
    (arg) => Object.prototype.toString.call(arg) === "[object Object]"
  );
  const keys = objArg ? Object.entries(objArg) : [];
  const arrArg = args.find((arg) => Array.isArray(arg))?.filter(Boolean) || [];

  return [
    stringArg,
    ...arrArg,
    ...keys
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
