import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = ( ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const sidebarDir = imgDir+'/sidebar';
    const daysDir = imgDir+'/days';
    const avatarsDir = imgDir+'/avatar';
    const iconsDir = imgDir+'/icons';
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/day.svg'));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/month.svg'));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/project.svg'));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/projects.svg'));
    ir.addSvgIcon('class', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/class.svg'));
    ir.addSvgIcon('search', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/search.svg'));
    //ir.addSvgIcon('student', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/student.svg'));
    //ir.addSvgIcon('addStudent', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/addStudent.svg'));
    ir.addSvgIcon('addSidebar', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/add.svg'));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(sidebarDir+'/week.svg'));
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    days.forEach(d => ir.addSvgIcon('day'+d, ds.bypassSecurityTrustResourceUrl(daysDir+'/day'+ d + '.svg')));
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarsDir}/avatars.svg`));
    ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(avatarsDir+'/unassigned.svg'));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(iconsDir+'/move.svg'));
    //ir.addSvgIcon('editPencil', ds.bypassSecurityTrustResourceUrl(iconsDir+'/edit-pencil.svg'));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(iconsDir+'/delete.svg'));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(iconsDir+'/add.svg'));
}