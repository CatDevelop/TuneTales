import { FormControl } from '@angular/forms';

export interface IAuthorizationForm {
    login: FormControl<string | null>;
    password: FormControl<string | null>;
}
