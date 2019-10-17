import { NgModule } from '@angular/core';
import { MissionHomeComponent } from './mission-home/mission-home.component';
import { MissionRoutingModule } from './mission-routing.module';
import { ShareModule } from '../share/share.module';
import { MissionItemComponent } from './mission-item/mission-item.component';
import { MissionHeaderComponent } from './mission-header/mission-header.component';



@NgModule({
  declarations: [MissionHomeComponent, MissionItemComponent, MissionHeaderComponent],
  imports: [
    ShareModule,
    MissionRoutingModule,
  ],
})
export class MissionModule { }
