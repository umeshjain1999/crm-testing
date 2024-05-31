import { ThemedLayoutV2 } from "@refinedev/chakra-ui";
import { PropsWithChildren } from "react";
import { Heading } from "@chakra-ui/react";
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemedLayoutV2>
        <div>{children}</div>
    </ThemedLayoutV2>
  );
};

