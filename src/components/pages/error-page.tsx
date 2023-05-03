import { Box, Stack } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import { BodyText, Heading2 } from "../custom/icons";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.log("typeof", typeof error.statusText);
  console.log("typeof", typeof error.message);

  return (
    <Stack my="50%" mx="auto">
      <Box m="0 auto" textAlign="center">
        <Heading2>Oops!</Heading2>
        <BodyText py="2rem">Sorry, an unexpected error has occurred.</BodyText>
        <BodyText>
          <i>{error.statusText || error.message}</i>
        </BodyText>
      </Box>
    </Stack>
  );
};
