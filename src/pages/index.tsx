import NextAuthSessionProvider from "@/providers/sessionProvider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  //<NextAuthSessionProvider>{children}</NextAuthSessionProvider>;

  return (
    <>
      <Box
        bg="red.700"
        w="100%"
        p={4}
        color="white"
        display="flex"
        justifyContent="space-between"
      >
        <Breadcrumb p="5">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Animes</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div>
          <Button colorScheme="red" m="3" onClick={() => router.push("/login")}>
            Login
          </Button>
        </div>
      </Box>
      <img
        src="https://images6.alphacoders.com/595/595075.jpg"
        alt="sasori image"
        width="1920px"
        height="1080px"
      />
    </>
  );
}
