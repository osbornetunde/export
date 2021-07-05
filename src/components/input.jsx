import React from 'react';
import { Controller } from 'react-hook-form';
import { Input as ChakraInput, Text } from '@chakra-ui/react';

export const Error = ({ errors, name }) =>
    errors[name] ? (
        <Text color="red" fontSize="1rem" pt="0.5rem">
            {errors[name].message}
        </Text>
    ) : null;

const Input = ({ name, type, placeholder, defaultValue, control, rules, errors, maxLength, label, width }) => {
    return (
        <>
            {label && (
                <Text
                    fontFamily={'var(--primary-font)'}
                    fontWeight={600}
                    fontSize={'1rem'}
                    lineHeight={'1.4rem'}
                    color={'rgba(0,0,0,0.85)'}
                    mt={'1rem'}
                >
                    {label}
                </Text>
            )}
            <Controller
                name={name}
                render={({ value, onChange }) => (
                    <ChakraInput
                        isInvalid={errors[name]}
                        h="3rem"
                        w={width || "100%"}
                        bg={'var(--primary-white)'}
                        border="1px solid #E5E5E5"
                        fontSize="1.2rem"
                        mt={ '2rem'}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        maxLength={maxLength}
                    />
                )}
                defaultValue={defaultValue}
                rules={rules}
                control={control}
            />
            <Error errors={errors} name={name} />
        </>
    );
};

export { Input }
