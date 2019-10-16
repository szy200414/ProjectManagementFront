import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MissionHomeComponent } from './mission-home/mission-home.component';

const routes: Routes = [
    { path: 'project',
        children: [
            { path: ':projectId', component: MissionHomeComponent }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MissionRoutingModule {}
