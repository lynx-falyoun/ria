import { EmployeeLevelEnum } from '@app/departments/financial/salary-scale/enums/employee-level.enum';
import { JobDto } from '@app/departments/financial/salary-scale/job/dtos/job.dto';
import { Allow, IsEnum, IsPositive } from 'class-validator';

export class SalaryScaleJobDto {
  @IsPositive()
  id?: number;

  @IsPositive()
  jobId: number;

  @Allow()
  job?: JobDto;

  @IsPositive()
  salaryScaleId: number;

  @IsEnum(EmployeeLevelEnum)
  employeeLevel: EmployeeLevelEnum;

  @IsPositive()
  amount: number;
}
