import { FormControl } from '@angular/forms';

export interface IRegisterForm {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    login: FormControl<string | null>;
    firstName: FormControl<string | null>;
    secondName: FormControl<string | null>;
    lastName: FormControl<string | null>;
}
