// export async function getRandomVerses() {
//   const res = await fetch("https://bible-api.com/data/kjv/random");

//   if (!res.ok) {
//     throw new Error(`HTTP Error: Status: ${res.status}`);
//   }

//   return res.json(); // Return the parsed JSON directly
// }

// Helper function to handle the fetching and error checking
async function fetchWithErrorHandling(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP Error: Status: ${res.status}`);
  }
  return res.json();
}

export async function getBibleBooks() {
  const data = await fetchWithErrorHandling("https://bible-api.com/data/kjv");

  return data; // Return the parsed JSON directly
}

export async function getBibleBooksId() {
  const data = await fetchWithErrorHandling("https://bible-api.com/data/kjv");

  // Extract only the IDs from the books array
  const bookIds = data.books.map((book) => book.id);

  return bookIds; // Return the list of IDs
}

export async function getBibleVerses(book, chapter, verses) {
  try {
    const data = await fetchWithErrorHandling(
      `https://bible-api.com/${book}%20${chapter}:${verses}?translation=KJV`
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getBibleChapters(book) {
  const data = await fetchWithErrorHandling(
    `https://bible-api.com/data/KJV/${book}`
  );
  return data;
}

export async function getPassages(book, chapter) {
  const data = await fetchWithErrorHandling(
    `https://bible-api.com/${book}%20${chapter}?translation=KJV`
  );
  return data;
}

export async function getRandomVerses() {
  // Helper function to get a random item from an array
  function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  try {
    // Fetch the list of books and select a random book
    const books = await getBibleBooksId();
    const randomBook = getRandomItem(books);

    // Fetch the chapters of the selected book
    const bookData = await fetchWithErrorHandling(
      `https://bible-api.com/data/kjv/${randomBook}`
    );

    // Randomly select a chapter from the fetched chapters
    const randomChapter = getRandomItem(bookData.chapters);

    // Fetch the verses from the randomly selected chapter
    const chapterVerses = await fetchWithErrorHandling(
      `https://bible-api.com/${randomBook}+${randomChapter.chapter}`
    );
    const verse = chapterVerses.verses;

    // Randomly select a range of verses
    const from = Math.floor(Math.random() * verse.length);
    const to = Math.floor(Math.random() * (verse.length - from + 1)) + from;

    // Randomize English Translations
    const translations = ["asv", "bbe", "darby", "dra", "kjv", "web"];
    const randomizeTranslations = Math.floor(
      Math.random() * translations.length
    );

    // Build the URL to fetch the selected verses
    const verseUrl =
      from !== to
        ? `https://bible-api.com/${randomBook}%20${randomChapter.chapter}:${verse[from].verse}-${verse[to].verse}?translation=${translations[randomizeTranslations]}`
        : `https://bible-api.com/${randomBook}%20${randomChapter.chapter}:${verse[from].verse}?translation=${translations[randomizeTranslations]}`;

    // Fetch the random verses
    const randomVerses = await fetchWithErrorHandling(verseUrl);
    return randomVerses;
  } catch (error) {
    console.error("Error fetching random verses:", error.message);
    throw error;
  }
}
