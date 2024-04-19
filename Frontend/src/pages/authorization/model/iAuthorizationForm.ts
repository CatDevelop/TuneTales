import { FormControl } from '@angular/forms';

export interface IAuthorizationForm {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}
