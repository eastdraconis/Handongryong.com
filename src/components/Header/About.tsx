import { Text } from '@chakra-ui/react';

const About = () => {
  return (
    <a
      href='https://www.rallit.com/hub/resumes/53083/%ED%95%9C%EB%8F%99%EB%A3%A1'
      target='_blank'
      rel='noreferrer'
    >
      <Text
        position='relative'
        _after={{
          position: 'absolute',
          content: '""',
          height: '1px',
          bottom: '-1px',
          left: '0',
          width: '100%',
          bg: 'black',
          transition: 'transform 0.2s ease-out',
          transformOrigin: 'bottom right',
          transform: 'scaleX(0)',
        }}
        fontSize={14}
        fontWeight={'bold'}
        _dark={{
          _after: {
            bg: 'white',
          },
        }}
        _hover={{
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        }}
      >
        RESUME
      </Text>
    </a>
  );
};
export default About;
