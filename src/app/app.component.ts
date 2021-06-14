import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicHostDirective } from './dynamic-host/dynamic-host.directive';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  onLoadComponentClick(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
    const componentRef = this.dynamicHost.viewContainerRef.createComponent<HomeComponent>(componentFactory);
    componentRef.instance.message = "Hello there!";
  }

  onClearClick(): void {
    this.dynamicHost.viewContainerRef.clear();
  }
}
