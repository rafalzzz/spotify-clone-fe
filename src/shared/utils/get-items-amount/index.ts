const GRID_GAP = 20;
const MIN_ITEM_WIDTH = 150;

export const getItemsAmount = (entries: ResizeObserverEntry[]) => {
  const { width } = entries[0].contentRect;

  const itemsCount = Math.floor((width + GRID_GAP) / (MIN_ITEM_WIDTH + GRID_GAP));
  return itemsCount;
};
