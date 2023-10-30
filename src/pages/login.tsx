"use client";
import { SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Importing components
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Text,
} from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result) {
      console.log(result);
      return;
    }

    router.replace("/admin/page");
  }

  return (
    <>
      <div>
        <Container>
          <Text fontSize="5xl" textAlign="center" mt="20" mb="7">
            Welcome Bret!
          </Text>
          <Flex>
            {/* Creating login form */}
            <form onSubmit={handleSubmit}>
              <FormControl
                border="1px"
                borderColor="red.600"
                borderRadius="25"
                padding="20px"
                width="500px"
              >
                <FormLabel mt="6">Email address</FormLabel>
                <Input
                  type="text"
                  placeholder="Type your email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel mt={5}>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Type your password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />
                <FormHelperText>
                  We'll never share your password.
                </FormHelperText>

                <Button
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  py="8"
                  mt="8"
                  mb="8"
                  colorScheme="red"
                  fontSize="3xl"
                  boxShadow="dark-lg"
                  type="submit"
                >
                  Login
                </Button>
              </FormControl>
            </form>
          </Flex>
        </Container>
      </div>
    </>
  );
}
