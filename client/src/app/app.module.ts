import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule,} from '@angular/material/grid-list'
import { MatMenuModule,} from '@angular/material/menu'
import { MatButtonModule,} from '@angular/material/button'
import { MatCardModule,} from '@angular/material/card'
import { MatIconModule,} from '@angular/material/icon'
import { MatListModule,} from '@angular/material/list'
import { MatTableModule,} from '@angular/material/table'
import { MatSnackBarModule,} from '@angular/material/snack-bar'
    
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimeApiService } from './services/anime-api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimedisplayComponent } from './anime/animedisplay/animedisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AnimeComponent,
    AnimedisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [AnimeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
