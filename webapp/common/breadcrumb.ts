import type { Store } from "~/store";

export interface AppBreadcrumbOptions {
  to: string | null;
  label: string;
}

export class AppBreadcrumb {
  to: string | null;
  label: string;
  constructor(crumb: AppBreadcrumbOptions) {
    this.to = crumb.to;
    this.label = crumb.label;
  }
  equals(other: AppBreadcrumb): boolean {
    return this.to === other.to && this.label === other.label;
  }
}

export async function setBreadcrumbs(
  store: Store,
  crumbOptions: AppBreadcrumbOptions[]
) {
  return store.mutations.setBreadcrumbs(
    crumbOptions.map((crumb) => new AppBreadcrumb(crumb))
  );
}
