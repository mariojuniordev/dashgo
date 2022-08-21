import { Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    const searchInputRef = useRef<HTMLInputElement>();

    console.log(searchInputRef.current?.focus())

    return (
    <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        align="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
    >
        <Input
            color="gray.50"
            variant="unstyled"
            placeholder="Buscar na plataforma"
            _placeholer={{ color: 'gray.400' }}
            ref={searchInputRef}
            autoFocus
        />

        <RiSearchLine/>
    </Flex>
    )
}