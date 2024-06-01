import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SessionStorageService } from '../services/session-storage.service';

export const authorizationPageGuard: CanActivateFn = () => {
    const cacheService: SessionStorageService = inject(SessionStorageService);
    const router: Router = inject(Router);

    if (!cacheService.getJWTSession().accessToken) {
        return true;
    }
    router.navigate(['/']);

    return false;
};
