import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceModule } from './finance/finance.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ProjectsModule } from './projects/projects.module';
import { HrModule } from './hr/hr.module';
import { EmployeesModule } from './employees/employees.module';
import { FreelancersModule } from './freelancers/freelancers.module';
import { InventoryModule } from './inventory/inventory.module';
import { DocumentsModule } from './documents/documents.module';
import { MarketingModule } from './marketing/marketing.module';

@Module({
  imports: [
    FinanceModule,
    AnalyticsModule,
    ProjectsModule,
    HrModule,
    EmployeesModule,
    FreelancersModule,
    InventoryModule,
    DocumentsModule,
    MarketingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
