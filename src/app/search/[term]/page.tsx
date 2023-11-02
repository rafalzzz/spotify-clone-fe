type SearchResultProps = {
  params: { term: string };
};

const SearchResult = ({ params: { term } }: SearchResultProps) => {
  return <div>{term}</div>;
};

export default SearchResult;
