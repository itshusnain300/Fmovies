import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



 
@NgModule({
    
    imports: [
     Ng2SearchPipeModule,
     
  
    ],
    exports:[
        Ng2SearchPipeModule,
        
    ]
   
  })

  export class SharedModule { }