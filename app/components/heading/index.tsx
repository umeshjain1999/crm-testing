import styled from "styled-components"
import { PropsWithChildren } from "react";

export const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font-weight: 600;
`;
// export const Heading: React.FC<PropsWithChildren> = ({ children }) => {
//   return (
//     <HeadingStyle>
//         {children}
//     </HeadingStyle>
//   );
// };