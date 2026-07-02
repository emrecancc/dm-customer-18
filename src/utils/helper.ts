export function helperFunction(input: string) {
  const obj = input ? { text: input } : undefined;
  console.log(obj?.text);
}
