import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MailMiddleware } from 'src/common/middleware/checkmail.middleware';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, MailMiddleware)
      .forRoutes({ path: 'books/:id', method: RequestMethod.GET });
  }
}
