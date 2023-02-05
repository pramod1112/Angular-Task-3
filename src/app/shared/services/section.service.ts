import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SectionModel } from "../model/sectionList.model";

@Injectable({
    providedIn : 'root'
})
export class SectionService{
    private sectionList = [
        new SectionModel("Section 1","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rationevoluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi"),
        new SectionModel("Section 2","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rationevoluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi"),
        new SectionModel("Section 3","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rationevoluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi")
    ];

    sectionListChangeEvent = new Subject()

    getSectionList(){
        return this.sectionList.slice();
    }

    setSectionList(value :any){
        this.sectionList.push(value)
        this.sectionListChangeEvent.next(this.sectionList.slice());
    }
}