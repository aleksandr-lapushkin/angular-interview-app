import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LoaderComponent } from "./loader.component";

@NgModule({
  declarations: [LoaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [LoaderComponent]
})
export class LoaderModule {}
