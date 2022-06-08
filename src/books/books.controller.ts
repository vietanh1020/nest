import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @HttpCode(200)
  findAll(): BookDto[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findBookById(@Param('id') id: string): BookDto {
    return this.booksService.findBookById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() book: BookDto) {
    return this.booksService.createBook(book);
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    return this.booksService.removeBookById(id);
  }
}
