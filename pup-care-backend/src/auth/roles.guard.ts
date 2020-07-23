import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userRoles = request?.user?.roles;

    return matchRoles(roles, userRoles);
  }
}

function matchRoles(roles = [], userRoles = []) {
    return userRoles.some(role => roles.includes(role)) || userRoles.includes('admin');
}
