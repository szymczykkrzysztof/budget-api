import { Injectable } from '@nestjs/common';
import { HealthStatus } from './dto/health.dto.js';

@Injectable()
export class HealthService {
  check(): HealthStatus {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
