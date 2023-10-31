import {GetServerSideProps} from "next";
import {getServerSession} from "next-auth";
import { Center, Text } from "@chakra-ui/react";

import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {useSession} from "next-auth/react";

// When there is a session we should let the user to access the page. Otherwise, redirect to login page.
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions)

    if(!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {props: { session }}
}

export default function Admin() {
    const session = useSession()
  return (
    <div>
      <Center bg="red.400" h="100px" color="white">
        <Text fontSize="2xl" textAlign="center">
          Hello {session.data?.user?.email}, you are logged!
        </Text>
      </Center>
    </div>
  );
}
