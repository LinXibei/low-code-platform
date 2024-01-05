import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { CatsModule } from './cats/cats.module';

// @Module({
//   imports: [CatsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
