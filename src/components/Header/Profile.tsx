import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
    <Flex align="center">
        {showProfileData && 
            <Box mr="4" textAlign="right">
                <Text>Mário Júnior</Text>
                <Text color="gray.300" fontSize="small">mario_10gt@hotmail.com</Text>
            </Box>
        }

        <Avatar  size="md" name="Mário Júnior" src="https://github.com/mariojuniordev.png"/>
    </Flex>
    )
}