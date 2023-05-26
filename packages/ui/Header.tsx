import { style } from "@vanilla-extract/css"

export const Header = ({ text }: { text: string }) => {
  console.log('server component')
  return <h1>{text}</h1>;
};
