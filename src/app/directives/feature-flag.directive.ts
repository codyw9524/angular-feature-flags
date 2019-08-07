import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Directive({
  selector: '[featureFlag]'
})
export class FeatureFlagDirective {
  @Input() public featureFlag: string | string[];

  constructor(private vcr: ViewContainerRef, private tpl: TemplateRef<any>, private userService: UserService) { }

  public ngOnInit() {
    this.userService
      .user$
      .subscribe((user: User) => {
        if (user) {
          if (this.userService.hasFlags(this.featureFlag)) {
            if (this.vcr.length === 0) {
              this.vcr.createEmbeddedView(this.tpl)
            }
          } else {
            this.vcr.clear();
          }
        } else {
          this.vcr.clear();
        }
      });
  }

}
