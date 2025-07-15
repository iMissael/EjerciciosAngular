import {Component, inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-injecting',
  imports: [MatButtonModule],
  templateUrl: './injecting.html',
  styleUrl: './injecting.css'
})
export class Injecting {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
}