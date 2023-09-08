import { InjectionToken } from '@angular/core';
import { UserService } from './user.Service';

// Crie um token de injeção para o UserService
export const USER_SERVICE = new InjectionToken<UserService>('UserService');
