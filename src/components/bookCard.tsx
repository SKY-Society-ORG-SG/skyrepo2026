import { Book } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface BookProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BookCard = ({ book }: { book: BookProps }) => (
  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
    {/* Background Animation Effect */}
    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300" />

    {/* Card Content */}
    <CardHeader className="space-y-1">
      <div className="flex items-center gap-2">
        <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="font-bold text-blue-900 dark:text-blue-100">
          {book.id} {book.title}
        </h3>
      </div>
    </CardHeader>

    <CardContent className="flex lg:flex-row flex-col justify-center lg:items-start items-center gap-4 p-4">
      {/* Book Image */}
      <Image
        src={book.image}
        alt={book.title}
        className="w-full h-48 lg:object-cover object-contain rounded-t-lg "
        width={800}
        height={800}
      />

      <p className="text-slate-600 text-base line-clamp-[10] dark:text-slate-300 leading-relaxed">
        {book.description}
      </p>
    </CardContent>
  </Card>
);

export default BookCard;
