'use client'

import { useState } from 'react'
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'





export default function ClickMe() {


  return (
    <Flex h="100vh" justifyContent="center" alignItems="center" width={'fit-content'} >
      <Button
       
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
       >
        Create user
      </Button>
    </Flex>
  )
}