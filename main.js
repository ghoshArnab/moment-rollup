import moment from 'moment';
//import moment from 'moment';
//const fetchedLang = navigator.language.toLocaleLowerCase();
//const momentLang = `moment/locale/${fetchedLang}`;
//import 'moment/min/locales';
//import "moment/locale/fr-ca";



var span = document.querySelector('#time-now');


/* Strategy 1 : Using navigator.language to load only the locale that user's browser is set up with 
	This creates a main controller file and locale file are loaded as promise
	This supports esm code splitting
*/
export default async function update() {
    const getLocale = navigator.language.toLocaleLowerCase();
    switch (getLocale) {
        case 'fr':
            await import(`moment/locale/fr`);
            break;
        case 'ar':
            await import(`moment/locale/ar`);
            break;
        case 'hi':
            await import(`moment/locale/hi`);
            break;
        case 'es':
            await import(`moment/locale/es`);
            break;
        case 'fr-ca':
            await import(`moment/locale/fr-ca`);
            break;
        default:
        /* en is default included */
    }

    //await import(`moment/locale/${navigator.language}`); // Does not work
    //const module = import(`moment/locale/${navigator.language}`); //  Does not work
    moment.locale(getLocale);
    const momentTime = moment(new Date()).format('LLLL');
    span.textContent = `${momentTime}`;



}

/* End of strategy 1 */


/* Strategy 2 : Use import 'moment/min/locales' to get all locales and split in config - Rollup does not have splitchunks */
/* export default async function update() {
	
	await import('moment/min/locales');
	//const module = import(`moment/locale/${navigator.language}`);
	moment.locale('ar');
	const momentTime = moment(new Date()).format('LLLL');
	span.textContent = `${momentTime}`;



}*/

/* End of strategy 2 */

update();