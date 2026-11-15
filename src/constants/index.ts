import { CHECKSUMS } from './checksum'
import { i18n as I18N } from './i18n'
import { PUBLIC_ROUTES } from './routes'

interface Constants {
  I18N: typeof I18N;
  CHECKSUMS: typeof CHECKSUMS;
  PUBLIC_ROUTES: typeof PUBLIC_ROUTES;
}

export const CONSTANT: Constants = {
  I18N,
  CHECKSUMS,
  PUBLIC_ROUTES,
}
