# kipon-ui version 4.x.x
Version 4 is same codebase with angular 14 as base.

# kipon-ui version 2.x.x

Version 2 is a simple upgrade to angular 11, with enableIvy false for compatibility reasons.

Kipon-ui is an angular 11 based framework with components that helps you organize an angular spa into panels, navigations and more.

The ui framework has been build with the purpose of creating fullscreen application where you need to organize the page into areas (or panels if you like).

The framework has not been build to solve every ui component need in the world, instead it works well togeter ex. with @angular/material.

I use the framework to share common ui organizations problem between my customer in my portefolio. If you have the same needs in your application, feel free
to use the library as is, and post issues on the GIT.

## Install and use

```bash
$ npm install kipon-ui --save
```

Then include the library in your angular module definition

```typescript
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { KiponUiModule } from 'kipon-ui'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    KiponUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Below documentation

{html-property=""} means that the property is optional. {} should be omitted in the html.
html-property="[value1 | value2 ]" means that the property can have ether value1 or value2

## Components
All components are prefixed ko-. Selector properties are also prefixed ko, while data properties keeps there plain natural name.

### Panels

#### ko-main
The ko-main component is simply creating a panel that takes up all space in the context where it has been defined. If this component
is used as the top level komponent, just hafter <body>... in the html page, it will ensure that the panel defined is taking up
all space on the browser. You should have only one single ko-main component in your application, and it should be the top komponent, just after the <body>
on your page.

```html
<ko-main></ko-main>
```

#### ko-view
Ko view is typically used to define a nested panel in a component, where all space in the area is taking up by the view. The view
component is by default hiding x-based content overflow, but addng y-based content scroll on a need base. Default it is
adding a 2px padding on all sides.

css classes:
* no-padding: Suppress padding on the container
* pad20: Set padding 20 20 on all sites.


```html
<ko-view {class="[no-padding | pad20]"}></ko-view>
```

#### ko-vertical-scroll
As the name indicates, this component will take up all the space and add fixed vertical scroll, and hide horizontal overflow. The scrollbar will be there
at all time, even if it is not needed.

```html
<ko-vertical-scroll></ko-vertical-scroll>
```

#### ko-horizontal-scroll
As the name indicates, this component will take up all space and add fixed horizontal scroll. The scrollbare will be there at all time,
even if it is not needed.

```html
<ko-horizontal-scroll></ko-horizontal-scroll>
```

#### ko-vertical-split.
The komponent will split the panel in a left side and a right side. 

The fixed property indicates if it is the left or the right panel that should have a fixed initial width. Default is left.
The width property is defining the width of the fixed panel. Default is 50%.

You must nest two components inside the vertical split, to define the
content of the left side and the right side. One of these components should be marked with an attribute "ko-left", indicating that it is the
left side panel, and the other should be marked "ko-right". In the example below we are using <ko-view>, but it can be any component, including
standard html tag such as &lt;div&gt;.

If class raw is added to the host tag, no borders will be added, and padding and margin will be set explicit to 0

```html
<ko-vertical-split {fixed="[left | right]"} {width="300px"} {class="raw"}>
   <ko-view ko-left>content for left panel</ko-view>
   <ko-view ko-right>content for right panel</ko-view>
</ko-vertical-split>
```

#### ko-horizontal-split.
The komponent will split the panel in a topand a bottom. 

The fixed property indicates if it is the top or the bottom panel that should have a fixed initial height. Default is top.
The height property is defining the height of the fixed panel. Default is 50%.

You must nest two components inside the vertical split, to define the
content of the top and the bottom. One of these components should be marked with an attribute "ko-top", indicating that it is the
top panel, and the other should be marked "ko-bottom". In the example below we are using <ko-view>, but it can be any component, including
standard html tag such as &lt;div&gt;.

If class raw is added to the host tag, no borders will be added, and padding and margin will be set explicit to 0

```html
<ko-horizontal-split {fixed="[top | bottom]"} {height="30px"} {class="raw"}>
   <ko-view ko-top>content for top panel</ko-view>
   <ko-view ko-bottom>content for bottom panel</ko-view>
</ko-horizontal-split>
```

#### ko-title-panel
This component is creating a title/body panel.

You must nest two components and set ko-title as property on the title part, and ko-body on the body part.

```html
<ko-title-panel>
     <ko-view ko-title>The title of the panel</ko-view>
     <ko-view ko-body>The body of the panel</ko-view>
</ko-title-panel>
```

#### ko-header
This component is loosely related to the ko-title-panel. It can be used as the ko-title component to add a simple text title on the panel that is
centralized.

```html
<ko-title-panel>
     <ko-header {align="left|center|right"} ko-title>The title of the panel</ko-header>
     <ko-view ko-body>The body of the panel</ko-view>
</ko-title-panel>
```
But the tag will also work outside the ko-title-panel, if you need to create a header that is centralizing in the component and takes up all space

```html
<ko-header>The title goes here</ko-header>
```

### ko-table-panel
This component handles horizontal scroll between a header panel and a body panel. The naming is stricly to create associations to its usage,
but the concept is not limited to be used with tables. The body panel will always have vertical scroll, and will show horizontal scroll if needed.
When the lower panel is scrolled left-right, the upper panel will be scrolled accordingly.

(from version 1.0.13) If there is a footer panel, the ko-table-footer panel will host the horizontal scroll-bar instead of the body.
```html
<ko-table-panel height="40px 60px">
  <table ko-table-header>
    header rows
  </table>
  <table ko-table-body>
    body rows
  </table>
  <table ko-table-footer>
    footer rows
  </table>
</ko-table-panel>
```

#### ko-expansion-panel
This component is creating a floating (take up 100% width, do not take up 100% height) title / body component, where the body can be hidden using a toggler.

This component is using Font Awsome icon. For now i did not add alterntive because i am always including fa.

The expandedChange will simply parse the new state of the component. (expanded or not).

```html
<ko-expansion-panel {[(expanded)]="bool telling if the panel is expanded"} (expandedChange)="callMeOnChange($event)">
   <div ko-title>Title goes here</div>
   <div ko-body>Body goes here</body>
</ko-expansion-panel>
```

### Messages

#### ko-alert
Alert text box that takes up all space and is vertical centering the content. 

```html
<ko-alert {class="warning"} {align="left|center|right"}></ko-alert>
```

#### ko-write
Ko write is a directive to allow the inner text of the tag to be written vertical. 
The div tag in below example will be sized exactly as ko-view, and the text will be written from be bottom and up, as default
or from the top and down, if you specify down.

```html
<ko-view>
   <div ko-write="up|down">Write me up or down</div>
</ko-alert>
```

### Forms

#### ko-decimal (directive)
This is a directive you can add to input fields to. The purpose is to ensure that the input only takes decimal number input

The value parsed to -ko-valueChange is the new decimal value of the field, but remember, by using the banana-in-box syntax, the
value can be binded both way, with having to explicitly listen to changes.

Align property was introduced in version 1.0.7 and allow you to the how the input field should be aligned. Default is right.

```html
<input ko-decimal="number of decimals" [(ko-value)]="yourmodel.decimalfield" {(ko-valueChange)="callMeOnChangeOfTheFieldFunction($event)"} {align="left|center|right"}/>
```

#### ko-focus (directive)
Simple directive to give an input control focus, whenever a variable is set to true. 

```html
<input [(ko-focus)]="model.focusFieldX" />
```

And in the controller script:
```typescript

doFocus(): void {
  this.model.focusFieldX = true;
}

```

### Navigation

### ko-over
This directive is simply adding and removing a fixed property named "over" on the object parsed the the directive.
The purpose is to make it easy ex. to use *ngIf on nested html that should be there depending on the mouse-over state
of the model class.

```html
<div [ko-over]="myobject">
   <span *ngIf="myobject.over">This will only be visible when mouse is over the div, while t</span>
   <span *ngIf="!myobject.over">T</span>his text should be visible at all time.
</div>
```

### ko-top-menu
This component is designed to create a very simple top menu navigation

You parse a list of navigation items (simply implement the KoNavigation interface), and set the component property to handle witch is current.
The current property with banana-in-box pattern allow the value to be parsed both way. You can listen to changes with currentChange event. It
will parse the id of the selected navigation item.

Optionally you can add additional content to the menu bar.

```html
<ko-top-menu [items]="array of KoNavigation" [(current)]="current selected value" {(currentChange)="methodToCallOnChangeCurrentValue($event)"}>
   Additional content added after menus
</ko-top-menu>
```
And in the component:

```typescript
import { KoNavigation, KoDivider } from 'kipon-ui';


export class AppComponent implements OnInit {
  items: KoNavigation[];
  current: string;

  ngOnInit(): void {
    this.items = [];
    this.items.push({ id: 'i1', title: 'Title 1', disabled: false, click: null, over: null });
    this.items.push({ id: 'i2', title: 'Title 2', disabled: false, click: null, over: null });
    this.items.push({ id: 'i3', title: 'Title 3', disabled: true, click: null, over: null });
    this.items.push({ id: 'i4', title: 'Title 4', disabled: false, click: null, over: null });
    this.items.push(new KoDivider());
    this.items.push({ id: 'i5', title: 'Title 5', disabled: false, click: null, over: null });
    this.items.push({ id: 'i6', title: 'Title 6', disabled: false, click: this.callMeInsteadOfChangeCurrent, over: null });
    this.current = "i2";
  }
}
```

### ko-left-menu
This component is designed to create a very simple left menu navigation

You parse a list of navigation items (simply implement the KoNavigation, or use new (KoNavigationByCssClass or new KoNavigationByImgUrl)) depending on your need.

The first version of the left menu has been designed to mostly support icon based menu. The best usage is to use icon classes or img url to keep the menu items short.
The height of each menu-item i set to equals the width of the menu to create a perfect symetry.

Optionally you can add additional content to the menu bar.

<ko-left-menu [items]="array of KoNavigation" [(current)]="current selected value" (currentChange)="methodToCallOnChangeCurrentValue($event)">
  Additional content added after menu
</ko-left-menu>

And in the component:

```typescript
import { KoNavigation, KoNavigationByCssClass } from 'kipon-ui';


export class AppComponent implements OnInit {
  items: KoNavigation[];
  current: string;

  ngOnInit(): void {
    this.items = [];
    this.items.push({ id: 'i1', title: 'A', disabled: false, click: null, over: null });
    this.items.push({ id: 'i2', title: 'B', disabled: false, click: null, over: null });
    this.items.push({ id: 'co', title: 'C', disabled: false, click: this.callMeInsteadOfChangeCurrent, over: null });
    this.items.push(new KoNavigationByCssClass("i3", "fa fa-archive", false, "Title mouse over on top menu"));

    this.current = "i2";
  }
}
```



## Like this?
If you like this library, please go to the git repository and give it a star. That will confirm for other potential developers that this could be a good track.

[Goto git repository](https://github.com/kip-dk/angular-ui) <br />

If you have issues, ideas or so, do not hesitate to post an issue on GIT. I try to be responsive and appriciate any input from you.


## License
MIT © [Kipon ApS, 2018, 2019, 2020](mailto:kip@kipon.dk)

