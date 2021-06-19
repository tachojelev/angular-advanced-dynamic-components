import { Type } from "@angular/core";

export interface DynamicItem {
    componentType: Type<any>;
    data: any;
}
