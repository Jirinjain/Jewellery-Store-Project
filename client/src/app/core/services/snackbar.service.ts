import { inject, Service } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Service()
export class SnackbarService {
    private snackbar = inject(MatSnackBar);

    error(message: string) {
        this.snackbar.open(message, 'Close', {
            duration: 500,
            panelClass: ['snack-error']
        })
    }

    success(message: string) {
        this.snackbar.open(message, 'Close', {
            duration: 500,
            panelClass: ['snack-success']
        })
    }
}