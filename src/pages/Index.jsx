import { Box, Flex, Input, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height="100vh" overflow="hidden">
      <Box width={isMobile ? "100%" : "30%"} bg="gray.200" p={4}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="xl" fontWeight="bold">Contacts</Text>
          <Button justifyContent="flex-start">John Doe</Button>
          <Button justifyContent="flex-start">Jane Smith</Button>
          <Button justifyContent="flex-start">Mike Johnson</Button>
        </VStack>
      </Box>
      <Flex direction="column" p={4} flex="1" bg="white">
        <VStack spacing={4} flex="1" overflowY="auto">
          <Text alignSelf="flex-start" fontSize="md">John Doe</Text>
          <Flex alignSelf="flex-start" bg="blue.100" borderRadius="lg" p={2}>
            <Text>Hi there!</Text>
          </Flex>
          <Flex alignSelf="flex-end" bg="green.100" borderRadius="lg" p={2}>
            <Text>Hello, how are you?</Text>
          </Flex>
        </VStack>
        <Flex mt={4}>
          <Input placeholder="Type a message" />
          <Button ml={2}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;