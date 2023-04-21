import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './forms/forms.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './databases/database.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    FormModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
    JwtModule.register({
      secret: '123456',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

  
})
export class AppModule {}
