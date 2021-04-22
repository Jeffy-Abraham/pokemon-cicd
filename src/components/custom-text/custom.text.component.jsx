import { Container } from "./custom.text.style";

export function CustomText({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}
