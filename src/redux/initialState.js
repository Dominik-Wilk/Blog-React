const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of article...',
      content: 'Main content of article',
      publishedDate: '02/02/2022',
      category: 'News',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title',
      shortDescription: 'Short description of article...',
      content: 'Main content of article',
      publishedDate: '10/02/2022',
      category: 'Sport',
      author: 'Susan Glith',
    },
    {
      id: '3',
      title: 'Article title',
      shortDescription: 'Short description of article...',
      content: 'Main content of article',
      publishedDate: '10/02/2022',
      category: 'News',
      author: 'Mark Dolittle',
    },
    {
      id: '4',
      title: 'Article title',
      shortDescription: 'Short description of article...',
      content: 'Main content of article',
      publishedDate: '20/02/2022',
      category: 'Movies',
      author: 'John Smith',
    },
  ],
  category: [
    {
      id: '1',
      name: 'Sport',
    },
    {
      id: '2',
      name: 'News',
    },
    {
      id: '3',
      name: 'Movies',
    },
  ],
};

export default initialState;
