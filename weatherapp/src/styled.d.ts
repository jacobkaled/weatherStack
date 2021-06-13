import 'styled-components'

declare module 'styled-components' { 

export interface  theme {
    sizes:{
      gutterSmall : string,
      gutterMedium : string,
      gutterLarge : string,
      inputWidth:string,
    },
    colors:{
      backgroundcolor:string,
    }
  }

}