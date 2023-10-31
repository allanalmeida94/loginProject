import { Center, Button, Text } from "@chakra-ui/react";

export default function Admin() {
  return (
    <div>
      <Center bg="red.400" h="100px" color="white">
        <Text fontSize="2xl" textAlign="center">
          Hello user, you are logged!
        </Text>
      </Center>
    </div>
  );
}
