
export interface KoNavigation {
  id: string;
  title: string;
  disabled: boolean;
}

export class KoDivider implements KoNavigation {
  id: string;
  title: string;
  disabled: boolean;

  constructor() {
    this.id = "##divider##";
    this.title = "";
    this.disabled = true;
  }
}

export class KoNavigationByCssClass implements KoNavigation {
  id: string;
  title: string = null;
  disabled: boolean;
  cssClass: string;

  constructor(id: string, cssClass: string)
  constructor(id: string, cssClass: string, disabled: boolean)
  constructor(id: string, cssClass: string, disabled: boolean, title: string)
  constructor(id: string, cssClass: string, disabled: boolean = false, title: string = null ) {
    this.id = id;
    this.title = title;
    this.disabled = disabled;
    this.cssClass = cssClass;
  }
}

export class KoNavigationByImageUrl implements KoNavigation {
  id: string;
  title: string = null;
  disabled: boolean;
  imgUrl: string;

  constructor(id: string, imgUrl: string)
  constructor(id: string, imgUrl: string, disabled: boolean)
  constructor(id: string, imgUrl: string, disabled: boolean, title: string)
  constructor(id: string, imgUrl: string, disabled: boolean = false, title: string = null) {
    this.id = id;
    this.title = null;
    this.disabled = disabled;
    this.imgUrl = imgUrl;
  }
}
