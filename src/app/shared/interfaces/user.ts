export interface User {
  key?: string;
  name: string;
  granted_scopes: string;
  id: string;
  verified_email: boolean;
  given_name: string;
  locale: string;
  family_name: string;
  email: string;
  picture: string;
}
