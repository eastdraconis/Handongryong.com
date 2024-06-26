import {
  Box,
  ComponentDefaultProps,
  Flex,
  Heading,
  Image,
  Kbd,
  Link,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Callout from './Callout';
import CodeBlock from './CodeBlock';

const components = {
  h1: (props: Object) => (
    <Heading as='h1' fontSize='36px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  h2: (props: Object) => (
    <Heading as='h2' fontSize='32px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  h3: (props: Object) => (
    <Heading as='h3' fontSize='28px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  h4: (props: Object) => (
    <Heading as='h4' fontSize='24px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  a: (props: any) => {
    const ariaHidden = props['aria-hidden'];
    const { children, ...rest } = props;
    return (
      <Link
        fontWeight={700}
        color='blue.400'
        target={!ariaHidden && '_blank'}
        _hover={{ textDecoration: 'none' }}
        {...rest}
      >
        <Text
          as='span'
          position='relative'
          _after={{
            position: 'absolute',
            content: '""',
            height: '1px',
            bottom: '-1px',
            left: '0',
            width: '100%',
            bg: 'blue.400',
            transition: 'transform 0.2s ease-out',
            transformOrigin: 'bottom right',
            transform: 'scaleX(0)',
          }}
          fontWeight='bold'
          _dark={{
            _after: {
              bg: 'blue.400',
            },
          }}
          _hover={{
            _after: {
              transform: 'scaleX(1)',
              transformOrigin: 'bottom left',
            },
          }}
        >
          {children}
        </Text>
      </Link>
    );
  },
  Callout,
  blockquote: (props: ComponentDefaultProps) => {
    const { children } = props;
    return <Callout>{children}</Callout>;
  },
  p: (props: Object) => (
    <Text
      fontSize={{ sm: '16px', md: '17px' }}
      mt='20px'
      wordBreak='keep-all'
      lineHeight='1.8'
      {...props}
    />
  ),

  hr: (props: Object) => (
    <Text as='hr' mt='20px' mb='20px' {...props} borderTop='2px solid #e2e2e2e2' />
  ),
  strong: ({ ...props }) => {
    const { children } = props;
    return (
      <Text as='span' fontWeight='700'>
        {children}
      </Text>
    );
  },
  ol: (props: Object) => (
    <Box
      as='ol'
      fontSize={{ sm: '16px', md: '18px' }}
      mt='15px'
      listStylePos='inside'
      sx={{ '& ::marker ': { fontWeight: 'bold' } }}
      mb='15px'
      {...props}
    />
  ),
  li: (props: Object) => <Box as='li' {...props} lineHeight='32px' sx={{}} mb='20px' />,
  ul: (props: Object) => (
    <Box
      as='ul'
      fontSize={{ sm: '16px', md: '18px' }}
      mt='15px'
      mb='15px'
      listStylePos='inside'
      {...props}
    />
  ),
  img: (props: any) => {
    console.log(props);
    return (
      <Box margin='16px 0'>
        <figure>
          <Box
            as='span'
            display='flex'
            justifyContent='center'
            marginLeft='auto'
            marginRight='auto'
          >
            <Link href={props.src}>
              <Image {...props} />
            </Link>
          </Box>
          <Text as='figcaption' textAlign='center' marginTop='10px' color='gray.500'>
            {props.alt}
          </Text>
        </figure>
      </Box>
    );
  },
  code: ({ ...props }) => {
    const { className, children } = props;
    const isCode = /language-(\w+)/.exec(className || '');

    if (!isCode) {
      return (
        <Kbd
          as='span'
          fontSize='14px'
          marginRight='3px'
          position={'relative'}
          top={'-2px'}
          backgroundColor='whiteAlpha.100'
          _dark={{ borderColor: 'whiteAlpha.300', backgroundColor: 'whiteAlpha.100' }}
          borderColor={'blackAlpha.400'}
          padding='3px 4px'
        >
          {children}
        </Kbd>
      );
    }
    return CodeBlock(children, className);
  },
};

const MdxConvert = ({ mdxContent }: { mdxContent: React.ReactNode }) => {
  return <MDXProvider components={components}>{mdxContent}</MDXProvider>;
};
export default MdxConvert;
