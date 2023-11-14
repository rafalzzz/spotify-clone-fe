import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

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

    const trackNameElement = queryByTestId(TRACK_NAME_TEST_ID);
    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);

    expect(trackNameElement).toBeInTheDocument();
    expect(artistNameElement).toBeInTheDocument();
  });

  it('displays only the main artist when multiple artists are given', () => {
    const { queryByTestId } = renderMusicTrackInformations();

    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);
    expect(artistNameElement).toHaveTextContent(FIRST_ARTIST_NAME);
  });

  it('passes track name to the track tooltip', () => {
    const { queryByTestId, queryByText } = renderMusicTrackInformations();

    const trackNameTooltip = queryByTestId(TRACK_NAME_TOOLTIP_TEST_ID);
    expect(trackNameTooltip).toBeInTheDocument();

    const tooltipTitle = queryByText(MOCKED_TRACK_NAME, { selector: 'span' });
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('passes main artist name to the artist tooltip', () => {
    const { queryByTestId } = renderMusicTrackInformations();

    const artistNameTooltip = queryByTestId(ARTIST_NAME_TOOLTIP_TEST_ID);
    expect(artistNameTooltip).toBeInTheDocument();

    const tooltipTitle = (queryByTestId(ARTIST_NAME_TEST_ID) as HTMLElement).querySelector('span');
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('artist redirection have correct path', () => {
    const { queryByTestId } = renderMusicTrackInformations();

    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);
    expect(artistNameElement).toHaveAttribute(
      'href',
      generateArtistRedirectionPath(FIRST_ARTIST_NAME),
    );
  });
});
