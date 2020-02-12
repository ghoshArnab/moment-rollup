# MomentJS with rollup


> *Natural esm code splitting using dynamic import.*


Change the language in browser to french/es/hi/ar/fr-ca to check this.

The main moment file needs to be added in src (like in current libs.js) and rest splitted files will be loaded dynamically.

## The output structure :

with all locales bundled together :
import(`moment/min/locales`);

![alt text](https://user-images.githubusercontent.com/8266671/74328695-614b5380-4db4-11ea-9779-b6bd21245fa1.png)

 
With individual imports :
import(`moment/locale/fr`);
 
each locale file will be dynamically imported.

![alt text](https://user-images.githubusercontent.com/8266671/74328675-58f31880-4db4-11ea-8ec7-56a5f26653f3.png)
 
