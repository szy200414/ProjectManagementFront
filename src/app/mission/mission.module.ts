import { NgModule } from '@angular/core';
import { MissionHomeComponent } from './mission-home/mission-home.component';
import { MissionRoutingModule } from './mission-routing.module';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [MissionHomeComponent],
  imports: [
    ShareModule,
    MissionRoutingModule,
  ],
})
export class MissionModule { }
