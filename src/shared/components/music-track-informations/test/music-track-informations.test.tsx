import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MusicTrackInformations } from '../';

const MOCKED_TRACK_NAME = 'Mocked title';

const FIRST_ARTIST_NAME = 'Mocked First Artist Name';
const MOCKED_ARTIST_NAME = `${FIRST_ARTIST_NAME}, Second Artist Name`;

const TRACK_NAME_TEST_ID = 'music-track-informations-track-name';
const ARTIST_NAME_TEST_ID = 'music-track-informations-artist-name';
const TRACK_NAME_TOOLTIP_TEST_ID = 'music-track-informations-track-name-tooltip';
const ARTIST_NAME_TOOLTIP_TEST_ID = 'music-track-informations-artist-name-tooltip';

const renderMusicTrackInformations = () =>
  render(<MusicTrackInformations trackName={MOCKED_TRACK_NAME} artistName={MOCKED_ARTIST_NAME} />);

describe('MusicTrackInformations', () => {
  it('renders component without error', () => {
    const screen = renderMusicTrackInformations();
    expect(screen).toMatchSnapshot();
  });

  it('renders the track name and main artist name', () => {
    const { queryByTestId } = renderMusicTrackInformations();

    const trackElement = queryByTestId(TRACK_NAME_TEST_ID);
    const artistElement = queryByTestId(ARTIST_NAME_TEST_ID);

    expect(trackElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
  });

  it('displays only the main artist when multiple artists are given', () => {
    const { queryByTestId } = renderMusicTrackInformations();

    const artistElement = queryByTestId(ARTIST_NAME_TEST_ID);
    expect(artistElement).toHaveTextContent(FIRST_ARTIST_NAME);
  });

  it('passes track name to the track tooltip', () => {
    const { queryByTestId, queryByText } = renderMusicTrackInformations();
    const trackNameTooltip = queryByTestId(TRACK_NAME_TOOLTIP_TEST_ID);

    const tooltipTitle = queryByText(MOCKED_TRACK_NAME, { selector: 'span' });
    expect(trackNameTooltip).toBeInTheDocument();
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('passes main artist name to the artist tooltip', () => {
    const { queryByTestId, queryByText } = renderMusicTrackInformations();
    const artistNameTooltip = queryByTestId(ARTIST_NAME_TOOLTIP_TEST_ID);

    const tooltipTitle = queryByText(FIRST_ARTIST_NAME, { selector: 'span' });
    expect(artistNameTooltip).toBeInTheDocument();
    expect(tooltipTitle).toBeInTheDocument();
  });
});
