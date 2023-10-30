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
  return (
    <>
      <div>
        <Container>
          <Text fontSize="5xl" textAlign="center" mt="20" mb="7">
            Welcome Bret!
          </Text>
          <Flex>
            {/* Creating login form */}
            <FormControl
              border="1px"
              borderColor="red.600"
              borderRadius="25"
              padding="20px"
            >
              <FormLabel mt="6">Email address</FormLabel>
              <Input type="text" placeholder="Type your name" />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormLabel mt={5}>Password</FormLabel>
              <Input type="password" placeholder="Type your password" />
              <FormHelperText>We'll never share your password.</FormHelperText>

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
              >
                Login
              </Button>
            </FormControl>
          </Flex>
        </Container>
      </div>
    </>
  );
}
