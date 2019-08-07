export class User {
  public name: string;
  public featureFlags: any;

  constructor({ name, featureFlags }: { name; featureFlags; }) {
    this.name = name;
    this.featureFlags = featureFlags;
  }

  hasFlags(flags: string | string[]) {
    if (typeof flags === 'string') {
      return this.featureFlags.hasOwnProperty(flags) && this.featureFlags[flags] === true;
    }
    for(const flag of flags) {
      if (this.featureFlags.hasOwnProperty(flag) && this.featureFlags[flag] === true) {
        return true;
      }
    }
    return false;
  }
}
