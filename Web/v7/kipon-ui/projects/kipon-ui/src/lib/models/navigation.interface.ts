
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


