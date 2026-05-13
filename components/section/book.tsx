'use client';

import { ExternalLink, BookOpen } from 'lucide-react';

interface Book {
  contribution: string;
  book: string;
  year: number;
  isbn: string;
  authors: string[];
  publisher: string;
  doi?: string;
}

const books: Book[] = [
  {
    contribution:
      'On the determinants of economic integration in SAARC countries: a macroeconomic perspective',
    book: 'Economic and Financial Integration in South Asia',
    year: 2020,
    isbn: '9780815380139',
    authors: ['Sehgal, S.', 'Ahmad, W.', 'Chahal, R. J. K.'],
    publisher: 'Routledge',
  },
  {
    contribution:
      'Linking Corporate and Environmental Governance to the Sustainable Development Goals in an Emerging Economy',
    book: 'Striving to Meet the Sustainable Development Goals: Next Steps for Policymakers and Practitioners',
    year: 2025,
    isbn: '978-4-89974-324-8',
    authors: ['Chahal, R. J. K.', 'Ahmad, W.'],
    publisher: 'ADBI',
    doi: 'https://doi.org/10.56506/ACFH4829',
  },
];

export function Books() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Books
            </h2>
          </div>

          <p className="text-lg text-muted-foreground">
            Book chapters and scholarly contributions
          </p>
        </div>

        <div className="space-y-8">
          {books.map((book, index) => (
            <article
              key={index}
              className="group border-b border-border pb-8 last:border-0 transition-all hover:bg-muted/30 -mx-4 px-4 py-4 rounded-lg"
            >
              <div className="flex gap-3 mb-3 text-sm text-muted-foreground">
                <span className="font-semibold">{book.year}</span>
                <span className="text-border">•</span>
                <span>ISBN: {book.isbn}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 leading-snug text-foreground group-hover:text-primary transition-colors">
                {book.contribution}
              </h3>

              <div className="mb-3">
                <p className="text-base italic text-muted-foreground">
                  Book: {book.book}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {book.authors.join(', ')}
                </p>

                <p className="text-sm font-medium mt-1">{book.publisher}</p>
              </div>

              {book.doi && (
                <a
                  href={book.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Contribution
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
