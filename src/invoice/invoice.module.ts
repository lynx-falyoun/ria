import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Invoice } from '@app/invoice/invoice.model';
import { InvoiceCrudController } from '@app/invoice/controllers/invoice-crud.controller';
import { InvoiceFlowController } from '@app/invoice/controllers/invoice-flow.controller';
import { InvoiceCrudService } from '@app/invoice/services/invoice-crud.service';
import { InvoiceFlowService } from '@app/invoice/services/invoice-flow.service';
import { AppFileModule } from '@app/global/app-file/app-file.module';
import { UserModule } from '@app/user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([Invoice]), AppFileModule, UserModule],
  controllers: [InvoiceCrudController, InvoiceFlowController],
  providers: [InvoiceCrudService, InvoiceFlowService],
  exports: [InvoiceCrudService, InvoiceFlowService],
})
export class InvoiceModule {}
