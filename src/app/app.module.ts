import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import { CardReviewComponent } from './card-review/card-review.component';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    CardReviewComponent
  ],
  imports: [
    AutoCompleteModule,
    BrowserModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
