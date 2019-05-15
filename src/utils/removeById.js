export const removeById = (list, id) => {
  const index = list.findIndex(el => el.id === id);
  return [...list.slice(0, index), ...list.slice(index + 1)];
};
