import { Routes,RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import {RegComponent} from './reg/reg.component';
import {GalleryComponent} from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
{
    path: '',
    component: ContentComponent
    },
    {
    path: 'signin',
    component: SigninComponent
    }
    ,
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'reg',
        component: RegComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path:'gallery/product',
        component:ProductComponent 
    }


];
