import React from 'react';

const BookmarksContext = React.createContext({
    booksmarks: [],
    addBookmark: () => {},
    deleteBookmark: () => {},
    updateBookmark: () => {},
})

export default BookmarksContext;