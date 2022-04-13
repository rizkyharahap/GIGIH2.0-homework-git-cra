import Message from '../message';
import Spinner from '../spinner';
import Item from './item';
import { Button, Grid } from '@mantine/core';

// Song Wrapper component
const Song = ({ data, error, isLoading, selectedSong = [], onSongSelected }) => {
  if (isLoading)
    return (
      <Spinner>
        <p>Loading ...</p>
      </Spinner>
    );

  if (error)
    return (
      <Message
        title={error.message}
        description={error.description}
        style={{
          margin: '200px',
        }}
      />
    );

  if (!data || data.items?.length === 0)
    return (
      <Message
        title="No Results found"
        description="Please make sure your words are spelled correctly or use less or
    different keywords"
        style={{
          margin: '200px',
        }}
      />
    );

  return (
    <Grid columns={12}>
      {/* Mapping all tracks */}

      {data.items?.map(({ uri, album, artists, ...track }) => {
        const isSelected = selectedSong.includes(uri);

        return (
          <Grid.Col key={uri} span={6} xs={4} md={3} lg={2.25}>
            <Item album={album} artist={artists[0]} track={track}>
              <Button
                color={isSelected ? 'gray' : 'green'}
                radius="xl"
                size="md"
                uppercase
                title="Select or deselect song"
                onClick={() => onSongSelected(uri)}
              >
                {isSelected ? 'Deselect' : 'Select'}
              </Button>
            </Item>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default Song;
