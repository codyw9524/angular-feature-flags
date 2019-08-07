import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureFlagDirective } from './directives/feature-flag.directive';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    FeatureFlagDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
