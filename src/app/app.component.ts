import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicHostDirective } from './dynamic-host/dynamic-host.directive';
import { HomeComponent } from './home/home.component';
import { DynamicItem } from './models/dynamic-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  dynamicItem: DynamicItem = {
    componentType: HomeComponent,
    data: 'Hello there!'
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  onLoadComponentClick(): void {
    // (Approach 1)
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
    // const componentRef = this.dynamicHost.viewContainerRef.createComponent<HomeComponent>(componentFactory);
    // componentRef.instance.message = "Hello there!";

    // (Approach 2)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicItem.componentType
    );
    const componentRef = this.dynamicHost.viewContainerRef.createComponent<{ data: any }>(componentFactory);
    componentRef.instance.data = "Hello there!";
  }

  onClearClick(): void {
    this.dynamicHost.viewContainerRef.clear();
  }
}
