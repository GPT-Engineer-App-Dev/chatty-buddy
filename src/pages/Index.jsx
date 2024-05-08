import React, { useState } from 'react';
import { Box, Flex, Input, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

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
          {messages.map((message, index) => (
            <Flex key={index} alignSelf={message.sender === 'self' ? 'flex-end' : 'flex-start'} bg={message.sender === 'self' ? 'green.100' : 'blue.100'} borderRadius="lg" p={2}>
              <Text>{message.text}</Text>
            </Flex>
          ))}
        </VStack>
        <Flex mt={4}>
          <Input placeholder="Type a message" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <Button ml={2} onClick={() => {
              if (inputText.trim() !== '') {
                setMessages([...messages, { text: inputText, sender: 'self' }]);
                setInputText('');
              }
           }}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;