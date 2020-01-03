import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-alert-services';
  constructor(
    private alertService: AlertService,
  ) { }

  getSuccessMessage() {
    this.alertService.success("Yeah !!!! You got message successfully");
  }
  getWarningMessage() {
    this.alertService.warning("Oh !!!! Plz check double");
  }
  getErrorMessage() {
    this.alertService.error("Ooopss !!!! Something went wrong");
  }
  getInfoMessage() {
    this.alertService.info("Yepp !!! This is a important information");
  }
  clearMessage() {
    this.alertService.clearAlertMessage();
  }

}
