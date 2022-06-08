import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: '1',
      name: 'Ranh giới',
      price: 80000,
      author: 'RAIN8x',
    },
    {
      id: '2',
      name: 'Em va Trinh',
      price: 180000,
      author: 'TCS',
    },
  ];

  findAll() {
    return this.books;
  }

  findBookById(id: string): BookDto {
    const book = this.books.find((item) => item.id === id);

    if (!book) {
      throw new HttpException(`Book #${id} not found`, 404);
    }
    return book;
  }

  createBook(book: BookDto) {
    console.log(book instanceof BookDto);


    return this.books.push(book);
  }

  removeBookById(id: string) {}
}
