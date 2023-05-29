import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '../Components/main-header/main-header.component';
import { SharedHeaderComponent } from '../Components/shared-header/shared-header.component';
import { HiddenMenuComponent } from '../Components/hidden-menu/hidden-menu.component';
import { MainMenuComponent } from '../Components/main-menu/main-menu.component';
import { LogoComponent } from '../Components/logo/logo.component';
import { SecondMenuComponent } from '../Components/second-menu/second-menu.component';
import { InteractiveOptionsComponent } from '../Components/interactive-options/interactive-options.component';
import { RoutingHistoryComponent } from '../Components/routing-history/routing-history.component';
import { CardComponent } from '../Components/card/card.component';
import { FooterInteractiveComponent } from '../Components/footer-interactive/footer-interactive.component';
import { MainFooterComponent } from '../Components/main-footer/main-footer.component';
import { SharedFooterComponent } from '../Components/shared-footer/shared-footer.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { CardDetailComponent } from '../Components/card-detail/card-detail.component';
import { ShoppingCarComponent } from '../Components/shopping-car/shopping-car.component';



@NgModule({
  declarations: [MainHeaderComponent, SharedHeaderComponent, HiddenMenuComponent,MainMenuComponent,LogoComponent,
    SecondMenuComponent,InteractiveOptionsComponent, RoutingHistoryComponent, CardComponent, FooterInteractiveComponent,
    MainFooterComponent, SharedFooterComponent,MainPageComponent,CardDetailComponent,ShoppingCarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainHeaderComponent, SharedHeaderComponent, HiddenMenuComponent, MainMenuComponent, LogoComponent,
    SecondMenuComponent,InteractiveOptionsComponent, RoutingHistoryComponent, CardComponent, FooterInteractiveComponent,
    MainFooterComponent, SharedFooterComponent, MainPageComponent,CardDetailComponent,ShoppingCarComponent
  ]
})
export class SharedModule { }
