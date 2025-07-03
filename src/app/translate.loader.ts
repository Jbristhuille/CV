/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-03 21:22:29                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-03 21:26:20                              *
 ****************************************************************************/

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./i18n/", ".json");
}
