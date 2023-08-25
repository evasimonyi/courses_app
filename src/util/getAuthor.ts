import { Authors } from '../common/domain/authorsType';

export const getAuthorById = (id: string, authorlist: Authors) => {
  const [author] = authorlist.filter((author) => id === author.id);
  return author;
};
