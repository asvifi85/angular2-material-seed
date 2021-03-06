import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routers';
import { AppComponent }  from './app.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AboutComponent }  from './+about/index';
import { MaterialComponent }  from './material/index';
import { MdToolbarModule}    from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {MdSidenavModule} from'@angular2-material/sidenav';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdListModule} from '@angular2-material/list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdRadioModule,
    MdProgressCircleModule,
    MdProgressBarModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule,
    MdListModule,
    routing
  ],
  declarations: [
    AppComponent, AboutComponent, MaterialComponent
  ],
  providers: [
    MdIconRegistry//service
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
