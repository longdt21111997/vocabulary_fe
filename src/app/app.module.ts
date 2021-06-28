import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BodyModule, GridModule, SharedModule} from '@progress/kendo-angular-grid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LabelModule} from '@progress/kendo-angular-label';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ButtonModule} from '@progress/kendo-angular-buttons';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule,
    InputsModule,
    LabelModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    ButtonModule,
    MatTooltipModule,
    MatButtonModule,
    BodyModule,
    SharedModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
