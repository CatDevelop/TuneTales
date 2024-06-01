import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../../pages/authorization-page/services/session-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
    const cacheService: SessionStorageService = inject(SessionStorageService);
    const router: Router = inject(Router);

    if (cacheService.getJWTSession().accessToken) {
        return true;
    }
    router.navigate(['login']);

    return false;
};
