# directive-inputmask

Vue.js directive to add a mask to your inputs (vanilla javascript).

It's a binding for the inputmask library by Robin Herbots [https://github.com/RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/probil/v-mask/master/LICENSE)
[![Vue2](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![](https://data.jsdelivr.com/v1/package/npm/directive-inputmask/badge?style=rounded)](https://www.jsdelivr.com/package/npm/directive-inputmask)

# Install 
```bash
npm install -S directive-inputmask
```

# Usage
```html
<input type="text" v-mask="'99/99/9999'" />
<input type="text" v-mask="{mask: '99/99/9999', greedy: true}" v-on:change="maskCheck"/>
```

```javascript
  import {DirectiveInputmask} from "directive-inputmask";

  export default {
    directives: {
      "mask": DirectiveInputmask
    }
  }
```
