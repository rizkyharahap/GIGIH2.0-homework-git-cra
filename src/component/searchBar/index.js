import { Input } from '@mantine/core';
import SearchIcon from 'tabler-icons-react/dist/icons/search';

const SearchBar = (props) => {
  return (
    <Input
      icon={<SearchIcon />}
      radius="xl"
      size="md"
      type="search"
      styles={(theme) => ({
        wrapper: {
          maxWidth: 300,
          width: '100%',
        },
        input: {
          backgroundColor: theme.colors.gray[0],
          '&:hover': {
            backgroundColor: theme.colors.gray[1],
          },
          color: theme.colors.dark,
          fontSize: '0.8725rem',
          lineHeight: '1rem',
          textOverflow: 'ellipsis',
          textTransform: 'none',
          letterSpacing: 'normal',
        },
        icon: {
          color: theme.colors.dark,
        },
      })}
      {...props}
    />
  );
};

export default SearchBar;
