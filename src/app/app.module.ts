import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule, MatCardModule, MatButtonModule, MatSidenavModule, MatToolbarModule,MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule,MatDialogModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,  
    MatButtonModule, 
    MatSidenavModule, 
    MatToolbarModule,MatMenuModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
